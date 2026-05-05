import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { getStaticModal as resolveStaticModal, resolveT } from "../lib/t.js";

const ContentStringsContext = createContext(null);

export function ContentStringsProvider({ children }) {
  const [showKeys, setShowKeys] = useState(false);

  const t = useCallback(
    (path, extra) => (showKeys ? path : resolveT(path, extra)),
    [showKeys],
  );

  const tx = useCallback(
    (path, value) => (showKeys ? path : (value ?? "")),
    [showKeys],
  );

  const getStaticModal = useCallback(
    (key) => {
      if (showKeys) {
        return {
          title: `modals.${key}.title`,
          bodyHtml: `<p class="content-keys-debug"><code>modals.${key}.bodyHtml</code></p>`,
        };
      }
      return resolveStaticModal(key);
    },
    [showKeys],
  );

  const value = useMemo(
    () => ({ showKeys, setShowKeys, t, tx, getStaticModal }),
    [showKeys, t, tx, getStaticModal],
  );

  return <ContentStringsContext.Provider value={value}>{children}</ContentStringsContext.Provider>;
}

export function useContentStrings() {
  const v = useContext(ContentStringsContext);
  if (v == null) {
    throw new Error("useContentStrings musi być wewnątrz ContentStringsProvider");
  }
  return v;
}
