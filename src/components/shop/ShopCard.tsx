// @ts-ignore
export default function ShopCard({ shop }) {
  const A = Math.floor(Math.random() * (10 + 1)) + -20
  const C = Math.floor(Math.random() * (10 + 1)) + -20

  const Decorators = () => {
    return (
      <div className="relative overflow-hidden">
        <div
          className={`decorator bg-red-500 right-[${A}px] top-[-10px]`}
        ></div>
        <div className={`decorator bg-blue-500 right-0 bottom-[-10px]`}></div>
        <div
          className={`decorator bg-pink-500 absolute left-[${A}px] bottom-[${C}px]`}
        ></div>
        <div className="w-full bg-white h-[200px] rounded-t-xl"></div>
      </div>
    )
  }
  return (
    <div className="w-[300px] max-sm:w-[90%] rounded-xl bg-white shadow-md  flex justify-center flex-col  opacity-100">
      <div className="p-2 ">
        <Decorators></Decorators>
        <div className="p-2">
          <h1 className="w-full text-lg uppercase font-bold text-blue-700 truncate  mt-2">
            {shop.user.name}
          </h1>
          <p className="w-full  mt-3 line-clamp-2">
            {shop.description /*.slice(0,50)*/}
          </p>
          <div className="w-full flex justify-end mt-5">
            <a className="italic text-blue-700">
              {shop.address || 'via gb morti'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
