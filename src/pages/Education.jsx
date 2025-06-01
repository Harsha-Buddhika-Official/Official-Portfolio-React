import { useState, useRef, useEffect } from "react";
import next from '../components/images/logo/Next.png'

function EducationCard({ degree }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isExpanded
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isExpanded]);

  return (
    <div className="mb-6 overflow-hidden bg-white shadow-lg dark:bg-gray-800 rounded-xl">
      <div
        className="flex flex-col items-center gap-4 p-6 cursor-pointer md:flex-row md:items-start"
        onClick={toggleExpand}
      >
        <div className="flex-shrink-0 w-20 h-20">
          <img
            src={degree.logo}
            alt={`${degree.university} logo`}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {degree.university}
            </h3>
            <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {degree.year}
            </span>
          </div>
          <h4 className="mt-1 text-lg font-semibold text-primary-600 dark:text-primary-400">
            {degree.name}
          </h4>
        </div>
        <div
          className="text-gray-500 transition-transform duration-300 dark:text-gray-400"
          style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out max-h-0"
      >
        <div className="p-6 pt-0">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {degree.description}
          </p>

          <div className="mb-4">
            <h5 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
              Key Courses
            </h5>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {degree.keyCourses.map((course, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">
                    •
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  const educationRef = useRef(null);

  const EasternLogo = "https://upload.wikimedia.org/wikipedia/en/a/a0/EUSL_logo2.png";
//   const NextGenLogo = {};

  const degrees = [
    {
      university: "Eastern University of Sri Lanka",
      name: "Bachelor of Computer Science",
      year: "2024 - 2027",
      description:
        "The Computer Science degree at Eastern University provides a strong foundation in software development, cybersecurity, and system design, combining theory with hands-on experience. The program covers key areas such as software engineering, cloud computing, and UI/UX design, preparing students for real-world challenges. As a Web Developer, Cybersecurity Enthusiast, UI/UX Designer, Graphic Designer, Java Developer, and Software Engineer, I apply a diverse skill set to build secure, efficient, and visually compelling digital solutions.",
      keyCourses: [
        "Software Engineering & Design Principles",
        "Web Development & Internet Technologies",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Database Management Systems & Advanced DB Concepts",
        "Computer Architecture & Assembly Programming",
        "Systems & Network Administration",
        "Software Quality Assurance & Testing",
        "Human-Computer Interaction",
        "Data Communication & Computer Networks",
        "Cybersecurity & Data Security",
        "Theory of Computing & Automata",
        "Logic Programming & Expert Systems",
        "Visual System Development Tools",
        "Foundations of Management & Professional IT Ethics"
      ],
      logo: EasternLogo,
    },
    {
        university: "NextGen Campus",
        name: "Certificate in Cyber Security & Networking",
        year: "2021/02/23 - 2021/06/29",
        description:
        "This certificate program at NextGen Campus provided comprehensive training in cybersecurity and networking. It covered key areas such as data security, network administration, and ethical hacking, equipping participants with the skills to secure and manage modern IT infrastructures.",
        keyCourses: [
        "Cybersecurity Fundamentals",
        "Network Security & Administration",
        "Ethical Hacking & Penetration Testing",
        "Data Security & Encryption Techniques",
        "Incident Response & Risk Management",
        ],
        logo: next,
    },
  ];

  

  return (
    <div
      id="education"
      className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-24"
      ref={educationRef}
    >
      <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 md:text-4xl dark:text-white">
        Education
        <div className="w-16 h-1 mx-auto mt-3 rounded-full md:w-24 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 dark:from-primary-400 dark:via-accent-400 dark:to-primary-400"></div>
      </h2>
      <div className="space-y-8">
        {degrees.map((degree, index) => (
          <EducationCard key={index} degree={degree} />
        ))}
      </div>
    </div>
  );
}

export default Education;
