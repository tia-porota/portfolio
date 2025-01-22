import { useLang } from "../context/useLang";
export function PrCard({
  title = "TITLE",
  desc = "DESCRIPTION",
  img = "https://placehold.co/600x400?text=Placeholder",
  tecn = [],
  link = "http://github.com/tia-porota",
}) {
  const {T} = useLang()
  return (
    <div className="hover:outline-2 hover:outline card  flex flex-wrap max-w-80 lg:max-w-lg m-6 bg-neutral-50 rounded-md shadow-lg">
      <a href={link} target="_blank">
        <h2 className="mx-2">{title}</h2>
        <img src={img} />
        <div className="px-2">
          <p className="py-2">{desc}</p>
          <p>{T.repo}</p>
        </div>
        <span className="flex flex-wrap justify-center w-full">
          {tecn.map((item, key) => (
            <img
              className="m-1"
              src={`https://img.shields.io/badge/${item}-%2320232a.svg?style=for-the-badge&logo=${
                item == "react_native" ? "react" : item
              }`}
              key={key}
            />
          ))}
        </span>
      </a>
    </div>
  );
}
