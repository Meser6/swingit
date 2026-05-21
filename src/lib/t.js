import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WESELE_Z_KLASA_URL,
  YOUTUBE_URL,
} from "../constants/social.js";
import about from "../content/about.json";
import contact from "../content/contact.json";
import gallery from "../content/gallery.json";
import modals from "../content/modals.json";
import offerSections from "../content/offerSections.json";
import pages from "../content/pages.json";
import ui from "../content/ui.json";
import videos from "../content/videos.json";

export const CONTENT = { ui, pages, about, gallery, offerSections, videos, contact, modals };

function defaultVars() {
  return {
    year: String(new Date().getFullYear()),
    instagramUrl: INSTAGRAM_URL,
    youtubeUrl: YOUTUBE_URL,
    facebookUrl: FACEBOOK_URL,
    tiktokUrl: TIKTOK_URL,
    wzkUrl: WESELE_Z_KLASA_URL,
    phoneDisplay: contact.phoneDisplay,
    phoneTel: contact.phoneTel,
    contactEmail: contact.email,
  };
}

function interpolate(str, vars) {
  if (typeof str !== "string") return str;
  let out = str;
  for (const [k, v] of Object.entries(vars)) {
    out = out.split(`{{${k}}}`).join(v ?? "");
  }
  return out;
}

/**
 * Tekst z plików w `src/content/*.json`.
 */
export function resolveT(path, extra = {}) {
  const [ns, ...restParts] = path.split(".");
  const root = CONTENT[ns];
  if (root == null) return path;
  const val = restParts.reduce((o, key) => (o == null ? undefined : o[key]), root);
  if (typeof val === "string") return interpolate(val, { ...defaultVars(), ...extra });
  return val;
}

/** Modal statyczny z `content/modals.json`. */
export function getStaticModal(key) {
  const entry = modals[key];
  if (!entry) return null;
  const vars = defaultVars();
  return {
    title: interpolate(entry.title, vars),
    bodyHtml: interpolate(entry.bodyHtml, vars),
  };
}
