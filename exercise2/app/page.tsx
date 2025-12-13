"use client"
import { Suspense } from "react";
import Counter from "./components/Counter";
import SlowComponents from "./components/SlowComponents";

 const Skeleton=()=>{
    return <div 
    className="w-full h-[200px] bg-green-400 animate-pulse"
    ></div>
 }
export default function Home() {
  return (
    <>
     <div>hellow </div>
 <Counter/>
 <Suspense fallback={<Skeleton/>}>
 <SlowComponents/>
 </Suspense>
    </>

  );
}
