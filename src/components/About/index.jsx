import React from 'react'
import "../../index.css"
import { FaGraduationCap } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { RevealOnScroll } from "../RevealOnScroll.jsx";
const About = () => {
  const frontendskills = [ "html", "css", "javascript", "reactjs", "nextjs", "tailwindcss"];
  const backendskills = ["nodejs", "express", "mongodb", "mysql", "php"];

  return (
    <RevealOnScroll>
         <section id="about"  className=" flex  sm:mb-1 ">
    
    <div className="max-w-3xl mx-auto px-4 mt-[5rem] pb-6 ">
   <div className="border border-white/10 rounded-lg p-4">
   <h1 className="text-4xl font-bold text-center bg-gradient-to-r text-gradient bg-clip-text text-transparent">Skills & Background</h1>
      
      <div className="rounded-xl p-8  text-center hover:-translate-y-1 transition-all">
        <p className="text-gray-300 mb-1">
        My skill set spans both front-end and back-end development, 
        as well as networking, using modern tools and frameworks to bring ideas to life.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-[-25px]">
        {/* Frontend Skills */}
        <div className="rounded-xl px-8 py-6 hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4 pl-4 text-white">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {frontendskills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:cursor-pointer transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className=" px-8 py-6 hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4 pl-4 text-white">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {backendskills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:cursor-pointer transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

   
   
   </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-white ">

        <div className=" px-8 py-6 hover:-translate-y-1 transition-all flex flex-col gap-2 border border-white/10">
           <div className="flex">
           <FaGraduationCap style={{fontSize: "30px", color: "blue",marginLeft:"7px" }} />
           <h1 className="text-xl font-bold mb-4 pl-4 "> Education</h1>
           </div>
            <ul className="text-gray-300 list-disc">
              <li>Master degree in computer science option network security </li>
            </ul>
        </div>

        <div className="px-8 py-6 flex  border border-white/10 hover:-translate-y-1 transition-all  flex-col gap-2">
          <div className="flex mb-2">
          <GrCertificate style={{fontSize: "24px", color: "blue",marginLeft:"10px",marginTop:"5px" }}   />
          <h1 className="text-xl font-bold mb-4 pl-4 ">Certification</h1>
          </div>
           <ul className="mt-[-13px] text-gray-300 list-disc">
            <li className="">CCNA 1 introduction to networks</li>
            <li className="">CCNA 2 switching routing and wireless essentials</li>
          </ul>
       
        </div>
         

      </div>

      
    </div>


  </section>

    </RevealOnScroll>
 
  )
}

export default About;