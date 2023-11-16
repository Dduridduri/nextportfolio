import Skills from '@/components/skills'


export default function Skill(){
  return (
    <>
    <div className="w-full pt-12 mt-16 px-[2%] pb-8">
      <div className="max-w-7xl mx-auto p-5 bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1]">
        <h3 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl">스킬</h3>
      </div>
      <div className="max-w-7xl mx-auto mt-8">
        <div className="rounded-md bg-white dark:bg-[#272929] dark:text-[#ebf4f1] p-5 mb-8 last:mb-0 border">
          {
            <Skills/>
          }
        </div>
      </div>
    </div>
    </>
  )
}