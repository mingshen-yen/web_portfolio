import ReactMarkdown from "react-markdown";
import { getAbout } from "../../api/aboutMe";
import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";
import { ContactSection } from "../layout/ContactSection";
import { SectionHead } from "../layout/SectionHead";
import {
  CertificateList,
  EducationList,
  ExperienceList,
  PublicationList,
  SkillsGrid,
} from "./AboutSections";

export const AboutPage = () => {
  const lang = useLang();
  const {
    aboutMe,
    story,
    experience,
    education,
    skills,
    publications,
    certificates,
  } = getAbout(lang);
  const ui = getUi(lang);

  return (
    <>
      <section className="section-block">
        <header className="about__identity">
          <p className="about__greeting">{ui.about.greeting}</p>
          <h1 className="about__title">
            {ui.about.iam} <em>{aboutMe.name}</em>
          </h1>
          <p className="about__role">{aboutMe.title}</p>
          <p className="about__quote">{aboutMe.description}</p>
        </header>
        <img className="about__photo" src={aboutMe.image} alt={aboutMe.name} />
      </section>

      {story.map((block) => (
        <section key={block.heading} className="section-block story">
          <h2 className="story__heading">{block.heading}</h2>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph} className="story__text">
              {/* Markdown for emphasis inside a sentence. The paragraph wrapper
                  is unwrapped so the result stays inline in our own <p>. */}
              <ReactMarkdown
                components={{ p: ({ children }) => <>{children}</> }}
              >
                {paragraph}
              </ReactMarkdown>
            </p>
          ))}
          {block.image && (
            <img className="story__image" src={block.image} alt="" />
          )}
        </section>
      ))}

      {/* The professional half starts here, announced rather than eased into:
          the story above and the CV below are read very differently. */}
      <section className="section-block section-block--compact">
        <div className="divider">
          <span className="divider__label">{ui.about.background}</span>
        </div>
      </section>

      <section className="section-block section-block--tight">
        <SectionHead title={ui.about.experience} />
        <ExperienceList items={experience} />
      </section>

      <section className="section-block section-block--compact">
        <SectionHead title={ui.about.education} />
        <EducationList items={education} />
      </section>

      <section className="section-block section-block--compact">
        <SectionHead title={ui.about.skills} />
        <SkillsGrid items={skills} />
      </section>

      <section className="section-block section-block--compact">
        <SectionHead title={ui.about.publications} />
        <PublicationList items={publications} />
      </section>

      <section className="section-block section-block--compact">
        <SectionHead title={ui.about.certificates} />
        <CertificateList items={certificates} />
      </section>

      <ContactSection />
    </>
  );
};
