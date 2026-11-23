import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";
import { SocialRow } from "./SocialRow";

/** Where the content lives on the first row; the professional profiles, support
 *  and contact on the second, so the nine icons read as two groups rather than
 *  one long run. */
const Items = [
  "youtube",
  "instagram",
  "podcast",
  "medium",
  "linkedin",
  "github",
  "kofi",
];

export const Footer = () => {
  const ui = getUi(useLang());

  return (
    <footer>
      <SocialRow only={Items} withEmail />
      <div className="pt-4">{ui.footer.rights}</div>
    </footer>
  );
};
