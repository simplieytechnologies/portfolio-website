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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white p-6">

      {/* HERO */}
      <section className="mx-auto max-w-7xl py-16">
        <p className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm text-sky-200">
          Technical Lead • Delivery Manager • Project Leader
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          Siddharth Parmar
        </h1>

        <p className="mt-4 text-lg text-slate-200 max-w-2xl">
          I help teams deliver software and engineering projects with strong technical depth, structured execution, and clear stakeholder coordination.
        </p>

        <p className="mt-3 text-slate-300 max-w-2xl">
          10+ years experience across embedded systems, enterprise software, C++, C#, .NET, and Azure.
        </p>

        <div className="mt-8 flex gap-4">
          <a className="bg-sky-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Contact Me
          </a>
          <a className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
            View Experience
          </a>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl grid gap-6 md:grid-cols-3 py-10">
        {highlights.map((item) => (
          <div key={item.title} className="bg-white/10 border border-white/20 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-slate-200">{item.description}</p>
          </div>
        ))}
      </section>

      {/* ABOUT + SKILLS */}
      <section className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6 py-12">
        <div className="bg-white/10 border border-white/20 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-200">
            Technology leader with experience across embedded systems, enterprise software, and cloud platforms. Strong focus on execution, delivery, and team alignment.
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold">Core Skills</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="bg-sky-500/20 px-4 py-2 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-7xl py-12">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="mt-6 space-y-6">
          {experience.map((item) => (
            <div key={item.role} className="bg-white/10 border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="text-slate-300">{item.company}</p>

              <ul className="mt-4 space-y-2 text-slate-200">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl py-12 grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-white/10 border border-white/20 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="mt-2 text-slate-200">{project.summary}</p>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl py-16 text-center">
        <h2 className="text-3xl font-bold">Let’s Connect</h2>
        <p className="mt-4 text-slate-300">
          Available for leadership roles, consulting, and project delivery opportunities.
        </p>
      </section>

    </div>
  );
}
