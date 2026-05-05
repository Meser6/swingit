import { IMG, imgPair } from "../constants/images";
import { SmartImage } from "./SmartImage";

export function BrandMark({ className = "brand-mark" }) {
  return (
    <SmartImage
      imageKey="logo"
      {...imgPair(IMG.logo)}
      alt=""
      className={className}
      draggable={false}
    />
  );
}
