export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">Technical Lead • Delivery Manager • Project Leader</div>
        <h1>Siddharth Parmar</h1>
        <p className="subtitle">
          I help teams deliver software and engineering projects with strong technical depth,
          structured execution, and clear stakeholder coordination.
        </p>
        <p className="summary">
          10+ years of experience across embedded systems, enterprise software, C++, C#, .NET, and Azure.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>About Me</h2>
          <p>
            Technology leader with experience across embedded systems, enterprise software,
            and cloud platforms. Strong focus on execution, delivery, and team alignment.
          </p>
        </div>

        <div className="card">
          <h2>Core Skills</h2>
          <div className="chips">
            {[
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
            ].map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Technical Lead / Delivery Manager</h3>
          <p className="muted">ATRI Systems Pvt. Ltd. • Current</p>
          <ul>
            <li>Leading end-to-end project execution with delivery and technical ownership.</li>
            <li>Managing team alignment, execution tracking, and stakeholder communication.</li>
            <li>Supporting both technical deliverables and delivery governance.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Technical Project Lead</h3>
          <p className="muted">Arastu Systems / Stridely Solutions • 2020 - Recent</p>
          <ul>
            <li>Led enterprise software initiatives involving C++, C#, .NET, and integrations.</li>
            <li>Worked closely with client stakeholders, engineering teams, and business users.</li>
            <li>Handled solution discussions, issue resolution, and release communication.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Let’s Connect</h2>
        <div className="card">
          <p>Available for leadership roles, consulting, and project delivery opportunities.</p>
          <p className="muted">Ahmedabad / Gandhinagar, India</p>
        </div>
      </section>
    </main>
  );
}