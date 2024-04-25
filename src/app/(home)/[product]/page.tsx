'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { usePathname } from 'next/navigation'
import React from 'react'
import pic from '/public/pexels-osmor-5217983.jpg';
import pic2 from '/public/youth.jpg';
import pic3 from '/public/hero2.jpg';
import Image from 'next/image';

function Page() {
  const path = usePathname()

  return (
    <div className='min-h-[120vh] bg-neutral-400 w-full'>
        <section className="productPage w-full p-2 mx-auto pt-[15vh]">
          <h2 className="header uppercase text-left">
            {path}
          </h2>
          <div className="itemImg">
            <Card>
              <CardHeader className='p-0'>
                <Image
                src={pic}
                style={{width: '100%', height: '30vh'}}
                alt='product_img'
                className="rounded-t-lg"
                 />

            
                <CardDescription>פרטים</CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
          </div>
        </section>
    </div>
  )
}

export default Page
