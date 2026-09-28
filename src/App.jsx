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
    title: "Java",
    description:
      "Java 17+ for backend application development, with JavaScript, SQL, HTML5, and CSS3 for supporting web experiences.",
    plaque: "bg-[#F4F2ED]",
    iconColor: "text-orange-600",
  },
  {
    icon: Leaf,
    title: "Spring Boot",
    description:
      "Spring Boot for building backend systems and REST APIs, with DTOs, Bean Validation, and structured Exception Handling.",
    plaque: "bg-[#6DB33F]",
    iconColor: "text-white",
  },
  {
    icon: Database,
    title: "Security & Persistence",
    description:
      "Spring Security, JWT (JSON Web Token), Spring Data JPA, and Hibernate for authentication, authorization, and data access.",
    plaque: "bg-[#232326]",
    iconColor: "text-[#2196D8]",
    iconScale: "scale-110",
  },
  {
    icon: Wrench,
    title: "REST APIs",
    description:
      "REST API development and documentation with Swagger/OpenAPI, including API testing with Postman.",
    plaque: "bg-[#232326]",
    iconColor: "text-[#F05033]",
  },
  {
    icon: FlaskConical,
    title: "Databases & Testing",
    description:
      "MySQL, PostgreSQL, Firebase, and Redis, with JUnit 5, Mockito, MockMvc, Integration Testing, and API Testing.",
    plaque: "bg-[#232326]",
    iconColor: "text-teal-400",
    iconScale: "scale-110",
  },
  {
    icon: Wrench,
    title: "Development Tools",
    description:
      "Git, GitHub, Docker, MySQL Workbench, IntelliJ IDEA, Linux, and Postman for everyday development workflows.",
    plaque: "bg-[#232326]",
    iconColor: "text-[#F05033]",
  },
  {
    icon: Code2,
    title: "Frontend",
    description:
      "ReactJS, JavaScript, HTML5, CSS3, and Tailwind for building frontend interfaces when working across the stack.",
    plaque: "bg-[#F4F2ED]",
    iconColor: "text-orange-600",
  },
];

const PROJECTS = [
  {
    title: "Scheduling Management System",
    description:
      "Developed a Scheduling Management System for Divine Grace Medical Center to replace manual Excel-based scheduling and eliminate conflicting schedules. The system includes automated conflict detection, patient information management, activity logs, a user-friendly interface, local network deployment, and restricted access for authorized hospital employees.",
    image: schedulingImage,
    tags: ["Java", "Spring Boot", "MySQL", "REST APIs"],
  },
  {
    title: "Attendance Management System",
    description:
      "Developed an RFID-based Attendance Management System for an elementary school to replace the time-consuming pen-and-paper process. The backend processes RFID attendance records, manages student information, tracks attendance, and sends automated SMS notifications to parents about their children's attendance and whereabouts.",
    image: attendanceImage,
    tags: ["Java", "Spring Boot", "RFID", "SMS notifications"],
  },
];

const EXPERIENCE = [
  {
    role: "Backend Developer — Internship",
    org: "Divine Grace Medical Center",
    period: "",
    bullets: [
      "Developed a Scheduling Management System for the departments of Divine Grace Medical Center to organize patient schedules and prevent scheduling conflicts.",
      "Deployed the system on a local network to restrict access to authorized hospital employees and enhance database security.",
      "Built functionality for automated conflict detection, patient information management, and activity logs to replace manual Excel-based scheduling.",
    ],
  },
  {
    role: "Backend Developer / Lead Developer — Thesis Project",
    org: "Attendance Management System",
    period: "",
    bullets: [
      "Led a development team of five members to ensure a structured, efficient, and timely development process.",
      "Planned and created project documentation, user manuals, and system diagrams to maintain a clear project scope and explain the system's functionality and workflow to clients.",
      "Developed the backend of an RFID-based Attendance Management System for an elementary school to process attendance records, manage student information, track attendance, and provide automated SMS alerts to parents.",
    ],
  },
];

const EDUCATION = {
  degree: "Bachelor of Science in Information Technology",
  school: "Cavite State University - General Trias City Campus",
  period: "2025 - 2026",
};

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
      className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-3
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
            I'm Cromwell Naval, a <span className="font-bold">Java Backend Developer</span>
          </h3>

          <p className="text-lg text-gray-200 max-w-2xl">
            I'm based in {CONTACT.location}, focused on building backend systems
            and REST APIs with Java and Spring Boot. I am targeting junior Java
            backend and software development roles.
          </p>

          <p className="text-gray-300 max-w-2xl leading-relaxed">
            My experience includes Spring Security, Spring Data JPA, Hibernate,
            JWT, database management, testing, Docker, and related development
            tools. I also work with ReactJS, JavaScript, HTML5, CSS3, and
            Tailwind when frontend or full-stack work is needed.
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

      <div className="bg-[#605F5F] rounded-2xl p-6 max-w-2xl">
        <h4 className="text-lg font-semibold text-white mb-1">{EDUCATION.degree}</h4>
        <p className="text-sm text-gray-300 mb-1">{EDUCATION.school}</p>
        <p className="text-xs text-gray-400">{EDUCATION.period}</p>
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