

import { motion } from "framer-motion";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import toast from "react-hot-toast";

export default function ContactForm() {



  // Explicitly typing the ref
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_hgc1qto", "template_5yowsno", form.current, {
          publicKey: "gNJPX-wgqHkkqtiWB",
        })
        .then(
          () => {
            toast.success("Email sent successfully")
            form.current?.reset(); // Clear all fields
          },
          (error) => {



          }
        );
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen ">

      <form className="flex flex-col w-full sm:p-[5em] my-auto mt-[9em] mb-[3em] " ref={form} onSubmit={sendEmail}>
            
        <motion.p
          className=" text-center text-[#333] font-inter-tight text-[1rem] font-semibold transition-all duration-1000 ease-in-out"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0, ease: "easeInOut" },
            },
          }}
        >
            Send a Message
        </motion.p>
  
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-[1em] mt-4">
          <div className="flex flex-col flex-1">
            <motion.input
              name="from_name"
              type="text"
              className="w-full outline-none border-b-2 border-[rgba(16,34,29,0.60)] py-[1em] text-[rgba(16,34,29,0.60)] font-inter-tight text-[0.9375rem] not-italic font-normal transition-all duration-1000 ease-in-out"
              placeholder="Your Name"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" },
                },
              }}
              required
            />
          </div>
  
          <div className="flex flex-col flex-1 mt-[2em] sm:mt-[0em]">
            <motion.input
              type="email"
              name="user_email"
              className="w-full outline-none border-b-2 border-[rgba(16,34,29,0.60)] py-[1em] text-[rgba(16,34,29,0.60)] font-inter-tight text-[0.9375rem] not-italic font-normal transition-all duration-1000 ease-in-out"
              placeholder="Your Email"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" },
                },
              }}
              required
            />
          </div>
        </div>
  
        <motion.textarea
          name="message"
          id=""
          className="outline-none border-b-2 border-[rgba(16,34,29,0.60)] pt-[1em] pb-[4em] mt-4 text-[rgba(16,34,29,0.60)] font-inter-tight text-[0.9375rem] not-italic font-normal resize-none transition-all duration-1000 ease-in-out"
          placeholder="Message"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0, ease: "easeInOut" },
            },
          }}

          required
        ></motion.textarea>


        <motion.div className="flex flex-col transition-all duration-1000 ease-in-out items-center justify-center flex-grow"


          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
            },
          }}



        >


          <div className="flex items-center justify-center mt-[2em]  transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">


            <button className="flex items-center gap-[0.75em] bg-[#030712] py-[0.75em] px-[1.25em] rounded-[6.25em] cursor-pointer" type="submit" >
              
              
  
              <p className="text-white font-inter-tight  not-italic font-semibold text-[1rem] ">Message</p>
      
              <img src="/home-header-arrow.svg" alt="" />
      
      
      
            </button >
          </div>
        </motion.div>


      </form>
    </div>
  );
}
  