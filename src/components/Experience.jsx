import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Self-Learning",
    duration: "Sep 2024 - Present",
    skills: ["React", "Tailwind CSS", "Python", "Data Structures & Algorithms"],
    description: [
      "Studied and mastered the React framework, including key concepts like hooks and state management.",
      "Developed responsive and user-friendly web applications using React and Tailwind CSS.",
      "Practiced problem-solving with Data Structures & Algorithms in Python to strengthen coding skills.",
    ],
  },

  {
    role: "Operations Assistant",
    company: "BlueDart DHL",
    duration: "Dec 2022 - Jan 2025",
    skills: ["C2PC", "C2NG", "Customer interaction", "Data Handling"],
    description: [
      "After the COVID-19 pandemic, I worked at BlueDart DHL, where I gained hands-on experience with C2PC and C2NG, software used for data handling and various operations.",
      "Shipment Scanning – Efficiently processed and tracked shipments.",
      "Data Management – Added and updated shipment information.",
      "CMM (Cash Management Module) – Handled financial transactions securely.",
      "Customer Support  –  Provided technical assistance, improving troubleshooting and problem-solving skills.",
    ],
  },
  {
    role: "Frontend Development Enthusiast",
    company: "I-NET infotech",
    duration: "JUL 2020 - JAN 2021",
    skills: ["HTML", "CSS ", "JavaScript", "Bootstrap framework"],
    description: [
      "Completed a 6-month training program focused on Frontend Development and Learned HTML, CSS, JavaScript, and Bootstrap framework during this period.",
      "Developed a commercial e-commerce website for purchasing Mobiles .",
      "Ensured the project was fully responsive and had a user-friendly interface.",
    ],
  },
  {
    role: "Diploma Student",
    company: "Computer Enginnering",
    duration: "Jul 2016 - MAR 2020",
    skills: ["C", "C++", "DBMS", "DCP", "OOPS", "Java", "Cloud Computing"],
    description: [
      "My semester journey started here, consisting of 6 semesters.",
      "Studied the subjects mentioned above along with other subjects such as PHP and MySQL.",
      "As part of my coursework,Worked on a Student Management System that included both frontend and backend development.",
      "Took on the role of Team Leader in the project and  personally developed the frontend using plain HTML, CSS, and JavaScript",
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-black min-h-screen text-white py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">
        🗓️ Work Experience & Education Experience
      </h1>

      <div className="max-w-4xl flex flex-col items-center ">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start ">
            <div className="absolute left-4 top-2  w-1 bg-gray-600 h-full"></div>

            <div className="bg-white p-4.5 rounded-full z-10"></div>

            <div className="ml-3 bg-red-700 p-4 rounded-[10px] max-w-[500px] cursor-pointer shadow-md  mb-6 transition-transform duration-200 ease-in-out hover:scale-102 hover:shadow-lg hover:shadow-red-500/30">
              <h2 className="text-[24px]  ">{exp.role}</h2>
              <p className="text-gray-200">{exp.company}</p>
              <p className="text-black ">{exp.duration}</p>

              <div className="mt-1">
                <p className="text-[16px]">SKILLS LEARNED : </p>
                <p className="text-[17px] text-amber-200 mt-2">
                  {exp.skills.join(" , ")}
                </p>
              </div>
              <ul className="mt-3 text-[12px] list-disc list-inside">
                {exp.description.map((desc, i) => (
                  <li className="mt-3" key={i}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
