package eewgo

import (
	"embed"
	"fmt"

	"github.com/dop251/goja"
)

//go:embed js
var oregonDspScript embed.FS

func NewFilter() (Filter, error) {
	jsRuntime := goja.New()

	// console.log() and console.assert() are not defined in goja by default,
	// but we need make them to be defined, so that the filter script can work.
	obj := jsRuntime.NewObject()
	obj.Set("log", func(msg ...any) { fmt.Println(msg...) })
	obj.Set("assert", func(msg ...any) {})
	jsRuntime.Set("console", obj)

	// Load kotlin-kotlin-stdlib-js-ir.js
	scriptData, err := oregonDspScript.ReadFile("js/kotlin-kotlin-stdlib-js-ir.js")
	if err != nil {
		return Filter{}, err
	}
	script, err := stripSourceMap(string(scriptData))
	if err != nil {
		return Filter{}, err
	}
	_, err = jsRuntime.RunString(script)
	if err != nil {
		return Filter{}, err
	}

	// Load oregondsp.js
	scriptData, err = oregonDspScript.ReadFile("js/oregondsp.js")
	if err != nil {
		return Filter{}, err
	}
	script, err = stripSourceMap(string(scriptData))
	if err != nil {
		return Filter{}, err
	}
	_, err = jsRuntime.RunString(script)
	if err != nil {
		return Filter{}, err
	}

	// Extract OregonDSP object
	_, err = jsRuntime.RunString("const oregonDspObj = oregondsp.com.oregondsp.signalProcessing;")
	if err != nil {
		panic(err)
	}

	// Extract the filter passband types
	_, err = jsRuntime.RunString("const lowPass = oregonDspObj.filter.iir.PassbandType.LOWPASS;")
	if err != nil {
		return Filter{}, err
	}
	_, err = jsRuntime.RunString("const highPass = oregonDspObj.filter.iir.PassbandType.HIGHPASS;")
	if err != nil {
		return Filter{}, err
	}
	_, err = jsRuntime.RunString("const bandPass = oregonDspObj.filter.iir.PassbandType.BANDPASS;")
	if err != nil {
		return Filter{}, err
	}

	// Create filter handler
	_, err = jsRuntime.RunString(`
		const ButterWorth = oregonDspObj.filter.iir.Butterworth;
		const handleButterWorth = (record, poles, passbandType, lowCorner, highCorner, delta) => {
			const filterObj = new ButterWorth(poles, passbandType, lowCorner, highCorner, delta);
			filterObj.filterInPlace(record);
			return record;
		}
		const ChebyshevI = oregonDspObj.filter.iir.ChebyshevI;
		const handleChebyshevI = (record, poles, passbandType, lowCorner, highCorner, delta, ripple) => {
			const filterObj = new ChebyshevI(poles, ripple, passbandType, lowCorner, highCorner, delta);
			filterObj.filterInPlace(record);
			return record;
		}
		const ChebyshevII = oregonDspObj.filter.iir.ChebyshevII;
		const handleChebyshevII = (record, poles, passbandType, lowCorner, highCorner, delta, ripple) => {
			const filterObj = new ChebyshevII(poles, ripple, passbandType, lowCorner, highCorner, delta);
			filterObj.filterInPlace(record);
			return record;
		}
	`)
	if err != nil {
		return Filter{}, err
	}

	return Filter{vm: jsRuntime}, nil
}

func (f *Filter) Butterworth(data []float64, poles int, delta, lowCorner, highCorner float64, passbandType PassbandType) ([]float64, error) {
	passbandTypeJs := f.vm.Get("bandPass")
	if passbandType == LOWPASS {
		passbandTypeJs = f.vm.Get("lowPass")
	} else if passbandType == HIGHPASS {
		passbandTypeJs = f.vm.Get("highPass")
	}

	filterHandler, ok := goja.AssertFunction(f.vm.Get("handleButterWorth"))
	if !ok {
		return nil, fmt.Errorf("failed to assert handleButterWorth function")
	}

	res, err := filterHandler(
		goja.Undefined(),
		f.vm.ToValue(data),
		f.vm.ToValue(poles),
		passbandTypeJs,
		f.vm.ToValue(lowCorner),
		f.vm.ToValue(highCorner),
		f.vm.ToValue(delta),
	)
	if err != nil {
		return nil, err
	}

	var resArr []float64
	f.vm.ExportTo(res, &resArr)
	return resArr, nil
}

func (f *Filter) ChebyshevI(data []float64, poles int, delta, lowCorner, highCorner, ripple float64, passbandType PassbandType) ([]float64, error) {
	passbandTypeJs := f.vm.Get("bandPass")
	if passbandType == LOWPASS {
		passbandTypeJs = f.vm.Get("lowPass")
	} else if passbandType == HIGHPASS {
		passbandTypeJs = f.vm.Get("highPass")
	}

	filterHandler, ok := goja.AssertFunction(f.vm.Get("handleChebyshevI"))
	if !ok {
		return nil, fmt.Errorf("failed to assert handleChebyshevI function")
	}

	res, err := filterHandler(
		goja.Undefined(),
		f.vm.ToValue(data),
		f.vm.ToValue(poles),
		passbandTypeJs,
		f.vm.ToValue(lowCorner),
		f.vm.ToValue(highCorner),
		f.vm.ToValue(delta),
		f.vm.ToValue(ripple),
	)
	if err != nil {
		return nil, err
	}

	var resArr []float64
	f.vm.ExportTo(res, &resArr)
	return resArr, nil
}

func (f *Filter) ChebyshevII(data []float64, poles int, delta, lowCorner, highCorner, ripple float64, passbandType PassbandType) ([]float64, error) {
	passbandTypeJs := f.vm.Get("bandPass")
	if passbandType == LOWPASS {
		passbandTypeJs = f.vm.Get("lowPass")
	} else if passbandType == HIGHPASS {
		passbandTypeJs = f.vm.Get("highPass")
	}

	filterHandler, ok := goja.AssertFunction(f.vm.Get("handleChebyshevII"))
	if !ok {
		return nil, fmt.Errorf("failed to assert handleChebyshevII function")
	}

	res, err := filterHandler(
		goja.Undefined(),
		f.vm.ToValue(data),
		f.vm.ToValue(poles),
		passbandTypeJs,
		f.vm.ToValue(lowCorner),
		f.vm.ToValue(highCorner),
		f.vm.ToValue(delta),
		f.vm.ToValue(ripple),
	)
	if err != nil {
		return nil, err
	}

	var resArr []float64
	f.vm.ExportTo(res, &resArr)
	return resArr, nil
}
