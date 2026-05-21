import { CONTENT } from "../lib/t.js";
import { useContentStrings } from "../context/ContentStringsContext.jsx";
import { Reveal } from "../hooks/Reveal";

export function YouTubePlaylists() {
  const { tx } = useContentStrings();
  const playlists = CONTENT.videos.playlists;
  const copy = CONTENT.ui.offerSections;

  return (
    <section className="youtube-playlists" aria-labelledby="youtube-playlists-heading">
      <Reveal>
        <h3 id="youtube-playlists-heading" className="youtube-playlists__title">
          {tx("ui.offerSections.videosHeading", copy.videosHeading)}
        </h3>
        <p className="section-sub">{tx("ui.offerSections.videosSub", copy.videosSub)}</p>
      </Reveal>
      <div className="youtube-playlists__grid">
        {playlists.map((pl, i) => (
          <Reveal key={pl.id}>
            <article className="youtube-playlists__card">
              <h4 className="youtube-playlists__label">{tx(`videos.playlists[${i}].label`, pl.label)}</h4>
              <div className="youtube-playlists__embed media-frame media-frame--16-9">
                <iframe
                  title={tx(`videos.playlists[${i}].label`, pl.label)}
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
