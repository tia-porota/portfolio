export function SubCard({title="TITLE", desc="DESCRIPTION", tecn=[], link="https://github.com/tia-porota", ind}) {
  return (
    <a href={link} target="_blank" className="w-full h-full  ">
    <div className={`flex ${ind%2==0?"bg-neutral-500":"bg-neutral-600"} hover:bg-neutral-400 py-2 justify-center mx-8 items-center`}>
      
      <span className="w-1/4 flex px-2 justify-center">
      
        <p>{title}</p>
        
      </span>
      <span className="w-1/2 flex px-2">
        <p>{desc}</p>
      </span>
      <span className="w-1/4 flex px-2 items-center justify-around flex-wrap">
        {tecn.map((item,key)=>(<img key={key} src={`https://img.shields.io/badge/-242424?logo=${item}`}/>))}
        
      </span>
    </div>
    </a>
  );
}
