import { IMG } from "../constants/images.js";
import { SmartImage } from "./SmartImage.jsx";

export function BrandMark({ className = "brand-mark" }) {
  return <SmartImage src={IMG.logo} alt="" className={className} draggable={false} />;
}
