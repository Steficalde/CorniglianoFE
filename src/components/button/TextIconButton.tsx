export default function TextIconButton({ text = '', icon = '' }) {
  return (
    <div className=" w-fit p-2 flex justify-between bg-transparent rounded-xl gap-2 duration-200 hover:scale-[105%] >">
      <div>
        <img src={icon} width={30} alt={text}></img>
      </div>
      <p className="text-[16px]">{text}</p>
    </div>
  )
}
