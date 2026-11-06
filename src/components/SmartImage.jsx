import { publicPath } from "../lib/publicPath.js";

export function SmartImage({ src, alt, className, loading, width, height, style, draggable, ...rest }) {
  return (
    <img
      src={publicPath(src)}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      style={style}
      draggable={draggable}
      {...rest}
    />
  );
}
