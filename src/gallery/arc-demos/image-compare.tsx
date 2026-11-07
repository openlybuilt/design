import { ImageCompare } from "@/vendor/arc/image-compare/image-compare";

export function Retouch() {
  return (
    <ImageCompare
      before={<img src={`${import.meta.env.BASE_URL}assets/preview-landscape.svg`} alt="Unedited photo" />}
      after={<img src={`${import.meta.env.BASE_URL}assets/preview-landscape.svg`} alt="Retouched photo" style={{filter: "saturate(2) hue-rotate(40deg)"}} />}
      aspectRatio="4 / 3"
    />
  );
}
