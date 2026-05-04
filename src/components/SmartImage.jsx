import { useState } from "react";

export function SmartImage({ primary, fallback, alt, className, loading, ...rest }) {
  const [src, setSrc] = useState(primary);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setSrc(fallback)}
      {...rest}
    />
  );
}
