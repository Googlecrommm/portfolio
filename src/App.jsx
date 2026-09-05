import { Leaf, Database, Code2, Wrench, FlaskConical } from "lucide-react";
import profileImage from "./assets/DSC_7331.JPG";
import attendanceImage from "./assets/Attendance Management.PNG";
import schedulingImage from "./assets/Scheduling System.PNG";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About Me", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Languages",
    description:
      "Java (17+), JavaScript, SQL, HTML5, and CSS3 — the core languages I use to build backend logic and the pages that connect to it.",
    plaque: "bg-[#F4F2ED]",
    iconColor: "text-orange-600",
  },
  {
    icon: Leaf,
    title: "Backend",
    description:
      "Spring Boot, Spring Security, Spring Data JPA, Hibernate, JWT, and Swagger UI for building, securing, and documenting REST APIs.",
    plaque: "bg-[#6DB33F]",
    iconColor: "text-white",
  },
  {
    icon: Database,
    title: "Databases",
    description:
      "MySQL, PostgreSQL, Firebase, and Redis for storing, querying, and caching application data.",
    plaque: "bg-[#232326]",
    iconColor: "text-[#2196D8]",
    iconScale: "scale-110",
  },
  {
    icon: Wrench,
    title: "Tools",
    description:
      "Git, GitHub, Postman, MySQL Workbench, and Docker for version control, API testing, and local development.",
    plaque: "bg-[#232326]",
    iconColor: "text-[#F05033]",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    description:
      "JUnit 5 and Mockito for writing and running unit tests against backend services.",
    plaque: "bg-[#232326]",
    iconColor: "text-teal-400",
    iconScale: "scale-110",
  },
];

const PROJECTS = [
  {
    title: "Scheduling Management System",
    description:
      "Replaced Divine Grace Medical Center's manual, Excel-based scheduling with automated conflict detection, patient information management, and activity logs for monitoring system activity. Deployed on a local network to restrict access to authorized hospital employees and protect patient data.",
    image: schedulingImage,
    tags: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Attendance Management System",
    description:
      "RFID-based attendance system for an elementary school that automatically records student attendance and sends SMS alerts to parents, replacing a manual pen-and-paper process. Built the backend to process RFID records, manage student information, and trigger notifications.",
    image: attendanceImage,
    tags: ["Java", "Spring Boot", "RFID", "SMS API"],
  },
];

const EXPERIENCE = [
  {
    role: "Backend Developer — Internship",
    org: "Divine Grace Medical Center",
    period: "",
    bullets: [
      "Developed a Scheduling Management System for hospital departments to organize patient schedules and prevent scheduling conflicts.",
      "Deployed the system on a local network to restrict access to authorized employees and enhance database security.",
    ],
  },
  {
    role: "Backend Developer / Lead Developer — Thesis Project",
    org: "Attendance Management System",
    period: "",
    bullets: [
      "Led a development team of five members to keep the project structured, efficient, and on schedule.",
      "Planned and wrote project documentation, user manuals, and system diagrams to keep the project's scope and workflow clear to clients.",
      "Developed the backend of an Attendance Management System for an elementary school, including SMS alerts to parents about attendance and whereabouts.",
    ],
  },
];

const EDUCATION = {
  degree: "Bachelor of Science in Information Technology",
  school: "Cavite State University — General Trias City Campus",
  period: "2025 — 2026",
};

const CERTIFICATES = [
  {
    title: "Charting IT Project Success with Agile and Scrum Methodologies",
    issuer: "LinkedIT · West Visayas State University, DEVCON",
    date: "October 5, 2024",
  },
];

const CONTACT = {
  location: "General Trias City, Cavite",
  email: "naval.lucianocromwell@gmail.com",
  phoneDisplay: "+63 961 123 5693",
  phoneHref: "tel:+639611235693",
  facebook: "https://www.facebook.com/cromwell.naval.58/",
  github: "http://github.com/Googlecrommm",
};

function FacebookIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5H17V2.9c-.5-.1-1.9-.2-3.4-.2-3.1 0-5.3 1.9-5.3 5.5V10.8H6v3.2h2.3v8h5.2Z" />
    </svg>
  );
}

function GitHubIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.7.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.2-1.6-1.2-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.3-.3-4.8-1.2-4.8-5.2 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.2 1.1a11.5 11.5 0 0 1 5.9 0c2.3-1.4 3.2-1.1 3.2-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.1-2.5 4.9-4.8 5.2.4.4.7 1 .7 2.1v3.1c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
    </svg>
  );
}

// Scrolls to a section by id. "home" is special-cased to scroll to the
// very top, since there's no separate hero section to anchor to.
function scrollToSection(id) {
  return (e) => {
    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

function Navbar() {
  return (
    <nav
      className="w-full flex items-center justify-between px-6 py-3
                 bg-[linear-gradient(to_right,#523453_0%,#26282B_45%)]"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#C34E98] flex items-center justify-center text-white font-bold text-sm">
          CN
        </div>
        <span className="text-white font-semibold text-lg tracking-tight">
          Cromwell Naval
        </span>
      </div>

      <ul className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={scrollToSection(link.id)}
              className="text-sm text-gray-200 hover:text-white transition-colors"
            >
              <span className="underline underline-offset-4">{link.label[0]}</span>
              {link.label.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="w-full max-w-85 aspect-3/4 rounded-2xl overflow-hidden border border-white/10 bg-[#232326] shadow-lg shadow-black/20">
      <img
        src={profileImage}
        alt="Cromwell Naval"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

function ProfileSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-16 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8">@Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 items-start">
        <PhotoPlaceholder />

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl md:text-3xl text-white">
            I'm <span className="font-bold">Cromwell Naval</span>
          </h3>

          <p className="text-lg text-gray-200 max-w-2xl">
            I'm a Java Backend Developer based in {CONTACT.location}, focused on
            building reliable and maintainable web applications and APIs.
          </p>

          <p className="text-gray-300 max-w-2xl leading-relaxed">
            I primarily work with Java and Spring Boot, with experience in REST
            API development, Spring Data JPA, authentication, database
            management, and MySQL.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent("Hiring Inquiry")}&body=${encodeURIComponent("Hello Cromwell,\n\nI would like to discuss a job opportunity.\n\nThank you.")}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-sm text-white border border-gray-500 rounded-md hover:bg-white/10 transition-colors"
            >
              Hire Me
            </a>
            <a
              href="/Lucianocromwell_naval_CV.pdf"
              download
              className="px-5 py-2 text-sm text-white border border-gray-500 rounded-md hover:bg-white/10 transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <FacebookIcon className="h-4 w-4 text-gray-900" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <GitHubIcon className="h-4 w-4 text-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon: Icon, title, description, plaque, iconColor, iconScale = "scale-100" }) {
  return (
    <div className="bg-[#605F5F] rounded-2xl p-6 flex flex-col items-center text-center gap-4">
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${plaque}`}
      >
        <Icon size={30} strokeWidth={1.8} className={`${iconColor} ${iconScale}`} />
      </div>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-200 leading-relaxed text-justify">
        {description}
      </p>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 md:px-10 pb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8">@Technical Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="bg-[#605F5F] rounded-2xl p-6 flex flex-col gap-3">
      <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#232326]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center scale-[1.15]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-500 text-xs">
            Project preview placeholder
          </div>
        )}
      </div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-200 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-gray-200 border border-white/15 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-10 pb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8">@Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ role, org, period, bullets }) {
  return (
    <div className="bg-[#605F5F] rounded-2xl p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
        <h4 className="text-lg font-semibold text-white">{role}</h4>
        {period ? <span className="text-xs text-gray-300">{period}</span> : null}
      </div>
      <p className="text-sm text-gray-300 mb-3">{org}</p>
      <ul className="flex flex-col gap-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-200 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C34E98] flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 md:px-10 pb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8">@Experience</h2>

      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((exp) => (
          <ExperienceCard key={exp.role} {...exp} />
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 md:px-10 pb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8">@Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#605F5F] rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-white mb-1">{EDUCATION.degree}</h4>
          <p className="text-sm text-gray-300 mb-1">{EDUCATION.school}</p>
          <p className="text-xs text-gray-400">{EDUCATION.period}</p>
        </div>

        <div className="bg-[#605F5F] rounded-2xl p-6 flex flex-col gap-4">
          {CERTIFICATES.map((cert) => (
            <div key={cert.title}>
              <h4 className="text-base font-semibold text-white mb-1">{cert.title}</h4>
              <p className="text-sm text-gray-300 mb-1">{cert.issuer}</p>
              {cert.date ? <p className="text-xs text-gray-400">{cert.date}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-10 pb-20 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8">@Contact</h2>

      <div className="bg-[#605F5F] rounded-2xl p-8 flex flex-col gap-4 max-w-xl">
        <p className="text-gray-200">
          Based in {CONTACT.location}. Reach out by email or phone, or use the
          button below.
        </p>

        <div className="flex flex-col gap-1 text-sm text-gray-200">
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-white transition-colors w-fit"
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.phoneHref}
            className="hover:text-white transition-colors w-fit"
          >
            {CONTACT.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#191A1C]">
      <Navbar />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}