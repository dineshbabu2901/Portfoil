import React from "react";
import profileImage from "../assects/photo.jpeg";

const profileInfo = {
  name: "Dineshbabu S",
  workingExperience:
    "Intern with 6 months of experience as a Full Stack Developer at KNACKBAY Vellore, India",
  location: "Vellore, Tamil Nadu, India",
  education: {
    school: "SRK BHELL RAINPET",
    schoolLocation: "Ranipet, Tamil Nadu, India",
    schoolGraduationYear: 2018,
    college: "VISTAS University Chennai",
    collegeLocation: "Chennai, Tamil Nadu, India",
    collegeGraduationYear: 2022,
    collegeMajor: "Bachelor of Engineering in Computer Science",
    collegeGPA: 6.89,
  },
  skills: [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 70 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 85},
    { name: "MongoDB", level: 80 },
    { name: "Figma", level: 80 },
  ],
};

const Profile = () => {
  return (
    <section
      id="Profile"
      className="flex flex-col py-20 px-5 justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white"
    >
      <div className="container mx-auto">
      
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-4xl text-black font-bold mb-2 text-center border-b-2 underline  border-white pb-2">
              Profile<b />
            </h1>
          <div className="flex justify-center">
            
            <div
             className="bg-cover bg-center h-32 w-32 p-2 rounded-full border-4 border-red-500"
              style={{ backgroundImage: `url(${profileImage})` }}
            ></div>
          </div>
          <div className="p-4">
            <h1 className="text-3xl text-black font-bold mb-2 text-center border-b-2 border-white pb-2">
              {profileInfo.name}
            </h1>
            <p className="text-gray-700 text-base text-center">
              {profileInfo.workingExperience}
            </p>
            <p className="text-gray-700 text-base text-center">
              Location: {profileInfo.location}
            </p>
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-2 text-center text-black border-b-2 border-white pb-2">
                Education:
              </h2>
              <p className="text-gray-700 text-base text-center">
                School: {profileInfo.education.school} (
                {profileInfo.education.schoolLocation}), Graduated in{" "}
                {profileInfo.education.schoolGraduationYear}
              </p>
              <p className="text-gray-700 text-base text-center">
                College: {profileInfo.education.college} (
                {profileInfo.education.collegeLocation}), Graduated in{" "}
                {profileInfo.education.collegeGraduationYear} with a major in{" "}
                {profileInfo.education.collegeMajor}. GPA:{" "}
                {profileInfo.education.collegeGPA}
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-2 text-center text-black border-b-2 border-white pb-2">
                Skills:
              </h2>
              {profileInfo.skills.map((skill, index) => (
                <div key={index} className="text-gray-700 mb-2">
                  <div>{skill.name}</div>
                  <div className="bg-gray-300 h-2 rounded-full">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

