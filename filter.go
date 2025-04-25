package eewgo

import "math"

func NewFilter(kernel []float64) *FIRFilter {
	return &FIRFilter{
		kernel: kernel,
		state:  make([]float64, len(kernel)-1),
	}
}

func (f *FIRFilter) Apply(input []float64) []float64 {
	numTaps := len(f.kernel)
	extendedInput := append(f.state, input...)
	output := make([]float64, len(input))

	for i := range output {
		for j := 0; j < numTaps; j++ {
			output[i] += extendedInput[i+j] * f.kernel[j]
		}
	}

	copy(f.state, extendedInput[len(extendedInput)-(numTaps-1):])
	return output
}

func UseLowPassFilter(cutoffFreq, sampleRate float64, numTaps int) []float64 {
	normalizedCutoff := 2 * math.Pi * cutoffFreq / sampleRate
	coeffs := make([]float64, numTaps)

	for i := 0; i < numTaps; i++ {
		if i == numTaps/2 {
			coeffs[i] = normalizedCutoff / math.Pi
		} else {
			coeffs[i] = math.Sin(normalizedCutoff*float64(i-numTaps/2)) / (math.Pi * float64(i-numTaps/2))
		}
	}

	window := make([]float64, numTaps)
	for i := 0; i < numTaps; i++ {
		window[i] = 0.54 - 0.46*math.Cos(2*math.Pi*float64(i)/float64(numTaps-1))
		coeffs[i] *= window[i]
	}

	return coeffs
}

func UseHighPassFilter(cutoffFreq, sampleRate float64, numTaps int) []float64 {
	lowPassCoeffs := UseLowPassFilter(cutoffFreq, sampleRate, numTaps)
	highPassCoeffs := make([]float64, numTaps)
	for i := range lowPassCoeffs {
		if i == numTaps/2 {
			highPassCoeffs[i] = 1 - lowPassCoeffs[i]
		} else {
			highPassCoeffs[i] = -lowPassCoeffs[i]
		}
	}
	return highPassCoeffs
}

func UseBandPassFilter(lowCutoffFreq, highCutoffFreq, sampleRate float64, numTaps int) []float64 {
	lowPassCoeffs := UseLowPassFilter(highCutoffFreq, sampleRate, numTaps)
	highPassCoeffs := UseHighPassFilter(lowCutoffFreq, sampleRate, numTaps)
	bandPassCoeffs := make([]float64, numTaps)
	for i := range bandPassCoeffs {
		bandPassCoeffs[i] = lowPassCoeffs[i] + highPassCoeffs[i]
	}
	return bandPassCoeffs
}
