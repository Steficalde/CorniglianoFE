// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


// @ts-ignore
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="hover:scale-[101%] duration-200 "
      contentStyle={{
        background: '#fff',
        color: '000000',
        boxShadow: '0 0 7px 1px #002EB033',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full hover:animate-spin">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className=" text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point:string, index:number) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider ">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

// @ts-ignore
export const TimeLine = ({ experiences, title,idTl="" }) => {
  return (
    <div className="py-20 max-md:py-5" id={idTl}>
      <div className=" flex justify-center flex-col items-center">
        <h1 className=" text-center">{title}</h1>
      </div>

      <div className="my-20  flex flex-col tl-class opacity-100">
        <VerticalTimeline>
          {experiences.map((experience:object, index:number) => (
            <ExperienceCard key={`experience-point-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}
