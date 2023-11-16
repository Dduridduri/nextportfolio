'use client';
import React, {useState, useEffect} from 'react';

interface SkillItem{
  title:string;
  progressBefore:number;
  progressAfter:number;
  desc:string;
}

export default function Skills(){

  const [itemList, setItemList] =useState<SkillItem[]>([]);
  const [progressBar, setProgressBar] = useState<number>(0);


  useEffect(()=>{
    const fetchData = async () =>{
     try {
       // const data = await fetch('api/nav').then(res => res.json())
       const res = await fetch('/api/portfolio?type=skill');
       const data = await res.json();


       setItemList(data.dataSkill);
       console.log(data.dataSkill)

        setTimeout(()=>{
          setProgressBar(1);
         },500)

     } catch (error) {
       console.log(error)
     }
    }
    fetchData();
   },[])

  return(
    <>
    {
      itemList.map((e,i)=>{

        return(
          <div key={i} className='w-full h-20'>
            <div className='w-full h-5 bg-[#e0e0de] rounded-[50px]'>
              <div className='h-full bg-pink-300 duration-1000 ease-out rounded-[50px] text-right relative mb-3 first:mt-10' style={{width: progressBar && e.progressAfter +"%"  }}>
                <p className='absolute -top-6 md:-top-7 left-1 text-sm md:text-lg'>{e.title}</p>
              </div>
            </div>
            <p className='test-sm md:text-base mt-1'>{e.desc}</p>
          </div>

        )
      })
    }
    </>
  )
}