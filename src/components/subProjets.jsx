/*
TODO:
project(s) json
skills
contact
update presentation


CV
 */

import { SubCard } from "./mainSubCard";
import {useLang} from "../context/useLang"
export function SubProjects() {
  const {T, sub} = useLang()
  return (
    <section>
        <h1 className="flex justify-center">{T.sProj}</h1>
      <ul>
      <div className="flex bg-neutral-700 py-2 justify-center mx-8 rounded-t-md items-center">
      <span className="w-1/4 flex justify-center">
        <p>{T.litTitle}</p>
      </span>
      <span className="w-1/2 flex justify-center">
        <p>{T.desc}</p>
      </span>
      <span className="w-1/4 flex justify-center">
        <p>{T.tech}</p>
      </span>
    </div>
        
        
        {sub.map((item,key)=>(
          <SubCard ind={key} key={key} title={item.title} link={item.link} desc={item.desc} tecn={item.tech} />
        ))}

      </ul>
    </section>
  );
}
