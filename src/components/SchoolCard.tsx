export default function SchoolCard({
  title = '',
  image = '',
  description = '',
}) {
  return (
    <div className="bg-white flex flex-col gap-2 w-[350px] h-[500px] p-5 rounded-xl">
      <div className="w-full">
        <img alt={title} src={image} className="w-full"></img>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center">{title}</h2>
        <div className="w-full flex justify-start">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
