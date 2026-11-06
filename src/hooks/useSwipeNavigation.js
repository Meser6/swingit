import { useEffect, useRef } from "react";

const TAB_ORDER = ["start", "o-mnie", "oferta", "galeria", "opinie", "kontakt"];
const SWIPE_THRESHOLD = 60;
const VERTICAL_RESTRAINT = 80;

export function useSwipeNavigation(activeTab, onTab) {
  const touchRef = useRef({ x: 0, y: 0, tracking: false });

  useEffect(() => {
    const onTouchStart = (e) => {
      if (document.body.style.overflow === "hidden") return;
      const t = e.touches[0];
      touchRef.current = { x: t.clientX, y: t.clientY, tracking: true };
    };

    const onTouchEnd = (e) => {
      if (!touchRef.current.tracking) return;
      touchRef.current.tracking = false;

      const t = e.changedTouches[0];
      const dx = t.clientX - touchRef.current.x;
      const dy = t.clientY - touchRef.current.y;

      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dy) > VERTICAL_RESTRAINT) return;

      const idx = TAB_ORDER.indexOf(activeTab);
      if (idx === -1) return;

      if (dx < 0 && idx < TAB_ORDER.length - 1) {
        onTab(TAB_ORDER[idx + 1]);
      } else if (dx > 0 && idx > 0) {
        onTab(TAB_ORDER[idx - 1]);
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeTab, onTab]);
}
