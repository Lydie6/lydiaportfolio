import React from 'react'
import { RevealOnScroll } from "../RevealOnScroll.jsx";
import "../../index.css"
const Home = () => {
  return (
    <section id="home" className=" min-h-screen  flex flex-col items-center justify-center">
     <RevealOnScroll>
     <div className="z-10 text-center mt-[-30px] ">
        <h1 className="text-3xl    md:text-7xl mb-6 text-gradient font-bold ">
          I'm Lydia Ikhelef
        </h1>
        <p className=" text-gray-400    mb-8 text-lg max-w-[20rem] xs:max-w-[300px] sm:max-w-2xl lg:max-w-4xl mx-auto text-justify">
        I'm currently a Master's student in Network Administration and Security, with a strong interest in both
                web development and network technologies. As a web developer,
                I work with modern tools like React and Tailwind CSS to create responsive and intuitive user interfaces.
                I've developed several projects — both as part of my academic journey and through personal practice —
                which have helped me sharpen my technical and problem-solving skills. I'm especially passionate about
                networks and cybersecurity ,and I'm constantly exploring how to build secure, efficient systems that support
                reliable web experiences.
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <a className="bg-blue-500 text-whit  py-3 px-6 rounded font-medium overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,249,0.5)] hover:bg-blue-600 hover:cursor-pointer transition-all duration-300 ">View Projects</a>
        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,249,0.5)] hover:bg-blue-500/10 hover:text-blue-600 hover:cursor-pointer" >Contact Me</a>
      </div>
     </RevealOnScroll>
    </section>
  )
}

export default Home