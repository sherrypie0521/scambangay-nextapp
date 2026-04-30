import Link from "next/link"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-base font-bold tracking-tight text-primary">SherCambangay</span>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Log in
            </Link>
            <Link href="/signup" className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-28 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block text-xs tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5 mb-8 font-medium">
          Community Information System
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Welcome to{" "}
          <span className="text-primary">SherCambangay</span>
          <br />
          Website
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A student-built community information platform designed to connect, 
          inform, and empower local communities through modern web technology.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/signup" className="px-8 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-md">
            Get Started — Sign Up
          </Link>
          <Link href="/login" className="px-8 py-3 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">
            Already have an account? Log in
          </Link>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-6 border-t border-border bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary font-semibold mb-4 text-center">About the Developer</p>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Avatar placeholder */}
            <div className="shrink-0 w-32 h-32 rounded-full bg-primary/20 border-4 border-primary/40 flex items-center justify-center text-4xl font-bold text-primary">
              SC
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Sherilyn Cambangay</h2>
              <p className="text-primary font-medium text-sm mb-3">3rd Year — Section 3B | BSIT/BSCS</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A passionate Information Technology student from{" "}
                <span className="text-foreground font-medium">BISU Candijay Campus</span>. 
                This Community Information System project was built as part of my academic journey, 
                applying modern web development skills to create real-world solutions for local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary font-semibold mb-2 text-center">Skills</p>
          <h2 className="text-2xl font-bold text-center mb-10">Technologies I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Next.js", level: "Intermediate" },
              { name: "React", level: "Intermediate" },
              { name: "TypeScript", level: "Beginner" },
              { name: "Tailwind CSS", level: "Intermediate" },
              { name: "HTML & CSS", level: "Proficient" },
              { name: "JavaScript", level: "Intermediate" },
              { name: "Git & GitHub", level: "Intermediate" },
              { name: "Node.js", level: "Beginner" },
            ].map((skill) => (
              <div key={skill.name} className="p-4 border border-border rounded-xl bg-card hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
                <p className="font-semibold text-sm mb-1">{skill.name}</p>
                <p className="text-xs text-muted-foreground">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 border-t border-border bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary font-semibold mb-2 text-center">Projects</p>
          <h2 className="text-2xl font-bold text-center mb-10">What I've Built</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "SherCambangay — Community Information System",
                desc: "A full-stack web application built with Next.js featuring a landing page, user authentication (login & signup), and form validation. Designed to serve as a community information hub.",
                tech: ["Next.js", "TypeScript", "Tailwind CSS"],
                status: "In Progress",
              },
              {
                title: "Student Portfolio Website",
                desc: "A personal portfolio showcasing my skills, projects, and academic background as a BSIT student at BISU Candijay Campus.",
                tech: ["HTML", "CSS", "JavaScript"],
                status: "Completed",
              },
            ].map((project) => (
              <div key={project.title} className="p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-sm leading-snug">{project.title}</h3>
                  <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
                    project.status === "Completed"
                      ? "bg-primary/20 text-primary"
                      : "bg-yellow-500/20 text-yellow-600"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-muted border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-20 px-6 border-t border-border text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary font-semibold mb-4">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to explore the system?
          </h2>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Create your account and experience the SherCambangay Community Information System. 
            Built with passion by a BISU Candijay student.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/signup" className="px-8 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              Create Account
            </Link>
            <Link href="/login" className="px-8 py-3 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">
              Log In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SherCambangay Website · Sherilyn Cambangay · BISU Candijay Campus · BSIT 3B
      </footer>

    </main>
  )
}