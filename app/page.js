import "./globals.css";
export default function SiddharthPortfolioWebsite() {
  const skills = [
    "Technical Project Management",
    "Delivery Management",
    "C++",
    "C#",
    ".NET / .NET Core",
    "Embedded Systems",
    "Azure",
    "System Design",
    "Agile Delivery",
    "Stakeholder Management",
  ];

  const highlights = [
    {
      title: "10+ Years of Experience",
      description:
        "Strong mix of technical delivery, embedded engineering, enterprise software, and team leadership.",
    },
    {
      title: "Technical Lead + Delivery Focus",
      description:
        "Handling end-to-end execution, technical ownership, cross-functional coordination, and team guidance.",
    },
    {
      title: "Built Across Domains",
      description:
        "Experience spanning embedded systems, Windows applications, .NET platforms, Azure, and project delivery.",
    },
  ];

  const experience = [
    {
      role: "Technical Lead / Delivery Manager",
      company: "ATRI Systems Pvt. Ltd.",
      period: "Current",
      points: [
        "Leading end-to-end project execution with ownership of delivery, planning, coordination, and technical decisions.",
        "Managing team alignment, execution tracking, stakeholder communication, and overall project momentum.",
        "Supporting both technical deliverables and delivery governance across ongoing programs.",
      ],
    },
    {
      role: "Technical Project Lead",
      company: "Arastu Systems / Stridely Solutions",
      period: "2020 - Recent",
      points: [
        "Led enterprise software initiatives involving C++, C#, .NET, integrations, and cloud-based execution support.",
        "Worked closely with client stakeholders, engineering teams, and business users to drive releases and improvements.",
        "Handled solution discussions, issue resolution, team coordination, and release communication.",
      ],
    },
    {
      role: "Software Engineer / Senior Software Engineer",
      company: "Earlier Roles",
      period: "2015 onwards",
      points: [
        "Worked on embedded C/C++, VC++, Windows applications, hardware-integrated systems, and enterprise development.",
        "Built strong hands-on experience in firmware, desktop applications, communication protocols, and product engineering.",
        "Contributed across mission-critical and customer-facing systems with focus on reliability and problem solving.",
      ],
    },
  ];

  const projects = [
    {
      name: "Technical Delivery & Team Leadership",
      summary:
        "Driving complete execution lifecycle from planning to delivery while keeping team, quality, and timelines aligned.",
    },
    {
      name: "Legacy to Modernization Support",
      summary:
        "Worked on modernizing software ecosystems involving C++, .NET, cloud integrations, and scalable delivery practices.",
    },
    {
      name: "Embedded + Enterprise Engineering",
      summary:
        "Hands-on contribution across embedded systems, Windows technologies, backend services, and integration-heavy platforms.",
    },
  ];

  return (
	<div className="bg-black text-white min-h-screen p-6">
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-slate-950 to-cyan-400/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm text-sky-200">
                Technical Lead • Delivery Manager • Project Leader
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Siddharth Parmar
              </h1>
              <p className="mt-4 text-lg text-slate-300 md:text-xl">
                I help teams deliver software and engineering projects with strong technical depth, structured execution, and clear stakeholder coordination.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                With 10+ years of experience across embedded systems, enterprise software, C++, C#, .NET, and Azure, I bring a practical blend of engineering understanding and delivery ownership.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:scale-105"
                >
                  Contact Me
                </a>
                <a
                  href="#experience"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5"
                >
                  View Experience
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              I am a technology professional with experience in technical leadership, software delivery, embedded systems, and enterprise application development. Over the years, I have worked across firmware, desktop applications, backend systems, and cloud-connected platforms while also leading teams and driving project execution.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              My focus is not only on building solutions but also on ensuring that execution remains practical, teams stay aligned, and business expectations are managed clearly.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">Core Skills</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-8 space-y-6">
          {experience.map((item) => (
            <div key={item.role} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <p className="text-slate-300">{item.company}</p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-1 text-sm text-slate-300">
                  {item.period}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <h2 className="text-3xl font-bold">What I Can Help With</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-r from-sky-500/15 to-cyan-500/10 p-8 md:p-10">
          <h2 className="text-3xl font-bold">Let’s Connect</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Looking for support in technical leadership, software delivery, project execution, or engineering consulting? Let’s connect and discuss how I can contribute.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-200">
            <span className="rounded-full border border-white/10 px-4 py-2">Ahmedabad / Gandhinagar, India</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Available for leadership and consulting opportunities</span>
          </div>
        </div>
      </section>
    </div>
  );
}
