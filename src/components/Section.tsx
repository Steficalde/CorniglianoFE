import React from "react";
// @ts-ignore
export default function Section({ article, reverse = false }) {
  const reversed = reverse ? 'flex-row-reverse' : null
  return (
    <div className={'w-full flex justify-center items-center gap-24 h-[300px] ' + reversed}>
      <div>
        <img width={300} src={article.image} alt={article.title}></img>
      </div>

      <div className="flex flex-col justify-start items-center gap-5  p-5  w-[400px] h-full">
        <div className="w-2/3 border-2 border-red-500 "></div>
        <h2 className="font-bold text-left">{article.title}</h2>

        <div className="flex flex-col items-start justify-start ">
          {article.points.map((point:string, index:number) => (
            <li key={`experience-point-${index}`} className=" text-[14px] pl-1 tracking-wider ">
              {point}
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}
