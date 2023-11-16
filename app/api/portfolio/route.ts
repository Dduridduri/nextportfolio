import { NextRequest, NextResponse } from "next/server";

interface AboutItem{
  title:string;
  desc?:string;
  desc2?:string;
  date?:string[];
  dateDesc?:string[];
  
}

interface SkillItem{
  title:string;
  progressBefore:number;
  progressAfter:number;
  desc:string;
}

interface NavItem{
  name:string,
  link:string
}

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


export const GET = async (req: NextRequest, res:NextResponse) => {

  const type = req.nextUrl.searchParams.get("type");

  switch(type){
    case 'about':
     const dataAbout: AboutItem[] = [
      {
        title:"◆ MIND",
        desc:"혼자 부딪혀봐야 온전히 내것이 된다",
        desc2:"는 마인드를 가지고있어, 혼자 찾아보고 고민하여 문제 해결하는 것을 좋아합니다.",
      },
      {
        title:"◆ EDUCATION",
        date:[
          "2023.06.29 ~ 2023.11.30\n",
          "2023.06.29 ~ 2023.11.30\n",
          "2023.06.29 ~ 2023.11.30\n",
          "2023.06.29 ~ 2023.11.30\n",
        ],
        dateDesc: [
          "(혼합+디지털컨버전스) React를 활용한 프론트엔드 개발자 양성 (SPA 프로젝트 개발) A\n",
          "설명2\n", 
          "설명3\n", 
          "설명4\n", 
        ]
      },
      {
        title:"◆ LICENSE",
        date:[
          "2023.06\n",
          "2023.06\n",
          "2023.06\n",
        ],
        dateDesc: [
          "자격증1\n",
          "자격증3\n",
          "자격증2\n",         
        ]
      }
  
    ]
    return NextResponse.json({dataAbout});

    case 'nav': 
    const dataNav: NavItem[] = [
      {
        name:"소개",
        link:"/about",
      },
      {
        name:"스킬",
        link:"/skill",
      },
      {
        name:"포트폴리오",
        link:"/work",
      },
  
    ]
    return NextResponse.json({dataNav});
    
    case 'skill':
      const dataSkill: SkillItem[] = [
        {
          title:"html",
          progressBefore:0,
          progressAfter:90,
          desc:"웹표준에 준수하여, 마크업을 할 수 있으며, flex or grid를 활용하여 레이아웃 구성을 할 수 있다.",
        },
        {
          title:"css",
          progressBefore:0,
          progressAfter:80,
          desc:"마크업에 작성된 class를 토대로, 디자인을 할 수 있다.",
        },
        {
          title:"JS",
          progressBefore:0,
          progressAfter:70,
          desc:"웹 페이지 내 동적인 기능을 구현, 서버의 데이터를 수신해 가공할 수 있다.",
        },
        {
          title:"REACT",
          progressBefore:0,
          progressAfter:50,
          desc:"REACT를 활용하여, SPA 사이트를 제작할 수 있다. REDUX, ROUTER DOM 등 다양한 라이브러리 활용을 할 수 있다.",
        },
        {
          title:"NEXTJS",
          progressBefore:0,
          progressAfter:50,
          desc:"REACT 프레임 워크 NEXTJS를 활용하여 SSR사이트 제작을 할 수 있다.",
        },
    
    
      ]
      return NextResponse.json({dataSkill});

    case 'work':
       const dataWork: WorkItem[] = [
      {
        img:"https://via.placeholder.comm/500",
        descTitle:"xxxx 사이트 클론코딩",
        desc: "xxx 사이트 클론코딩",
        keyword:["#심플", "#깔끔", "#반응형","#광기"],
        color:["pink", "orangered", "skyblue"],
        font:"Noto Sans KR",
        tools: ["Figma", "VS CODE", "GIT"],
        date: "5일",
        contribution: "100%",
        type: "Clone",
        original:"https://www.subway.co.kr",
        create:"https://www.naver.com",
        git: "https://www.github.com",
      },
      {
        img:"https://via.placeholder.comm/500",
        descTitle:"xxxx 사이트 팀프로젝트",
        desc: "xxx 사이트 팀프로젝트",
        keyword:["#심플", "#깔끔", "#반응형","#광기"],
        color:["pink", "orangered", "skyblue"],
        font:"Noto Sans KR",
        tools: ["Figma", "VS CODE", "GIT"],
        date: "5일",
        contribution: "100%",
        type: "Project",
        original:"https://www.subway.co.kr",
        create:"https://www.naver.com",
        git: "https://www.github.com",
      },
      {
        img:"https://via.placeholder.comm/500",
        descTitle:"xxxx 사이트 팀프로젝트",
        desc: "xxx 사이트 팀프로젝트",
        keyword:["#심플", "#깔끔", "#반응형","#광기"],
        color:["pink", "orangered", "skyblue"],
        font:"Noto Sans KR",
        tools: ["Figma", "VS CODE", "GIT"],
        date: "5일",
        contribution: "100%",
        type: "Project",
        original:"https://www.subway.co.kr",
        create:"https://www.naver.com",
        git: "https://www.github.com",
      },
      {
        img:"https://via.placeholder.comm/500",
        descTitle:"xxxx 사이트 클론코딩",
        desc: "xxx 사이트 클론코딩",
        keyword:["#심플", "#깔끔", "#반응형"],
        color:["pink", "orangered", "skyblue"],
        font:"Noto Sans KR",
        tools: ["Figma", "VS CODE", "GIT"],
        date: "5일",
        contribution: "100%",
        type: "Clone",
        original:"https://www.subway.co.kr",
        create:"https://www.naver.com",
        git: "https://www.github.com",
      },
      {
        img:"https://via.placeholder.comm/500",
        descTitle:"xxxx 사이트 클론코딩",
        desc: "xxx 사이트 클론코딩",
        keyword:["#심플", "#깔끔", "#반응형"],
        color:["pink", "orangered", "skyblue"],
        font:"Noto Sans KR",
        tools: ["Figma", "VS CODE", "GIT"],
        date: "5일",
        contribution: "100%",
        type: "Clone",
        original:"https://www.subway.co.kr",
        create:"https://www.naver.com",
        git: "https://www.github.com",
      },
      {
        img:"https://via.placeholder.comm/500",
        descTitle:"xxxx 사이트 웹앱",
        desc: "xxx 사이트 웹앱",
        keyword:["#심플", "#깔끔", "#반응형"],
        color:["pink", "orangered", "skyblue"],
        font:"Noto Sans KR",
        tools: ["Figma", "VS CODE", "GIT"],
        date: "5일",
        contribution: "100%",
        type: "webapp",
        original:"https://www.subway.co.kr",
        create:"https://www.naver.com",
        git: "https://www.github.com",
      },
      {
        img:"https://via.placeholder.comm/500",
        descTitle:"xxxx 사이트 웹앱",
        desc: "xxx 사이트 웹앱",
        keyword:["#심플", "#깔끔", "#반응형"],
        color:["pink", "orangered", "skyblue"],
        font:"Noto Sans KR",
        tools: ["Figma", "VS CODE", "GIT"],
        date: "5일",
        contribution: "100%",
        type: "webapp",
        original:"https://www.subway.co.kr",
        create:"https://www.naver.com",
        git: "https://www.github.com",
      },
      {
        img:"https://via.placeholder.comm/500",
        descTitle:"xxxx 사이트 팀프로젝트",
        desc: "xxx 사이트 팀프로젝트",
        keyword:["#심플", "#깔끔", "#반응형"],
        color:["pink", "orangered", "skyblue"],
        font:"Noto Sans KR",
        tools: ["Figma", "VS CODE", "GIT"],
        date: "5일",
        contribution: "100%",
        type: "Project",
        original:"https://www.subway.co.kr",
        create:"https://www.naver.com",
        git: "https://www.github.com",
      },
      {
        img:"https://via.placeholder.comm/500",
        descTitle:"xxxx 사이트 웹앱",
        desc: "xxx 사이트 웹앱",
        keyword:["#심플", "#깔끔", "#반응형"],
        color:["pink", "orangered", "skyblue"],
        font:"Noto Sans KR",
        tools: ["Figma", "VS CODE", "GIT"],
        date: "5일",
        contribution: "100%",
        type: "webapp",
        original:"https://www.subway.co.kr",
        create:"https://www.naver.com",
        git: "https://www.github.com",
      },
     
    ]
    return NextResponse.json({dataWork});

    default : 
     return NextResponse.json({error: "파라미터가 에러 발생"})
  }

}