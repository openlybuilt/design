import { useState } from "react";
import { RangeHistogramSlider } from "@/vendor/arc/range-histogram-slider/range-histogram-slider";

export function PriceFilter() {
  const [range, setRange] = useState<[number, number]>([80, 320]);
  return (
    <RangeHistogramSlider
      label="Price per night"
      data={Array.from({length: 60}, (_, i) => 40 + (i * 37) % 430)}
      min={0}
      max={500}
      step={5}
      bins={25}
      value={range}
      onValueChange={setRange}
      
      format={value => `$${value}`}
    />
  );
}
