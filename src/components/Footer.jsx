import { INSTAGRAM_URL, LINKEDIN_URL } from "../constants/social.js";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedInIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-row">
        <span>
          © {year} Compas · dr Syrek
        </span>
        <div className="social">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-pill"
            aria-label="Profil Instagram Compas"
          >
            <InstagramIcon width={20} height={20} /> Instagram
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-pill"
            aria-label="Profil LinkedIn — Daniel Syrek"
          >
            <LinkedInIcon width={20} height={20} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
