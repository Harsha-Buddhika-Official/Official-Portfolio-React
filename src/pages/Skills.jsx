import { useEffect, useRef, useState } from "react";

function SkillIcon({ imageUrl, name, delay, isVisible }) {
  return (
    <div
      className={`flex flex-col items-center translate-y-8 opacity-0 cursor-pointer group ${isVisible ? 'animate-fadeIn' : ''}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : '0ms', animationFillMode: "forwards" }}
    >
      <div className="relative w-20 h-20 mb-3 md:w-24 md:h-24">
        {/* Glowing background effect */}
        <div className="absolute inset-0 transition-all duration-700 scale-110 opacity-0 bg-gradient-to-br from-primary-400/20 via-accent-400/20 to-purple-400/20 rounded-2xl blur-lg group-hover:opacity-100"></div>
        
        {/* Main skill container */}
        <div className="relative flex items-center justify-center w-full h-full p-4 transition-all duration-500 transform border border-gray-100 shadow-lg bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl hover:shadow-2xl hover:scale-110 hover:-rotate-2 dark:border-gray-600 group-hover:border-primary-300 dark:group-hover:border-primary-500">
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-br from-primary-500/0 via-accent-500/0 to-purple-500/0 group-hover:from-primary-500/10 group-hover:via-accent-500/10 group-hover:to-purple-500/10 rounded-2xl"></div>
          
          {/* Sparkle effects */}
          <div className="absolute w-2 h-2 transition-all duration-300 delay-200 bg-yellow-400 rounded-full opacity-0 top-2 right-2 group-hover:opacity-100 animate-pulse"></div>
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-300 delay-400"></div>
          
          <img
            src={imageUrl}
            alt={name}
            className="relative z-10 object-contain w-full h-full transition-all duration-300 filter group-hover:brightness-110"
          />
        </div>
      </div>
      
      {/* Skill name with enhanced styling */}
      <div className="text-center">
        <p className="relative text-sm font-semibold text-gray-700 transition-colors duration-300 md:text-base dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {name}
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
        </p>
      </div>
    </div>
  );
}

function SkillSection({ title, skills, isVisible }) {
  return (
    <div className="relative mb-20">
      {title && (
        <div className="relative mb-10 text-center">
          <div className="relative inline-block">
            <h3 className="relative z-10 mb-2 text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">
              {title}
            </h3>
            {/* Enhanced decorative elements */}
            <div className="absolute flex items-center space-x-2 transform -translate-x-1/2 -bottom-3 left-1/2">
              <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse"></div>
              <div className="w-20 h-1 rounded-full md:w-28 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500"></div>
              <div className="w-3 h-3 delay-300 rounded-full bg-accent-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-10">
        {skills.map((skill, index) => (
          <SkillIcon
            key={index}
            imageUrl={skill.imageUrl}
            name={skill.name}
            delay={150 + index * 100}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Programming Languages (match image)
  const programmingLanguages = [
    {
      name: "HTML5",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain-wordmark.svg",
    },
    {
      name: "JavaScript",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "Java",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
    },
    {
      name: "C++",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    },
  ];

  // Frameworks, Libraries & Technologies
  const frameworksTechnologies = [
    {
      name: "React",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Node.js",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Express",
      imageUrl:
        "https://raw.githubusercontent.com/DilZhaan/DilZhaan/main/express.svg",
    },
    {
      name: "Tailwind",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "GraphQL",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
    },
  ];

  // Databases & Cloud
  const databasesCloud = [
    {
      name: "MongoDB",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "MySQL",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
  ];

  // Tools & Skills
  const toolsSkills = [
    {
      name: "Figma",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    },
    {
      name: "Photoshop",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png?20200616073617",
    },
    {
      name: "Illustrator",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
    },
    {
      name: "Git",
      imageUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg",
    },
  ];

  // Currently Learning
  // const currentlyLearning = [
  //   {
  //     name: "PostgreSQL",
  //     imageUrl:
  //       "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  //   },
  //   {
  //     name: "Python",
  //     imageUrl:
  //       "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  //   },
  // ];

  useEffect(() => {
    // Add the keyframes for enhanced animations
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes fadeIn {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
      
      @keyframes glow {
        0%, 100% {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }
        50% {
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.6), 0 0 40px rgba(168, 85, 247, 0.4);
        }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .shimmer-effect {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
      
      .glow-effect {
        animation: glow 2s ease-in-out infinite alternate;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div
      id="skills"
      className="relative px-4 py-20 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8 md:py-32"
      ref={skillsRef}
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 -mt-20 rounded-full right-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/30 via-accent-200/20 to-purple-200/30 dark:from-primary-900/20 dark:via-accent-900/10 dark:to-purple-900/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 -mb-20 rounded-full left-1/4 w-80 h-80 bg-gradient-to-tr from-accent-200/30 via-purple-200/20 to-primary-200/30 dark:from-accent-900/20 dark:via-purple-900/10 dark:to-primary-900/20 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-400/30 animate-float"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.5)}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="mb-12 text-center">
          <h2 className="relative inline-block text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Tech Stack & Tools
            <div className="absolute w-16 h-1 transform -translate-x-1/2 rounded-full -bottom-3 left-1/2 md:w-24 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 dark:from-primary-400 dark:via-accent-400 dark:to-primary-400"></div>
          </h2>
        </div>

        <div className="relative p-8 border shadow-2xl bg-gradient-to-br from-white/90 via-white/80 to-gray-50/90 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-gray-900/90 backdrop-blur-xl rounded-3xl border-white/20 dark:border-gray-700/30 md:p-12">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none rounded-3xl" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          {/* Connect dots pattern */}
          {/* <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotGrid)" />
            </svg>
          </div> */}

          <SkillSection
            title="Programming Languages"
            skills={programmingLanguages}
            isVisible={isVisible}
          />

          <SkillSection
            title="Frameworks & Libraries & Technologies"
            skills={frameworksTechnologies}
            isVisible={isVisible}
          />

          <SkillSection
            title="Databases & Cloud"
            skills={databasesCloud}
            isVisible={isVisible}
          />

          <SkillSection
            title="Tools & Skills"
            skills={toolsSkills}
            isVisible={isVisible}
          />

          {/* <SkillSection
            title="Currently Learning"
            skills={currentlyLearning}
            isVisible={isVisible}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
