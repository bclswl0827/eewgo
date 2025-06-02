package eewgo

import "math"

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

func NewLowPassFIRFilter(cutoffFreq, sampleRate float64, numTaps int) (*FIRFilter, []float64) {
	normalizedCutoff := cutoffFreq / sampleRate
	coeffs := make([]float64, numTaps)

	center := numTaps / 2
	for i := 0; i < numTaps; i++ {
		n := float64(i - center)
		if i == center {
			coeffs[i] = 2 * normalizedCutoff
		} else {
			coeffs[i] = math.Sin(2*math.Pi*normalizedCutoff*n) / (math.Pi * n)
		}

		// Hamming window
		coeffs[i] *= 0.54 - 0.46*math.Cos(2*math.Pi*float64(i)/float64(numTaps-1))
	}

	// Normalize gain
	var sum float64
	for _, c := range coeffs {
		sum += c
	}
	for i := range coeffs {
		coeffs[i] /= sum
	}

	return &FIRFilter{
		kernel: coeffs,
		state:  make([]float64, numTaps-1),
	}, coeffs
}

func NewBandPassFIRFilter(lowCutoffFreq, highCutoffFreq, sampleRate float64, numTaps int) (*FIRFilter, []float64) {
	low := 2 * math.Pi * lowCutoffFreq / sampleRate
	high := 2 * math.Pi * highCutoffFreq / sampleRate

	coeffs := make([]float64, numTaps)
	center := numTaps / 2

	for i := 0; i < numTaps; i++ {
		n := float64(i - center)
		if i == center {
			coeffs[i] = (high - low) / math.Pi
		} else {
			coeffs[i] = (math.Sin(high*n) - math.Sin(low*n)) / (math.Pi * n)
		}
		coeffs[i] *= 0.54 - 0.46*math.Cos(2*math.Pi*float64(i)/float64(numTaps-1))
	}

	return &FIRFilter{
		kernel: coeffs,
		state:  make([]float64, numTaps-1),
	}, coeffs
}

func NewHighPassFIRFilter(cutoffFreq, sampleRate float64, numTaps int) (*FIRFilter, []float64) {
	_, lowPassCoeffs := NewLowPassFIRFilter(cutoffFreq, sampleRate, numTaps)
	coeffs := make([]float64, numTaps)
	for i := range lowPassCoeffs {
		if i == numTaps/2 {
			coeffs[i] = 1 - lowPassCoeffs[i]
		} else {
			coeffs[i] = -lowPassCoeffs[i]
		}
	}

	return &FIRFilter{
		kernel: coeffs,
		state:  make([]float64, numTaps-1),
	}, coeffs
}
