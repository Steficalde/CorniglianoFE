import ShopCard from "../components/shop/ShopCard";
import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Shop } from "../types/Shop";
import { SERVER_URL } from "../costants";
import GuestLayout from "../layouts/GuestLayout";

export default function Shops() {
  const [shops, setShops] = useState<Shop[] | undefined[]>([])
  const [cursor, setCursor] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [ended, setEnded] = useState(false)
  const infiniteScrollRef = useRef(null) // riferimento al componente InfiniteScroll
  const getData = async () => {
    if (!ended) {
      try {
        let param = cursor == null ? '' : '?cursor=' + cursor
        const data: any = await fetch(`${SERVER_URL}/shops${param}`, { cache: 'no-store' })
        const res = await data.json()
        if (res.data.length == 0) {
          setEnded(true)
          setHasMore(false)
        }
        setCursor(res.cursor)
        setShops((shops) => [...shops, ...res.data])
      } catch (e) {
        console.error(e)
      }
    }
  }

  useEffect(() => {
    const fill = () => {
      // @ts-ignore
      if (window.innerHeight > infiniteScrollRef.current.clientHeight) {
        getData()
      }
    }
    window.addEventListener('resize', fill)
    fill()
  }, [cursor])

  return (
    <GuestLayout>
      <div>
        <div className="w-full flex justify-center mt-20">
          <h1 className="text-[40px]">Tutti I Negozi</h1>
        </div>
        <div id="scroll" ref={infiniteScrollRef}>
          <InfiniteScroll
            dataLength={shops.length}
            next={() => getData()}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            className="w-full my-[50px] h-[100vh] grid grid-cols-3 max-lg:grid-cols-2  grid-flow-row gap-5 container-xl max-sm:flex max-sm:flex-col max-sm:items-center"
          >
            {shops.map((shop) => (
              <ShopCard shop={shop} key={shop?.id}></ShopCard>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </GuestLayout>
  )
}
