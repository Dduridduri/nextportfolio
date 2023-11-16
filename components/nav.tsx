'use client'
import Link from "next/link"
import { useEffect,useState } from "react";
import Logo from 'public/images/120x50.png'
import Image from "next/image";
import { faUser, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavItem {
  link: string;
  name: string;
}

export default function Nav(){
  const deg = () => {
    const randomMultiplier = Math.floor(Math.random() * 14);
    return randomMultiplier * 360;
    // return Math.floor(Math.random() * 5000)
  };


  const icons = [faUser, faCode, faWindowMaximize];
  const [degree, setDegree] = useState(deg());
  // const [navData, setNavData] = useState<NavItem[]>([]);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<NavItem[]>([]);


  const updateDegree = () => {
    setDegree(deg());
  };
 

  
 useEffect(()=>{
   const fetchData = async () =>{
    try {
      // const data = await fetch('api/nav').then(res => res.json())
      const res = await fetch('/api/portfolio?type=nav');
      const data = await res.json();
      setMenuList(data.dataNav);

    } catch (error) {
      console.log(error)
    }
   }
   fetchData();
  },[])

  const toggleMenu = () =>{
    setMenuActive(!menuActive)

  }
  

  // 0에서 2000까지의 랜덤한 숫자를 생성합니다.
 
  

  
  return(
    <>
    <div className="w-full dark:border-b px-[2%] sticky top-0 bg-white py-2.5 z-50">
      <div className="max-w-7x1 mx-auto flex justify-between items-center">
        <Link href='/'>
          <h1>
            <Image width={120} height={50} src={Logo} alt="로고" title="로고" />
          </h1>
        </Link>
        <div className="basis-3/4 hidden md:block">
          <ul className="flex justify-around">
            {/* map은 새로운 배열을 반복(원본이 유지된다는뜻 foreach는 수정가능) */}
          {
          menuList.map((e,i)=>{
              return(           
              <li key={i} className="relative hover:font-bold after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-all after:duration-500 after:scale-x-0 hover:after:scale-x-100">
              <Link  href={e.link}>{e.name}</Link>
              </li>                     
              )
           })
          }            
          </ul>          
        </div>    
      </div>
    </div>
    <div className="fixed right-5 top-5 transition-all duration-500 z-50 cursor-pointer md:hidden" onClick={() =>{toggleMenu(); updateDegree();}}>
      <div style={{transform: menuActive ? `rotate(calc(${degree}deg + 45deg)) translateY(15px)` : ""}} className={`${menuActive ? ` transform translate-y-[10px] w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-1000` : "w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500"}`}></div>
      <div style={{transform: menuActive ? `rotate(${degree}deg)` : ""}} className={`${menuActive ? "opacity-0 -translate-x-8 w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500" : "w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500"}`}></div>
      <div style={{transform: menuActive ? `rotate(calc(-${degree}deg - 230deg)) translateY(15px)` : ""}} className={`${menuActive ? `-translate-y-[30px] w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500 `: "w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500"}`} ></div>
    </div>
    <div style={{transform: menuActive ? `rotate(${degree}deg)` : ""}} className={`${menuActive ?  `w-72 h-full fixed right-0 top-0 bg-gray-100 p-12 box-border transition-all duration-500 md:hidden` : `w-72 h-full fixed  top-0 bg-gray-100 p-12 box-border transition-all duration-500 md:hidden -right-72 z-[1000]`}`}>
      <div className="text-center mt-6">
      <Image src="https://via.placeholder.com/100" alt="100x100" title="100x100" width={100} height={100} className="mx-auto rounded-full mb-4" />
      <p>프론트엔드 개발자 이기운</p>
      </div>
      <ul className="mt-12">
          {
            menuList.map((e,i)=>{
              return(
                <li key={i} className="pt-5 pb-2 border-b hover:font-bold">
                  <FontAwesomeIcon className="mr-2" icon={icons[i]}/>
                  <Link href={e.link}>{e.name}</Link>
                </li>
              )
            })
          }
      </ul>
    </div>
 
    </>
  )
}