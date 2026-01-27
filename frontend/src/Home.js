import { useState, useEffect } from "react";

function Home() {
  const Typewriter = ({ texts = [], delay = 100, pause = 1500 }) => {
    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
      document.title = "Eyituoyo Besidonne";
    }, []);

    useEffect(() => {
      let timeout;

      if (charIndex < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setCharIndex(0);
          setCurrentText("");
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, pause);
      }

      return () => clearTimeout(timeout);
    }, [charIndex, textIndex, texts, delay, pause]);

    return <span>{currentText}</span>;
  };

  return (
    <div className="min-h-[100dvh] bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col lg:flex-row gap-12">

        {/* LEFT / HERO */}
        <aside className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Eyituoyo Besidonne
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 h-[1.4em] mb-4">
            <Typewriter
              texts={["Software Student", "Full-Stack Developer"]}
              delay={100}
              pause={1500}
            />
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
            Passionate about building web applications and learning how modern
            technologies work together. Currently focused on full-stack
            development and personal projects.
          </p>

          {/* NAVIGATION */}
          <nav className="flex gap-6 lg:flex-col lg:gap-3 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#experience" className="hover:text-blue-600 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </nav>
        </aside>

        {/* RIGHT / CONTENT */}
        <main className="w-full lg:w-2/3 space-y-16 text-gray-700">

          {/* ABOUT */}
          <section id="about" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About
            </h2>
            <p className="mb-4 leading-relaxed">
              I am a Level 3 Software Development student who enjoys building
              simple but functional web applications. I focus on understanding
              how front-end and back-end technologies work together.
        </div>

        <div className="w-full lg:w-2/3 text-gray-700 space-y-10 mt-8 lg:mt-0 scroll-smooth">

          {/* ABOUT SECTION  */}
          <section id="about">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About</h2>
            <p>
              I am a Level 3 Software Development student who enjoys building simple but functional web applications and learning how different technologies work together. I’m currently building my skills in both front-end and back-end development using tools like React, JavaScript, Python, and SQL.
            </p>
            <p className="leading-relaxed">
              I enjoy problem-solving, experimenting with new concepts, and
              continuously improving through hands-on learning and projects.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Experience
            </h2>

            <p className="mb-4">
              <strong>Front-End Development — Student Projects</strong>
          {/* EXPERIENCE SECTION */}
          <section id="experience">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 ">Experience</h2>
            <p>
              <strong>Front-End Development — Student Projects</strong>  
              <br />
              Built responsive web pages using HTML, CSS, JavaScript, React, and
              Tailwind CSS with a focus on layout and usability.
            </p>

            <p>
              <strong>Python Development — Coursework & Projects</strong>
              <br />
              Developed small Python applications and APIs using Flask, SQLite,
              and Jinja templates.
            </p>

            {/* SKILLS GRID */}
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
              {[
                { src: "/HTML.png", label: "HTML" },
                { src: "/CSS.png", label: "CSS" },
                { src: "/JS.png", label: "JavaScript" },
                { src: "/React.png", label: "React" },
                { src: "/Tailwind.png", label: "Tailwind" },
                { src: "/Python.png", label: "Python" },
                { src: "/Flask.png", label: "Flask" },
                { src: "/jinja.png", label: "Jinja" },
                { src: "/sqlite.png", label: "SQLite" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-14 object-contain transition-transform hover:scale-110"
                  />
                  <span className="text-xs text-gray-600">
                    {item.label}
                  </span>
                </div>
              ))}

       


            <div className="flex justify-center ml-auto">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">

                {[
                  { src: "/CSS.png", label: "CSS (cascading style sheet)" },
                  { src: "/HTML.png", label: "HTML is easy" },
                  { src: "/Flask.png", label: "Flask is good" },
                  { src: "/jinja.png", label: "Jinja is here" },
                  { src: "/JS.png", label: "JavaScript" },
                  { src: "/Python.png", label: "Python" },
                  { src: "/React.png", label: "React" },
                  { src: "/sqlite.png", label: "SQLite" },
                  { src: "/Tailwind.png", label: "Tailwind" }
                ].map((item) => (
                  <div key={item.src} className="relative group w-full h-20 flex items-center justify-center">

                    <p className="absolute -top-6 text-xs sm:text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition duration-300">
                      {item.label}
                    </p>

                    <img 
                      src={item.src}
                      alt={item.label}
                      className="w-full h-20 object-contain transform transition duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Projects
            </h2>
            <p className="leading-relaxed">
              Personal and coursework projects focusing on responsive design,
              clean UI, and full-stack fundamentals. (More coming soon 🚀)
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}

export default Home;
