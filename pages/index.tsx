import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Skill, Project, Social } from "../typings";
import { pageInfo, experiences, skills, projects, socials, BASE } from "../content/data";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div
      className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
    >
      <Head>
        <link rel="icon" type="image/svg+xml" href={`${BASE}/favicon.svg`} />
        <link rel="manifest" href={`${BASE}/site.webmanifest`} />
        <title>{`${pageInfo.name} | Portfolio`}</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experiences */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="h-10 w-10 bg-darkGreen/80 rounded-full flex items-center justify-center">
              <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { pageInfo, experiences, skills, projects, socials },
});
