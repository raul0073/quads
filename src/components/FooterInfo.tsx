import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { GrGoogle } from 'react-icons/gr'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import './root/styles/footer.scss'
function FooterInfo() {
  return (
    <section className="relative footerInfo w-full bg-black h-[60vh] items-center flex">
        <div className=" content p-8 text-white w-2/3 flex justify-start flex-col">
          <div className="text my-12">
          <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
          </div>
        <div className="social flex justify-evenly items-center">
            <GrGoogle color='orange'/>
            <BsWhatsapp color='orange' />
            <BsInstagram color='orange' />
        </div>
        </div>
       
    </section>
  )
}

export default FooterInfo
