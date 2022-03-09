import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head'
import logo from '../img_compo/logo.png'
import logo1 from '../img_compo/logo3.jpeg'
import Image from 'next/image'
export default function About() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dlvwdno', 'template_r8nisvq', form.current, 'user_BXXAVTqeStR97z7ZUxk3p')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <div className="About">
        <div className="flex justify-center  min-h-screen">
          <div className="card h-[480px] w-[330px] overflow-hidden md:w-[780px] lg:w-[900px] bg-white rounded-lg">
            <div className="form flex h-full w-full">
              <div className="left-side w-2/5 h-full bg-blue-700">
                <p className="text-center mt-5 text-2xl font-semibold text-white">Profile</p>
                <div className="flex justify-center items-center mt-6"> <span className="h-32 w-32 overflow-hidden rounded-full ">
                  <Image

                    src={logo1}
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </span> </div>
                <form ref={form} onSubmit={sendEmail}>
                <div className="mt-5 relative px-3"> <input placeholder="1234@gmail.com" type="email" className="h-16 w-full px-2 outline-none rounded-lg border-0" name="email"/> <span className="absolute left-5 text-gray-500 top-0 font-semibold">Your Email</span> </div>
                </form>
                <div className="mt-5 relative px-3"> <select className="h-16 cursor-pointer font-semibold w-full px-2 outline-none rounded-lg border-0">
                  <option className="bg-white hidden">Available</option>
                  <option>Not Available</option>
                  <option>Busy</option>
                  <option>Calls Only</option>
                </select> <span className="absolute left-5 text-gray-500 top-0 font-semibold">Status</span> </div>
                <div className="mt-10 h-16 px-3 bg-blue-700 flex justify-center items-center text-xl gap-16"> <i className="hover:text-yellow-500 cursor-pointer fa fa-comment-o" /> <i className="hover:text-yellow-500 cursor-pointer fa fa-user-o" /> <i className="hover:text-yellow-500 cursor-pointer fa fa-cog" /> </div>
              </div>
              <div className="right_side w-3/5 h-full bg-gray-200">
                <div className="h-20 bg-white flex items-center gap-4 "> <span className=" ml-3 h-12 w-12 flex overflow-hidden rounded-full ">
                  <Image

                    src={logo1}
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </span>
                  <p className="text-center text-2xl font-semibold">nDay Dev</p>
                </div>
                <div className="mt-4 px-3 flex items-center gap-3"> <span className="h-10 justify-center items-center text-sm rounded-tr-xl	rounded-tl-xl rounded-br-xl	w-52 flex bg-white">Hi, nDay how do you feel?</span>
                  <p className="text-sm font-semibold text-gray-800">10:00</p>
                </div>
                <div className="mt-4 px-3 flex justify-end items-center gap-3"> <span className="px-2 h-10 justify-center items-center text-sm rounded-tr-xl	rounded-tl-xl rounded-bl-xl w-96 flex bg-blue-600 text-white">Hi, ... i am OK but a bit bored! What about you?</span>
                  <p className="text-sm font-semibold text-gray-800">10:02</p>
                </div>
                <div className="mt-4 px-4 flex items-center gap-3"> <span className="px-2 h-10 justify-center items-center text-sm rounded-tr-xl	rounded-tl-xl rounded-br-xl	w-80 flex bg-white">I am trying to deal with my job in isolation.</span>
                  <p className="text-sm font-semibold text-gray-800">10:03</p>
                </div>
                <div className="mt-4 px-4 flex items-center gap-3"> <span className="px-2 h-10 justify-center items-center text-sm rounded-tr-xl	rounded-tl-xl rounded-br-xl	w-90 flex bg-white">You know I have got an interesting news for you.</span>
                  <p className="text-sm font-semibold text-gray-800">10:03</p>
                </div>
                <div className="mt-4 px-3 flex justify-end items-center gap-3"> <span className="px-2 h-10 justify-center items-center text-sm rounded-tr-xl	rounded-tl-xl rounded-bl-xl w-24 flex bg-blue-600 text-white">Hmmm</span>
                  <p className="text-sm font-semibold text-gray-800">10:04</p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mt-[52px] h-16 px-3 bg-white flex justify-center items-center gap-3 text-xl"> <i className="fa fa-smile-o" /> 
                  <input placeholder="Say something !" type="text" className="h-10 -mt-1 w-full text-sm px-2 outline-none rounded-lg border" name="message" />   <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >sent</button></div>
                </form>  

              </div>
            </div>
          </div>
        </div>


      </div>


    </>
  )
}
