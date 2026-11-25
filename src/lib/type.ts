export type Project = {
  slug: string;
  title: string;
  tag: string;
  image: string;
  summary: string;
  body: string;
  stack: string[];
  sourceUrl?: string;
  /** Which label and icon the source button wears; a paper is not source code. */
  sourceKind: "code" | "paper";
  liveUrl?: string;
  /** Likewise: not every secondary link is something you can run. */
  liveKind: "live" | "article" | "notes";
  featured: boolean;
  order: number;
};

export type StoryBlock = {
  heading: string;
  paragraphs: string[];
  image?: string;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  url: string;
};

export type Certificate = {
  name: string;
  year: string;
};

export type AboutData = {
  aboutMe: {
    name: string;
    title: string;
    description: string;
    image: string;
    skills: string[];
  };
  /** The personal opening; the CV arrays below are the professional half. */
  story: StoryBlock[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  publications: Publication[];
  certificates: Certificate[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  descriptions: string[];
};

export type EducationItem = {
  degree: string;
  uni: string;
  location: string;
  period: string;
  description: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type LinkItem = {
  icon: string;
  label: string;
  description: string;
  url: string;
};

export type SocialItem = {
  icon: string;
  label: string;
  url: string;
};

export type LinksData = {
  profile: {
    name: string;
    tagline: string;
    image: string;
    email: string;
  };
  /** Profile-wide accounts shown as the icon row on the landing page. */
  social: SocialItem[];
  /** The Linktree-style list shown on /links. */
  links: LinkItem[];
};

export type UiStrings = {
  hero: {
    label: string;
    /** Lines of segments: the outer array sets the line breaks, which apply
     *  from md up, and `em` marks the accented phrase. Spacing lives in the
     *  strings, since Chinese wants none between segments. */
    title: { text: string; em?: boolean }[][];
    subtitle: string;
    projects: string;
    links: string;
    about: string;
  };
  nav: { home: string; about: string; projects: string; links: string };
  sections: {
    newsLabel: string;
    newsTitle: string;
    projectsLabel: string;
    projectsTitle: string;
    mediaLabel: string;
    mediaTitle: string;
  };
  about: {
    greeting: string;
    iam: string;
    background: string;
    publications: string;
    certificates: string;
    experience: string;
    education: string;
    skills: string;
  };
  project: {
    viewAll: string;
    filterAll: string;
    back: string;
    live: string;
    source: string;
    paper: string;
    article: string;
    notes: string;
    builtWith: string;
    notFound: string;
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    linkedinLabel: string;
    note: string;
  };
  links: { viewPortfolio: string };
  footer: { rights: string };
  langSwitch: { label: string; aria: string };
};

export type MediaItem = {
  /** Drives the tag colour; see .media-card__tag--*. */
  tone: "video" | "audio" | "writing";
  tag: string;
  /** Cover art, or `icon` for a platform with none of its own. */
  image?: string;
  /** Which edge the crop keeps; portraits need "top" to keep the face. */
  imagePosition?: "top" | "center";
  /** A LinkIcon key, drawn on a tile in place of cover art. */
  icon?: string;
  title: string;
  description: string;
  url: string;
  linkLabel: string;
};

export type NewsItem = {
  /** `YYYY`, `YYYY-MM` or `YYYY-MM-DD`. Sorts the list and sets how precisely
   *  the date is shown, so an item known only to the year need not invent a day. */
  date: string;
  /** Short kind label: Launch, Paper, Talk. */
  tag: string;
  title: string;
  description: string;
  /** Optional: plenty of news has nowhere to click through to. */
  url?: string;
  linkLabel?: string;
};
