import { Carousel } from "@/vendor/arc/carousel/carousel";

export function Suites() {
  return (
    <Carousel label="Harbour suites" interval={5000}>
      <img src={`${import.meta.env.BASE_URL}assets/preview-landscape.svg`} alt="Sea view suite" />
      <img src={`${import.meta.env.BASE_URL}assets/preview-landscape.svg`} alt="Garden suite" />
      <img src={`${import.meta.env.BASE_URL}assets/preview-landscape.svg`} alt="Loft suite" />
    </Carousel>
  );
}
