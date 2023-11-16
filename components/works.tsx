'use client';
import Image from 'next/image';
import React, {useState, useEffect} from 'react';

interface WorkItem{
  img:string;
  descTitle:string;
  desc: string;
  keyword: string[];
  color: string[];
  font: string;
  tools: string[];
  date: string;
  contribution: string;
  type: string;
  original ?:string;
  create:string;
  git: string;
}

export default function Works(){
  const [itemList, setItemList] =useState<WorkItem[]>([]);
  const menuArray = ["All", "Clone Coding","Team Project", "Web App"];
  const menuType = ["전체", "Clone", "Project", "webapp"];
  const [isAvtive, setIsActive] = useState<number>(0);
  const [category, setCategory] = useState<string>("전체");
  

  useEffect(()=>{
    const fetchData = async () =>{
     try {
       // const data = await fetch('api/nav').then(res => res.json())
       const res = await fetch('/api/portfolio?type=work');
       const data = await res.json();
       setItemList(data.dataWork)
       console.log(data)
     } catch (error) {
       console.log(error)
     }
    }
    fetchData();
   },[])
 
   const filterItem = category === "전체" ? itemList : itemList.filter(item => item.type === category);

  return(
    <>
      <div className="max-w-7xl mx-auto mt-8">
        <ul className="flex m-4 ml-0">
          {
            menuArray.map((e,i)=>{
              return(
                <li key={i} className={`${isAvtive === i ? 'bg-pink-400 text-white' : 'bg-white text-black'} mr-4 border dark:bg-[#272929] dark:text-[#ebf4f1]  py-2 px-5 rounded-md cursor-pointer`} onClick={()=>{setIsActive(i);setCategory(menuType[i]);}}>{e}</li>                
              )
            })
          }

        </ul>
          <div className="mt-8">
            {
              filterItem.map((e,i)=>{
                return(
                  <div key={i} className="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border flex-wrap">
                    <div className="basis-[48%] relative mokup-img group-even:order-1 xl:group-even:order-2 ">
                      <div>
                        <Image width={500} height={500} src='/images/mokup-1.png' alt='1' className='w-full '/>
                      </div>
                      <div>
                        <Image width={500} height={500} src='/images/mokup-2.png' alt='1' className='w-full '/>
                      </div>
                      <div>
                        <Image width={500} height={500} src='/images/mokup-3.png' alt='1' className='w-full '/>
                      </div>
                    </div>
                    <div className="basis-[52%] group-even:order-2 xl:group-even:order-1 pt-10">
                      <h3 className='text-2xl font-bold py-2.5 lg:pl-[50px]'>{e.descTitle}</h3>
                      <p className='text-base py-2.5 lg:pl-[50px]'>{e.desc}</p>
                      <p className='text-base py-2.5 lg:pl-[50px]'>키워드 : {e.keyword}</p>
                      <p className='text-base py-2.5 lg:pl-[50px]'>컬러 : {
                        e.color.map((el,idx)=>{
                          return(
                            <span key={idx} className='w-5 h-5 inline-block align-middle mr-2' style={{backgroundColor:el, marginLeft:"5px"}}></span>
                          )
                        })
                        }</p>
                        <p className='text-base py-2.5 lg:pl-[50px]'>폰트 : {e.font}</p>
                        <p className='text-base py-2.5 lg:pl-[50px]'>사용툴 : {e.tools}</p>
                        <p className='text-base py-2.5 lg:pl-[50px]'>작업기간 : {e.date}</p>
                        <p className='text-base py-2.5 lg:pl-[50px]'>기여도 : {e.contribution}</p>
                        <ul className='flex justify-center mt-6'>
                          <li className='py-1 px-8 border rounded-md text-sm mr-4'><a href={e.original} target="_blank" >original</a></li>
                          <li className='py-1 px-8 border rounded-md text-sm mr-4'><a href={e.create} target="_blank" >create</a></li>
                          <li className='py-1 px-8 border rounded-md text-sm'><a href={e.git} target="_blank" >git</a></li>
                        </ul>                        
                    </div>
                  </div>
                  
                )
              })
            }

          </div>
        </div>
    </>
  )
}