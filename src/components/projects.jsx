import {useLang} from "../context/useLang"
import { PrCard } from "./mainPrCard";
export function Projects() {
  const {T, proj} = useLang()
  return (
    <section id="projects">
      <h1 className="flex justify-center">{T.mProj}</h1>
      <div className="flex flex-wrap flex-row justify-center items-center ">
        {/*<PrCard
          title="Serendipia"
          img={
            "https://raw.githubusercontent.com/tia-porota/serendipia/refs/heads/main/screenshots/seren1.png"
          }
          link="https://github.com/tia-porota/serendipia"
          tecn={["react_native", "Express", "TailwindCSS", "MongoDB"]}
          desc="An app to have anonymous conversations with strangers securely, in Serendipia, no one knows who you are.
Users, Groups and Messages are deleted automatically after certain time."
        />*/}

        {proj.map((item,key)=>(
          <PrCard key={key} title={item.title} desc={item.desc} tecn={item.tech} link={item.link} img={item.img}  />  
        ))}
      </div>
    </section>
  );
}
