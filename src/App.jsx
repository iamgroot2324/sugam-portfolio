
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a href="#home" className="text-2xl font-bold tracking-tight">
            Sugam<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <NavLink href="#about" text="About" />
            <NavLink href="#skills" text="Skills" />
            <NavLink href="#projects" text="Projects" />
            <NavLink href="#ai" text="AI & GenAI" />
            <NavLink href="#education" text="Education" />
            <NavLink href="#certifications" text="Certifications" />
            <NavLink href="#contact" text="Contact" />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">

              <MobileLink
                href="#about"
                text="About"
                close={() => setMenuOpen(false)}
              />

              <MobileLink
                href="#skills"
                text="Skills"
                close={() => setMenuOpen(false)}
              />

              <MobileLink
                href="#projects"
                text="Projects"
                close={() => setMenuOpen(false)}
              />

              <MobileLink
                href="#ai"
                text="AI & GenAI"
                close={() => setMenuOpen(false)}
              />

              <MobileLink
                href="#education"
                text="Education"
                close={() => setMenuOpen(false)}
              />

              <MobileLink
                href="#certifications"
                text="Certifications"
                close={() => setMenuOpen(false)}
              />

              <MobileLink
                href="#contact"
                text="Contact"
                close={() => setMenuOpen(false)}
              />

            </div>
          </div>
        )}
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-24"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>

            <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="text-sm text-cyan-400">
                AI • Machine Learning • Data Science
              </span>
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Aspiring AI Engineer | Data Scientist | Machine Learning Enthusiast
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Hi, I'm
              <br />
              <span className="text-cyan-400">
                Sugam Khatiwada
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              I build intelligent applications using Machine Learning,
              Data Science, Generative AI, Natural Language Processing,
              Computer Vision, and modern web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                View My Projects
              </a>

              {/* CV */}
              <a
                href="/Sugam-Khatiwada-CV.pdf"
                download
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Download CV
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">

              <a
                href="https://github.com/iamgroot2324"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sugam-khatiwada-804a62343/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sugamm335@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
              >
                sugamm335@gmail.com
              </a>

            </div>
          </div>


          {/* HERO VISUAL */}
          <div className="hidden justify-center lg:flex">

            <div className="relative flex h-[430px] w-[430px] items-center justify-center">

              <div className="absolute h-72 w-72 rounded-full border border-cyan-400/20" />

              <div className="absolute h-96 w-96 rounded-full border border-cyan-400/10" />

              <div className="absolute h-80 w-80 rounded-full bg-cyan-400/5 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">

                <div className="text-7xl font-bold text-cyan-400">
                  AI
                </div>

                <p className="mt-5 text-gray-300">
                  Machine Learning
                </p>

                <p className="mt-2 text-gray-400">
                  Generative AI
                </p>

                <p className="mt-2 text-gray-400">
                  Data Science
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="ABOUT ME"
            title="Building Intelligent Solutions"
          />

          <div className="grid gap-12 lg:grid-cols-3">

            <div className="lg:col-span-2">

              <p className="text-lg leading-9 text-gray-400">
                I am an aspiring AI Engineer, Machine Learning Engineer,
                and Data Scientist with a strong foundation in Artificial
                Intelligence, Machine Learning, Deep Learning, Data Science,
                and Generative AI.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                I enjoy designing and developing end-to-end machine learning
                solutions that address real-world problems. My work includes
                demand prediction, recommendation systems, natural language
                processing, computer vision, and intelligent applications.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                I am continuously exploring Large Language Models, RAG,
                AI agents, prompt engineering, and intelligent automation
                while building practical and production-oriented applications.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">

              <InfoRow
                label="Location"
                value="Kathmandu, Nepal"
              />

              <InfoRow
                label="Email"
                value="sugamm335@gmail.com"
              />

              <InfoRow
                label="Focus"
                value="AI / ML / Data Science"
              />

              <InfoRow
                label="Education"
                value="BSc. CSIT"
              />

              <InfoRow
                label="Languages"
                value="Nepali, English, Hindi"
              />

            </div>
          </div>
        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="TECHNICAL SKILLS"
            title="Tools & Technologies"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <SkillCard
              title="Programming"
              skills={[
                "Python",
                "SQL",
                "JavaScript"
              ]}
            />

            <SkillCard
              title="Data Science"
              skills={[
                "NumPy",
                "Pandas",
                "EDA",
                "Data Analysis",
                "Data Visualization"
              ]}
            />

            <SkillCard
              title="Machine Learning"
              skills={[
                "Machine Learning",
                "Predictive Modeling",
                "Recommendation Systems",
                "Feature Engineering",
                "Model Evaluation"
              ]}
            />

            <SkillCard
              title="Deep Learning"
              skills={[
                "TensorFlow",
                "PyTorch",
                "Deep Learning",
                "CNN"
              ]}
            />

            <SkillCard
              title="NLP"
              skills={[
                "Natural Language Processing",
                "Text Classification",
                "TF-IDF",
                "Text Processing"
              ]}
            />

            <SkillCard
              title="Computer Vision"
              skills={[
                "OpenCV",
                "Face Recognition",
                "Image Processing",
                "Computer Vision"
              ]}
            />

            <SkillCard
              title="Generative AI"
              skills={[
                "LLMs",
                "RAG",
                "AI Agents",
                "Prompt Engineering",
                "LLM Integration"
              ]}
            />

            <SkillCard
              title="AI Frameworks"
              skills={[
                "LangChain",
                "LlamaIndex",
                "OpenAI",
                "Claude",
                "Gemini"
              ]}
            />

            <SkillCard
              title="Development & Tools"
              skills={[
                "React",
                "Node.js",
                "Flask",
                "MongoDB",
                "Git",
                "GitHub",
                "Jupyter",
                "Google Colab"
              ]}
            />

          </div>
        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="MY WORK"
            title="Featured Projects"
          />

          <div className="grid gap-6 lg:grid-cols-2">

            {/* PROJECT 1 */}
            <ProjectCard
              number="01"
              title="Retail Demand Prediction & Product Recommendation System"
              description="A full-stack intelligent system for mobile and laptop sales that predicts product demand and recommends relevant products using machine learning and similarity-based recommendation techniques."
              technologies="Python • NumPy • React • Node.js • MongoDB • Linear Regression • Gradient Descent • Cosine Similarity"
              featured={true}
              github="https://github.com/iamgroot2324/Demand-Prediction-Product-Recommendation-System"
            />

            {/* PROJECT 2 */}
            <ProjectCard
              number="02"
              title="Medical Chatbot"
              description="An AI-powered conversational application designed to interact with users and provide responses to medical-related queries through a conversational interface."
              technologies="Python • AI • NLP • Conversational AI"
              github="https://github.com/iamgroot2324/medical-chatbot"
            />

            {/* PROJECT 3 */}
            <ProjectCard
              number="03"
              title="Face Recognition & Attendance System"
              description="A computer vision-based attendance system that uses face recognition to identify registered individuals and automate attendance recording."
              technologies="Python • OpenCV • Face Recognition • Computer Vision"
              github="https://github.com/iamgroot2324/face-recognition-attendance"
            />

            {/* PROJECT 4 */}
            <ProjectCard
              number="04"
              title="Resume Screening App"
              description="An NLP-based application that analyzes uploaded resumes and predicts professional categories using text preprocessing, TF-IDF feature extraction, and machine learning classification."
              technologies="Python • NLP • TF-IDF • Scikit-learn • Streamlit"
              github="https://github.com/iamgroot2324/Resume-Screening-App"
            />

            {/* PROJECT 5 */}
            <ProjectCard
              number="05"
              title="Movie Recommender System"
              description="A content-based recommendation system that analyzes movie information and similarity to generate personalized movie recommendations."
              technologies="Python • Pandas • Machine Learning • Recommendation Systems"
            />

          </div>
        </div>
      </section>


      {/* ================= AI & GENERATIVE AI ================= */}
      <section
        id="ai"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="AI & GENERATIVE AI"
            title="What I'm Exploring"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <InterestCard
              title="RAG Systems"
              description="Exploring retrieval-augmented generation pipelines for document-based question answering and knowledge retrieval."
            />

            <InterestCard
              title="AI Agents"
              description="Building and experimenting with AI agents capable of tool usage and multi-step workflows."
            />

            <InterestCard
              title="LLM Applications"
              description="Working with modern large language models including GPT, Claude, and Gemini."
            />

            <InterestCard
              title="AI Automation"
              description="Exploring intelligent workflows that automate repetitive and data-driven tasks."
            />

          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-2xl font-bold">
              Areas of Interest
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "Generative AI",
                "Large Language Models",
                "RAG",
                "AI Agents",
                "Multi-Agent Systems",
                "Prompt Engineering",
                "Function Calling",
                "Structured Outputs",
                "Agentic AI",
                "Intelligent Automation"
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* ================= CORE COMPETENCIES ================= */}
      <section className="border-t border-white/10 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="CORE COMPETENCIES"
            title="What I Work With"
          />

          <div className="flex flex-wrap gap-3">

            {[
              "End-to-End ML Development",
              "Predictive Modeling",
              "Recommendation Systems",
              "Demand Prediction",
              "Time Series Forecasting",
              "Natural Language Processing",
              "Computer Vision",
              "Deep Learning",
              "Generative AI",
              "AI Agents",
              "Multi-Agent Systems",
              "Retrieval-Augmented Generation",
              "Prompt Engineering",
              "LLM Integration",
              "Model Evaluation",
              "AI Workflow Automation",
              "Data Analytics",
              "Data Visualization"
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                {item}
              </span>
            ))}

          </div>
        </div>
      </section>


      {/* ================= EDUCATION ================= */}
      <section
        id="education"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="EDUCATION"
            title="Academic Background"
          />

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Bachelor's Degree
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Bachelor of Science in Computer Science and Information Technology
            </h3>

            <p className="mt-3 text-lg text-gray-400">
              Orchid International College, Gaushala
            </p>

            <p className="mt-1 text-gray-500">
              Tribhuvan University
            </p>

          </div>
        </div>
      </section>


      {/* ================= CERTIFICATIONS ================= */}
      <section
        id="certifications"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="LEARNING"
            title="Certifications & Courses"
          />

          <div className="grid gap-6 lg:grid-cols-3">

            <CertificationCard
              title="AI Mastery Bootcamp 2026"
              provider="Udemy • Ongoing"
              topics="Machine Learning • Deep Learning • Generative AI • AI Agents • RAG • Prompt Engineering • MCP • Google A2A • Production AI Applications"
            />

            <CertificationCard
              title="Deep Learning Prerequisites: The NumPy Stack in Python V2"
              provider="Udemy"
              topics="NumPy • Pandas • SciPy • Matplotlib • Scientific Computing • Data Analysis"
            />

            <CertificationCard
              title="Databases and Introduction to SQL Querying"
              provider="Udemy"
              topics="SQL • Database Design • Complex Queries • Joins • Aggregation • Relational Database Management"
            />

          </div>
        </div>
      </section>


      {/* ================= INTERESTS ================= */}
      <section className="border-t border-white/10 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="INTERESTS"
            title="Areas I'm Passionate About"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Data Science",
              "Generative AI",
              "Large Language Models",
              "AI Agents & Automation",
              "Computer Vision",
              "Natural Language Processing",
              "Open Source Development",
              "Python Programming",
              "Data Analytics",
              "Hackathons & AI Competitions"
            ].map((interest) => (
              <div
                key={interest}
                className="rounded-xl border border-white/10 p-5 text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                {interest}
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            CONTACT
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's Build Something Intelligent
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I'm interested in AI engineering, machine learning,
            data science, research, and building intelligent
            production-ready applications.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sugamm335@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Email Me
            </a>

            <a
              href="https://github.com/iamgroot2324"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/sugam-khatiwada-804a62343/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>

          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Sugam Khatiwada
          </p>

          <p>
            AI Engineer • Data Scientist • Machine Learning Enthusiast
          </p>

        </div>
      </footer>

    </div>
  )
}


/* =====================================================
   REUSABLE COMPONENTS
===================================================== */

function NavLink({ href, text }) {
  return (
    <a
      href={href}
      className="text-sm text-gray-400 transition hover:text-cyan-400"
    >
      {text}
    </a>
  )
}


function MobileLink({ href, text, close }) {
  return (
    <a
      href={href}
      onClick={close}
      className="text-gray-300 transition hover:text-cyan-400"
    >
      {text}
    </a>
  )
}


function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-12">

      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        {title}
      </h2>

    </div>
  )
}


function InfoRow({ label, value }) {
  return (
    <div className="border-b border-white/10 py-4 last:border-0">

      <p className="text-xs uppercase tracking-widest text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-gray-200">
        {value}
      </p>

    </div>
  )
}


function SkillCard({ title, skills }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-400"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>
  )
}


function ProjectCard({
  number,
  title,
  description,
  technologies,
  github,
  featured = false
}) {
  return (
    <article
      className={`group rounded-2xl border bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 ${
        featured
          ? "border-cyan-400/30"
          : "border-white/10"
      }`}
    >

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-cyan-400">
          {number}
        </span>

        {featured && (
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-400">
            Featured
          </span>
        )}

      </div>


      <h3 className="mt-6 text-2xl font-bold leading-8">
        {title}
      </h3>


      <p className="mt-5 leading-8 text-gray-400">
        {description}
      </p>


      <p className="mt-6 text-sm leading-6 text-cyan-400/80">
        {technologies}
      </p>


      <div className="mt-7">

        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub ↗
          </a>
        ) : (
          <span className="inline-flex rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-600">
            GitHub
          </span>
        )}

      </div>

    </article>
  )
}


function InterestCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {description}
      </p>

    </div>
  )
}


function CertificationCard({
  title,
  provider,
  topics
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">

      <p className="text-sm text-cyan-400">
        {provider}
      </p>

      <h3 className="mt-4 text-xl font-bold leading-7">
        {title}
      </h3>

      <p className="mt-5 leading-7 text-gray-400">
        {topics}
      </p>

    </div>
  )
}


export default App
