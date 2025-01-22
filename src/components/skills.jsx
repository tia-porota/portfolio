import {useLang} from "../context/useLang"
export function Skills() {
  const mySkills=["HTML5","CSS3","JavaScript","Python","React","Express","Node.js","Tailwind-CSS","Linux","Arduino","Docker","Git"]
  const {T} = useLang()
  return (
    <section id="skills">
      <h1>{T.skills}</h1>
      <div className="px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4">
        {mySkills.map((item,key)=>(<Skill name={item} key={key} />))}
        
      </div>

    </section>
  );
}

function Skill({name,img=name}) {
  return (
    <div className="bg-neutral-700 flex rounded-md  ">
      <span className="bg-neutral-600 px-2 text-center flex w-3/4 rounded-l-md justify-center items-center">
        <p className="skillTitle font-mono">{name}</p>
      </span>
      <span className="w-1/4 mx-2 p-2 flex justify-center items-center">
        <img className="h-16" src={`https://icon.icepanel.io/Technology/svg/${img}.svg`}/>

      </span>
    </div>
  );
}
