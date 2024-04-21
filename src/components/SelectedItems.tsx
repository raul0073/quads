import React from 'react'
import { CarouselDemo } from './Carousel'

function SelectedItems() {
  return (
    <section className="favs w-2/3 bg-white min-h-[60vh] my-[10vh] p-4 flex flex-col justify-center items-center mx-auto">
       <h2 className="cat text-2xl border-t border-amber-400 font-semibold text-right my-8">מבצעים חמים </h2>
        <div className="">
            <CarouselDemo />
        </div>
    </section>
  )
}

export default SelectedItems
