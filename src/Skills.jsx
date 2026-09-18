import { useEffect, useState, useRef } from 'react';

function Skills() {
  // Categorized skills for a clean, professional layout
  const techSkills = [
    { name: "React", type: "frontend" },
    { name: "JavaScript", type: "frontend" },
    { name: "HTML5", type: "frontend" },
    { name: "CSS3", type: "frontend" },
    { name: "Tailwind CSS", type: "frontend" },
    { name: "PHP", type: "backend" },
    { name: "Laravel", type: "backend" },
    { name: "Java", type: "backend" },
    { name: "Python", type: "backend" },
    { name: "MySQL", type: "database" },
  ];

  const designSkills = [
    { name: "UI/UX Design" },
    { name: "Wireframing" },
    { name: "Prototyping" },
    { name: "Responsive Layouts" }
  ];

  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills"
      ref={sectionRef} 
      className="bg-[#10173a] text-white py-24 px-4 md:px-20 min-h-screen flex items-center justify-center"
    >
      <div className="bg-[#10172a] p-8 md:p-12 rounded-2xl w-full max-w-5xl mx-auto border border-slate-800 shadow-xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-sky-400 font-bold mb-3 tracking-wide">
            My Toolbox
          </h2>
          <p className="text-slate-400 font-sans text-sm max-w-md mx-auto">
            The technologies, frameworks, and design principles I use to bring ideas to life.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Column 1: Development Stack (Takes up 3/5 width on desktop) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="font-mono text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              Development & Languages
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, index) => (
                <div 
                  key={index}
                  style={{ 
                    opacity: isIntersecting ? 1 : 0,
                    transform: isIntersecting ? 'translateY(0)' : 'translateY(15px)',
                    transition: `all 0.5s ease-out ${index * 50}ms` 
                  }}
                  className="px-5 py-3 bg-[#1e293b]/40 hover:bg-[#1e293b]/80 border border-slate-800 hover:border-sky-500/40 rounded-xl font-sans text-sm font-medium tracking-wide text-slate-200 transition-all duration-300 cursor-default select-none shadow-sm"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Design & Strategy (Takes up 2/5 width on desktop) */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 className="font-mono text-xs font-bold text-teal-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              UI/UX & Design Philosophy
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {designSkills.map((skill, index) => (
                <div 
                  key={index}
                  style={{ 
                    opacity: isIntersecting ? 1 : 0,
                    transform: isIntersecting ? 'translateY(0)' : 'translateY(15px)',
                    transition: `all 0.5s ease-out ${(index + techSkills.length) * 50}ms` 
                  }}
                  className="px-5 py-3 bg-[#1e293b]/20 hover:bg-[#1e293b]/60 border border-slate-800/60 hover:border-teal-500/40 rounded-xl font-sans text-sm font-medium tracking-wide text-slate-300 transition-all duration-300 cursor-default select-none"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
