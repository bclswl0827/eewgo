package eewgo

import (
	"github.com/dop251/goja"
)

type PassbandType = int

const (
	LOWPASS PassbandType = iota
	HIGHPASS
	BANDPASS
)

type Filter struct {
	// To avoid reinventing the wheel, I used OregonDSP-kotlin provided by @crotwell (https://github.com/crotwell/OregonDSP-kotlin),
	// It provide JavaScript implemented filters of the OregonDSP library (in js/seisplotjs_filter_1.2.0_standalone.js).
	// To integrate this library to Go without CGO, I used https://github.com/dop251/goja, which is is an implementation of ECMAScript 5.1.
	// To build the OregonDSP library from source, please read README.md in the same directory (js/README.md).
	vm *goja.Runtime
}
