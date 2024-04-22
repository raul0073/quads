"use client";
 
import pic from './../../public/pexels-osmor-5217983.jpg';
import pic2 from './../../public/youth.jpg';
import pic3 from './../../public/hero2.jpg';
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { Button } from './ui/button';

export function AdultATVCard() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="h-[20rem]  relative  flex items-center justify-center ">
      <DirectionAwareHover imageUrl={pic as unknown as string} className='w-[320px]'>
      <Button variant={'link'} className="font-bold text-xl text-white">צעצועים למבוגרים  </Button>
        <p className="font-normal text-sm text-muted">YAMHAA, SAMSUNG </p>
      </DirectionAwareHover>
    </div>
  );
}
export function YouthATVCard() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="h-[20rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={pic2 as unknown as string} className='w-[320px]'>
        <p className="font-bold text-xl">צעצועים לילדים</p>
        <p className="font-normal text-sm">4,999₪</p>
      </DirectionAwareHover>
    </div>
  );
}
export function AccessoriesCard() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="h-[20rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={pic3 as unknown as string} className='w-[320px]'>
        <p className="font-bold text-xl">חלפים </p>
        <p className="font-normal text-sm">כולל הרכבה</p>
      </DirectionAwareHover>
    </div>
  );
}