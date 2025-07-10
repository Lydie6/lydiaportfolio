import React from 'react'
import { projects } from './projectsconstants'
import { RevealOnScroll } from "../RevealOnScroll.jsx";
import "../../index.css";
import "../../App.css"

const Projects = () => {
    return (
        <section className="min-h-screen  sm:mb-2" id='projects'>
            <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4  text-white  ">
                <h1 className="text-4xl font-bold text-center    text-gradient  text-transparent">Featured Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {projects.map((project) => (
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all" key={project.id}>
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-500 mb-4">
                                {project.description}
                            </p>
                            <div className="mb-4">
                                {project.technologies.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className='mt-4 text-blue-400 hover:text-blue-300 '  target="_blank"  >view project &rarr;</a>
                        </div>))}
                </div>
            </div>
            </RevealOnScroll>
            </section> )}
export default Projects

