import React from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../../index.css"
import "../../App.css"
const Contacts = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
      alert('message sent');
      setformData({ name: "", email: "", message: "" })
    }, (error) => {
      alert('message not sent')

    })
  }
  return (

    <section id='contacts' className="min-h-screen  pt-40 sm:pt-2">
      <div className="px-4  max-w-2xl sm:max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gradient  ">Contact me</h1>
        <form className='mt-6   text-white mr-2 sm:mr-0' onSubmit={handlesubmit}>
          <div className="relative  ">
            <input type="text" id='name' name='Name' placeholder='Name ' required value={formData.name} onChange={(e) => setformData({ ...formData, name: e.target.value })} className=' w-full border  border-white bg-white/5 px-4 py-3 m-2 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-blue-500/5' />
          </div>
          <div className="relative">
            <input type="email" id='email' name='email' placeholder='email@gmail.com' required value={formData.email} onChange={(e) => setformData({ ...formData, email: e.target.value })} className=' w-full border  border-white bg-white/5 px-4 py-3 m-2 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-blue-500/5' />
          </div>
          <div className="relative">
            <textarea id='name' name='Name' placeholder='your message ..' required value={formData.message} onChange={(e) => setformData({ ...formData, message: e.target.value })} rows={5} className=' w-full border  border-white bg-white/5 px-4 py-3 m-2 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-blue-500/5' />
          </div>
          <button type='submit' className=' w-full bg-blue-600 px-4 py-3 m-2 rounded-lg font-medium text-white transition hover:-translate-y-0.5 hover:hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>Send Message</button>
        </form>

        <div className="text-white flex justify-center gap-5 mt-6">
          <FaFacebookF size={30} />
          <FaLinkedin size={30} />
          <FaGithub size={30} />

        </div>
      </div>
    </section>
  )
}

export default Contacts
