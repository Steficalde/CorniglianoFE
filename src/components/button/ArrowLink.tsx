import arrow from "../../assets/images/down-arrow.png";
import warrow from "../../assets/images/w-down-arrow.png";

export default function ArrowLink({ dark = false }) {
  const src_img = dark ? arrow : warrow
  const white = dark ? null : 'text-white'
  return (
    <div
      className={
        'flex flex-col items-center animate-bounce hover:cursor-pointer ' +
        white
      }
    >
      Scopri di più
      <img src={src_img} width={50} alt={'scorri'} />
    </div>
  )
}
