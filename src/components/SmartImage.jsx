import { useEffect, useState } from "react";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

export function SmartImage({
  imageKey,
  primary,
  fallback,
  keysSource,
  alt,
  className,
  loading,
  width,
  height,
  style,
  draggable,
  ...rest
}) {
  const { showKeys } = useContentStrings();
  const [src, setSrc] = useState(primary);

  useEffect(() => {
    setSrc(primary);
  }, [primary]);

  if (showKeys) {
    const p = primary ?? "";
    const f = fallback ?? "";
    const boxStyle = {
      ...style,
      ...(width != null ? { width: typeof width === "number" ? `${width}px` : width } : null),
      ...(height != null ? { height: typeof height === "number" ? `${height}px` : height } : null),
    };
    const row1Label = imageKey ? "file" : "primary";
    const row2Label = imageKey ? "url" : "fallback";
    const fileForKeys = imageKey
      ? keysSource
        ? keysSource.file || "—"
        : p || "—"
      : null;
    const urlForKeys = imageKey
      ? keysSource
        ? keysSource.url || "—"
        : f || "—"
      : null;

    return (
      <div
        className={["smart-image-keys", className].filter(Boolean).join(" ")}
        style={Object.keys(boxStyle).length ? boxStyle : undefined}
        draggable={draggable}
      >
        <div className="smart-image-keys__inner">
          {imageKey ? (
            <div className="smart-image-keys__row smart-image-keys__row--key">
              <span className="smart-image-keys__label">IMG</span>
              <code className="smart-image-keys__value smart-image-keys__value--key">IMG.{imageKey}</code>
            </div>
          ) : null}
          {imageKey ? (
            <>
              <div className="smart-image-keys__row">
                <span className="smart-image-keys__label">file</span>
                <code className="smart-image-keys__value">{fileForKeys}</code>
              </div>
              <div className="smart-image-keys__row">
                <span className="smart-image-keys__label">url</span>
                <code className="smart-image-keys__value">{urlForKeys}</code>
              </div>
            </>
          ) : (
            <>
              <div className="smart-image-keys__row">
                <span className="smart-image-keys__label">{row1Label}</span>
                <code className="smart-image-keys__value">{p || "—"}</code>
              </div>
              {f && f !== p ? (
                <div className="smart-image-keys__row">
                  <span className="smart-image-keys__label">{row2Label}</span>
                  <code className="smart-image-keys__value">{f}</code>
                </div>
              ) : null}
            </>
          )}
          {alt ? (
            <div className="smart-image-keys__row">
              <span className="smart-image-keys__label">alt</span>
              <code className="smart-image-keys__value">{alt}</code>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      style={style}
      draggable={draggable}
      onError={() => {
        if (fallback) setSrc(fallback);
      }}
      {...rest}
    />
  );
}
