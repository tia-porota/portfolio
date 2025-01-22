import { FaCopy, FaLinkedin, FaGithub, FaEye } from "react-icons/fa";
import { useState, useRef } from "react";
import {useLang} from "../context/useLang"
export function Contact() {
  const inputRef = useRef(null);
    const [show,setShow] = useState(false);
    const {T} = useLang()
  return (
    <section id="contact">
      <h1>{T.contact}</h1>

      <div className="flex py-4 px-16 ">
        <span className="bg-neutral-500 rounded-l-md p-2 w-1/8 flex-grow">
          <p>@</p>
        </span>
        <span className="bg-neutral-600 h-full w-full">
          <input
            type="input"
            ref={inputRef}
            className="px-2 text-center h-full py-2 w-full outline -outline-offset-1  outline-rose-50 outline-1 text-neutral-50 bg-neutral-800"
            readOnly
            
            value={!show ? "************" : "veroviedo935@gmail.com"}
          />
        </span>
        <span onClick={()=>{
            if(show){
                inputRef.current.select();
                navigator.clipboard.writeText("veroviedo935@gmail.com")
                
            }
            setShow(true)}} className="hover:cursor-pointer flex w-1/8 p-2 bg-neutral-500 rounded-r-md items-center justify-center">
        {show ? <FaCopy /> : <FaEye />}
          
        </span>
      </div>
      <div className="flex justify-evenly px-16">
      <a href="https://linkedin.com/in/veronica-oviedo" target="_blank" className="bg-blue-600 p-2 rounded-md">
        
            
          <FaLinkedin />
          
        </a>
        <a href="https://github.com/tia-porota" target="_blank" className="bg-neutral-900 p-2 rounded-md">
          <FaGithub />
        </a>
        
      </div>
    </section>
  );
}
