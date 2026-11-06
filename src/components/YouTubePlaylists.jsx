import videos from "../content/videos.json";
import ui from "../content/ui.json";
import { Reveal } from "../hooks/Reveal.jsx";

export function YouTubePlaylists() {
  return (
    <section className="youtube-playlists" aria-labelledby="youtube-playlists-heading">
      <Reveal>
        <h3 id="youtube-playlists-heading" className="youtube-playlists__title">
          {ui.offerSections.videosHeading}
        </h3>
        <p className="section-sub">{ui.offerSections.videosSub}</p>
      </Reveal>
      <div className="youtube-playlists__grid">
        {videos.playlists.map((pl) => (
          <Reveal key={pl.id}>
            <article className="youtube-playlists__card">
              <h4 className="youtube-playlists__label">{pl.label}</h4>
              <div className="youtube-playlists__embed media-frame media-frame--16-9">
                <iframe
                  title={pl.label}
                  src={`https://www.youtube.com/embed/videoseries?list=${pl.playlistId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
