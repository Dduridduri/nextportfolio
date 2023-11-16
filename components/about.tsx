'use client';
import React, {useState, useEffect} from 'react';

interface AboutItem{
  title:string;
  desc?:string;
  desc2?:string;
  date?:string[];
  dateDesc?:string[];
  
}

export default function About(){

  const [itemList, setItemList] =useState<AboutItem[]>([]);

  useEffect(()=>{
    const fetchData = async () =>{
     try {
       // const data = await fetch('api/nav').then(res => res.json())
       const res = await fetch('/api/portfolio?type=about');
       const data = await res.json();
       setItemList(data.dataAbout);
       console.log(data)

     } catch (error) {
       console.log(error)
     }
    }
    fetchData();
   },[])

  return(
    <>
      {/* {
        itemList.map((e,i)=>{
            return(
              <>
              <div key={i} className='bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1] p-5 mb-8 last:mb-0'>
                <h3 className='text-base md:text-xl mb-4'>{e.title}</h3>
                {i === 0 && <p className='last:mb-0 md:text-base mb-2'>{e.desc}{e.desc2}</p>}
                {i === 1 &&
                <div className='flex'>
                  <p className='last:mb-0 md:text-base mb-2 whitespace-pre-line mr-4'>{e.date}</p>
                  <p className='last:mb-0 md:text-base mb-2 whitespace-pre-line'>{e.dateDesc}</p>
                </div>}
                {i === 2 && 
                <div className='flex'>
                  <p className='last:mb-0 md:text-base mb-2 whitespace-pre-line mr-4'>{e.date}</p>
                  <p className='last:mb-0 md:text-base mb-2 whitespace-pre-line '>{e.dateDesc}</p>
                </div>}
              </div>
              </>
            )
          })
      } */}
            {
        itemList.map((e,i)=>{
            return(
              <React.Fragment key={i}>
              <div className='bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1] p-5 mb-8 last:mb-0'>
                <h3 className='text-base md:text-xl mb-4'>{e.title}</h3>
                { e.desc && e.desc2 &&
                  <p className='last:mb-0 md:text-base mb-2'><span className='font-bold'>{e.desc}</span>{e.desc2}</p>
                }
                {
                  e.date && e.date.map((el,idx)=>{
                    return(
                      <p key={idx} className='last:mb-0 md:text-base mb-2 mr-4'>{el} : {e.dateDesc && e.dateDesc[idx]}</p>
                    )
                  })
                }
              </div>
              </React.Fragment>
            )
          })
      }
    </>
  )
}