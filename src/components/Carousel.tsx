import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import img1 from '/public/hero.jpg'
import img2 from '/public/hero2.jpg'
import img3 from '/public/pexels-osmor-5217983.jpg'
import Image from "next/image"

const images = [
    img1, img2, img2
]
export function CarouselDemo() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/3">

              <Card className="p-1">
                
                  <Image
                  src={img}
                  style={{width: '500px'}}
                  alt="img"
                  />
            
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
