"use client"
import Card from "@/components/Card";
import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import React, { useEffect, useState } from 'react'
export default function Home() {
  const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        },3000)
        return ()=> clearTimeout(timer)
    },[])
  return (
    <div className="">
      {loading ?(<Loader/>):(
        <div className="">
          <Hero/>
          <Features/>
          <Card/>
          <Cta/>
        </div>
      )}
        
        
        
    </div>
  );
}
