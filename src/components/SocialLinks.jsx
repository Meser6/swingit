import { SOCIAL_LINKS } from "../constants/social.js";
import { useContentStrings } from "../context/ContentStringsContext.jsx";
import { FacebookIcon } from "./FacebookIcon.jsx";
import { InstagramIcon } from "./InstagramIcon.jsx";
import { TikTokIcon } from "./TikTokIcon.jsx";
import { YouTubeIcon } from "./YouTubeIcon.jsx";

const ICONS = {
  wzk: null,
  youtube: YouTubeIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
};

const ARIA_KEYS = {
  wzk: "ui.social.wzkAria",
  youtube: "ui.social.youtubeAria",
  facebook: "ui.social.facebookAria",
  instagram: "ui.social.instagramAria",
  tiktok: "ui.social.tiktokAria",
};

export function SocialLinks({ className = "social-links" }) {
  const { t } = useContentStrings();

  return (
    <ul className={className}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-links__item social-links__item--${link.id}`}
              aria-label={t(ARIA_KEYS[link.id])}
            >
              {Icon ? <Icon width={20} height={20} /> : <span className="social-links__wzk">WZK</span>}
              <span>{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
