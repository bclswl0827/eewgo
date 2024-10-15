package main

import (
	"fmt"
	"log"
	"math"
	"time"

	"github.com/bclswl0827/eewgo"
	"github.com/bclswl0827/mseedio"
)

const (
	staWindow = 1000
	ltaWindow = 10000
	trigOn    = 1.5
	trigOff   = 0.5
)

func main() {
	var miniseed mseedio.MiniSeedData
	err := miniseed.Read("./testdata.mseed")
	if err != nil {
		log.Fatalln(err)
		return
	}
	duration := miniseed.Series[0].FixedSection.SamplesNumber / miniseed.Series[0].FixedSection.SampleFactor
	sampleRate := float64(int(miniseed.Series[0].FixedSection.SamplesNumber / duration))
	log.Println("Successfully read miniSEED file")

	var trData []float64
	for i := 0; i < len(miniseed.Series); i++ {
		for j := 0; j < len(miniseed.Series[i].DataSection.Decoded); j++ {
			trData = append(trData, float64(miniseed.Series[i].DataSection.Decoded[j].(int32)))
		}
	}
	log.Println("Successfully generate trace data")

	staLta := eewgo.CarlStaTrig(trData, staWindow, ltaWindow, 1, 1)
	log.Println("Get STA/LTA successfully")

	onsets := eewgo.TriggerOnset(staLta, trigOn, trigOff, math.MaxInt64, false)
	log.Printf("Detected %d event(s)", len(onsets))

	for _, onset := range onsets {
		eventTime := miniseed.Series[0].FixedSection.StartTime.Add(time.Duration(onset[0]) * time.Second / time.Duration(sampleRate))
		fmt.Printf("Detected event at: %s\n", eventTime)
	}
}
