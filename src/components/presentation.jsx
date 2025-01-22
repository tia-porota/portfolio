import { useLang } from "../context/useLang";
export function Presentation() {
  const {T} = useLang()
  return (
    <main className="" id="presentation">
      <div className="flex items-center justify-around flex-wrap p-6 h-dvh">
        <span className="hater"> 
          <p className="presentation">Verónica Oviedo</p>
          <span className="inline-flex md">
          <p className="presentation sub typed">
            {T.title}
          </p>
          
          <p className="sub terminal ">_</p>
          
          </span>
          <span className="flex">
          <p>{T.presentation}</p>
          </span>
        </span>
        <span className="flex box-content ">
          <img className="max-w-60 rounded-full overflow-hidden" src={"avatar.png"} />
        </span>
      </div>
    </main>
  );
}
