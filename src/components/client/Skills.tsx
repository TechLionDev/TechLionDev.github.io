import { CircleCheck } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      description:
        "I have been using JavaScript for 3 years now. I have experience with React, Next.js, and Node.js.",
    },
    {
      name: "TypeScript",
      description:
        "I have been using TypeScript for 2 years now. I have experience with React, Next.js, and Node.js.",
    },
    {
      name: "Python",
      description:
        "I have been using Python for 2 years now. I have experience with Django and Flask.",
    },
    {
      name: "HTML",
      description:
        "I have been using HTML for 3 years now. I have experience with TailwindCSS and Bootstrap.",
    },
    {
      name: "CSS",
      description:
        "I have been using CSS for 3 years now. I have experience with TailwindCSS and Bootstrap.",
    },
    {
      name: "Sass",
      description:
        "I have been using Sass for 2 years now. I have experience with TailwindCSS and Bootstrap.",
    },
    {
      name: "JSX",
      description:
        "I have been using JSX for 3 years now. I have experience with React and Next.js.",
    },
    {
      name: "SQL",
      description:
        "I have been using SQL for 2 years now. I have experience with PostgreSQL and MySQL.",
    },
    {
      name: "Git",
      description:
        "I have been using Git for 3 years now. I have experience with GitHub.",
    },
    {
      name: "MongoDB",
      description:
        "I have been using MongoDB for 2 years now. I have experience with Mongoose.",
    },
    {
      name: "TailwindCSS",
      description:
        "I have been using TailwindCSS for 1 year now. I have experience with JIT mode.",
    },
    {
      name: "CockroachDB",
      description:
        "I have been using CockroachDB for 1 year now. I have experience with SQL.",
    },
    {
      name: "Markdown",
      description:
        "I have been using Markdown for 2 years now. I have experience with GitHub.",
    },
    {
      name: "Bash",
      description:
        "I have been using Bash for 2 years now. I have experience with Linux.",
    },
    {
      name: "Hitfilm Express",
      description:
        "I have been using Hitfilm Express for 1 year now. I have experience with video editing.",
    },
    {
      name: "DaVinci Resolve",
      description:
        "I have been using DaVinci Resolve for 1 year now. I have experience with video editing.",
    },
    {
      name: "Adobe Premiere Pro",
      description:
        "I have been using Adobe Premiere Pro for 1 year now. I have experience with video editing.",
    },
    {
      name: "Adobe After Effects",
      description:
        "I have been using Adobe After Effects for 1 year now. I have experience with video editing.",
    },
    {
      name: "Adobe Photoshop",
      description:
        "I have been using Adobe Photoshop for 1 year now. I have experience with photo editing.",
    },
    {
      name: "Adobe XD",
      description:
        "I have been using Adobe XD for 1 year now. I have experience with UI/UX design.",
    },
    {
      name: "Figma",
      description:
        "I have been using Figma for 1 year now. I have experience with UI/UX design.",
    },
    {
      name: "OBS",
      description:
        "I have been using OBS for 1 year now. I have experience with video recording.",
    },
  ];
  return (
    <>
      <div id="skills">
        <h1 className="mx-6 pt-[104px] text-4xl font-bold text-primary">
          Skills:
        </h1>
        <ul className="mx-6 grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
          {skills.map((skill, idx) => {
            return (
              <li className="flex items-center gap-4" key={idx}>
                <CircleCheck className="w-[48px]" color="#0088FF" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-primary">
                    {skill.name}
                  </h2>
                  <p className="text-sm">{skill.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Skills;
