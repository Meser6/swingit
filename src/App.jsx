import { useEffect, useState } from "react";
import "./App.css";
import { ContentStringsProvider, useContentStrings } from "./context/ContentStringsContext.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Modal } from "./components/Modal.jsx";
import { TabPanels } from "./components/TabPanels.jsx";

function AppShell() {
  const { getStaticModal } = useContentStrings();
  const [tab, setTab] = useState("start");
  const [modalOpen, setModalOpen] = useState(false);

  const contactModal = getStaticModal("contact");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [tab]);

  return (
    <div id="top" className="page-shell">
      <Header
        activeTab={tab}
        onTab={setTab}
        onOpenContact={() => setModalOpen(true)}
        onBrandClick={() => {
          setTab("start");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <main className={tab === "start" ? "" : "main--subpage"}>
        {tab === "start" && <Hero />}
        <TabPanels activeTab={tab} />
        <div id="gallery-lightbox-mount" className="gallery-lightbox-mount" />
      </main>
      <Footer />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={contactModal?.title ?? ""}>
        {contactModal ? <div dangerouslySetInnerHTML={{ __html: contactModal.bodyHtml }} /> : null}
      </Modal>
    </div>
  );
}

export default function App() {
  return (
    <ContentStringsProvider>
      <AppShell />
    </ContentStringsProvider>
  );
}
