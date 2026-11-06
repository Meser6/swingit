import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { TabPanels } from "./components/TabPanels.jsx";
import { useSwipeNavigation } from "./hooks/useSwipeNavigation.js";

export default function App() {
  const [tab, setTab] = useState("start");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [tab]);

  useSwipeNavigation(tab, setTab);

  return (
    <div id="top" className="page-shell">
      <Header
        activeTab={tab}
        onTab={setTab}
        onBrandClick={() => {
          setTab("start");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <main className={tab === "start" ? "" : "main--subpage"}>
        {tab === "start" && <Hero />}
        <TabPanels activeTab={tab} onTab={setTab} />
        <div id="gallery-lightbox-mount" className="gallery-lightbox-mount" />
      </main>
      <Footer />
    </div>
  );
}
