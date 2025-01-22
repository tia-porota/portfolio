import { useState, useContext } from "react";
import { LangContext } from "../context/langContext";
import { useLang } from "../context/useLang";
import { FaBars } from "react-icons/fa";
export function Navbar() {
  const {T} = useLang()
  const { lang, langSwitch } = useContext(LangContext);
  return (
    <nav className="bg-neutral-700 fixed top-0 w-dvw h-14 shadow-lg">
      <div className="flex items-center h-full justify-evenly flex-row">
        <span className="h-full flex w-full justify-between px-4 items-center">
          <p>Oviedo Verónica</p>
          <span
            onClick={() => {
              if (lang == "en") {
                langSwitch("es");
              } else {
                langSwitch("en");
              }
            }}
            className="h-full hover:cursor-pointer hover:bg-neutral-400 bg-neutral-500 items-center flex w-1/2 md:w-1/4 justify-center"
          >
            <p className="px-4" >{lang == "en" ? "Español" : "English"}</p>
          </span>
        </span>
      
      <SmallB />

        <span
          id="items"
          className="hidden md:w-2/4 md:flex w-1/4 justify-evenly"
        >
          <a href="#presentation" className="hover:underline">
            {T.start}
          </a>
          <a href="#projects" className="hover:underline">
            {T.projects}
          </a>
          <a href="#skills" className="hover:underline">
            {T.skills}
          </a>
          <a href="#contact" className="hover:underline">
          {T.contact}
          </a>
        </span>
      </div>
    </nav>
  );
}

function SmallB(){
  const {T} = useLang()
  const [hide, setHide] = useState(false);
  return(
  <span className="md:hidden flex w-1/4">
    <button
      className="md:hidden flex absolute right-4 top-4"
      type="button"
      onClick={() => {
        setHide(!hide);
      }}
    >
      <FaBars />
    </button>
    <div
      className={`${
        hide ? "flex" : "hidden"
      } z-10  relative top-20 flex-grow w-full`}
    >
      <ul className="w-full">
        <a
          onClick={() => {
            setHide(false);
          }}
          href="#presentation"
        >
          <li className="bg-neutral-500 hover:bg-neutral-400 flex justify-center h-8">
            {T.start}
          </li>
        </a>
        <a
          onClick={() => {
            setHide(false);
          }}
          href="#projects"
        >
          <li className="bg-neutral-500 hover:bg-neutral-400 flex justify-center h-8">
            {T.projects}
          </li>
        </a>
        <a
          onClick={() => {
            setHide(false);
          }}
          href="#skills"
        >
          <li className="bg-neutral-500 hover:bg-neutral-400 flex justify-center h-8">
            {T.skills}
          </li>
        </a>
        <a
          onClick={() => {
            setHide(false);
          }}
          href="#contact"
        >
          <li className="bg-neutral-500 hover:bg-neutral-400 flex justify-center h-8">
            {T.contact}
          </li>
        </a>
      </ul>
    </div>
  </span>)
}