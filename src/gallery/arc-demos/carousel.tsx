import { Carousel } from "@/vendor/arc/carousel/carousel";

export function Suites() {
  return (
    <Carousel label="Harbour suites" interval={5000}>
      <img src="/assets/preview-landscape.svg" alt="Sea view suite" />
      <img src="/assets/preview-landscape.svg" alt="Garden suite" />
      <img src="/assets/preview-landscape.svg" alt="Loft suite" />
    </Carousel>
  );
}
