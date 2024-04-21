import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { GrGoogle } from 'react-icons/gr'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

function FooterInfo() {
  return (
    <section className="footerInfo w-full bg-black h-[55vh] items-center flex">
        <div className="content py-12 p-8 text-white">
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <p>מחירים זולים שלמו עכשיו</p>
        <div className="social flex justify-evenly items-center my-[10vh]">
            <GrGoogle color='orange'/>
            <BsWhatsapp color='orange' />
            <BsInstagram color='orange' />
        </div>
        </div>
       
    </section>
  )
}

export default FooterInfo
