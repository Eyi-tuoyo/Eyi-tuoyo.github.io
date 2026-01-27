/*
Version x

version 1.1: added menu
version 1.1.1: Added individual button styling
version 1.1.2: Added link to homepage
version 1.2: Added about me
version 1.2.1: Added work experience
version 1.2.2: Added carded styling

*/


import { useState, useEffect } from 'react';

function Home() {
  const Typewriter = ({ texts = [], delay = 100, pause = 1500 }) => {
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    useEffect(()=>{document.title="Eyituoyo Besidonne"})


    useEffect(() => {
      let timeout;

      if (charIndex < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev + texts[textIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setCharIndex(0);
          setCurrentText('');
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, pause);
      }

      return () => clearTimeout(timeout);
    }, [charIndex, textIndex, texts, delay, pause]);

    return <span>{currentText}</span>;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 sm:p-10 scroll-smooth">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-40 w-full max-w-6xl">

        <div className="text-left lg:sticky top-40 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
            Eyituoyo Besidonne
          </h2>
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-700 h-[1em]">
            <Typewriter 
              texts={["Software Student", "Full-Stack Developer"]} 
              delay={100} 
              pause={1500} 
            />
          </h3>
          <p className="text-gray-600 mb-6">
            Passionate about building web applications and exploring new technologies. Currently learning full-stack development and collaborating on personal projects.
          </p>

          <nav className="flex flex-row lg:flex-col border-l-0 lg:border-l-2 border-gray-400 pl-0 lg:pl-4 space-x-6 lg:space-x-0 lg:space-y-3">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
          </nav>
        </div>

        <div className="w-full lg:w-2/3 text-gray-700 space-y-10 mt-8 lg:mt-0 scroll-smooth">

          {/* ABOUT SECTION UPDATED */}
          <section id="about">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About</h2>
            <p>
              I am a Level 3 Software Development student who enjoys building simple but functional web applications and learning how different technologies work together. I’m currently building my skills in both front-end and back-end development using tools like React, JavaScript, Python, and SQL.
            </p>
            <p>
              I enjoy problem-solving, experimenting with new coding concepts, and working on small personal projects. My goal is to become a full-stack developer and continue improving through hands-on learning and collaboration with others.
            </p>
          </section>

          {/* EXPERIENCE SECTION UPDATED */}
          <section id="experience">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 ">Experience</h2>
            <p>
              <strong>Front-End Development — Student Projects</strong>  
              <br />
              Built responsive web pages using HTML, CSS, JavaScript, and React. Practiced structuring components, implementing layouts, and improving user experience using Tailwind CSS.
            </p>
            <p>
              <strong>Python Development — Coursework & Personal Projects</strong>  
              <br />
              Created small Python applications such as automation scripts and beginner-level tools. Gained hands-on experience with Flask, APIs, SQLite databases, and Jinja templates.
            </p>

       


            <div className="flex justify-center ml-auto">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">

                {[
                  { src: "/CSS.png", label: "CSS (cascading style sheet)" },
                  { src: "/Flask.png", label: "Flask is good" },
                  { src: "/HTML.png", label: "HTML" },
                  { src: "/jinja.png", label: "Jinja" },
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

          <section id="projects">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 ">Experience</h2>
             <p>
              <strong>Front-End Development — Student Projects</strong>  
              <br />
              Built responsive web pages using HTML, CSS, JavaScript, and React. Practiced structuring components, implementing layouts, and improving user experience using Tailwind CSS.
            </p>
            <p>
              <strong>Python Development — Coursework & Personal Projects</strong>  
              <br />
              Created small Python applications such as automation scripts and beginner-level tools. Gained hands-on experience with Flask, APIs, SQLite databases, and Jinja templates.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Home;
