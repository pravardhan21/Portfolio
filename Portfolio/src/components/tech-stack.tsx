import { H2 } from "@/components/ui/headers"
import { icons as Icon } from "@/lib/icons"

function TechStack() {
  return (
    <section className="py-8">
      <H2>Tech Stack</H2>
      <div className="grid grid-cols-5 outline outline-1 outline-slate-700 text-xl md:text-2xl">
        <div className="col-span-5 flex flex-wrap py-8 gap-8 outline outline-1 -outline-offset-4 outline-slate-700 px-4 items-center">
          <span>JAVA</span>
          <Icon.HTML />
          <Icon.CSS />
          <span>C</span>
          <Icon.Python />
        </div>
        <div className="col-span-5 md:col-span-3 flex flex-wrap py-8 gap-8 outline outline-1 -outline-offset-4 outline-slate-700 px-4 items-center">
          <Icon.Linux />
          <Icon.Git />
          <Icon.GitHub />
          <Icon.MongoDB />
        </div>
        <div className="col-span-5 md:col-span-2 flex flex-wrap py-8 gap-8 outline outline-1 -outline-offset-4 outline-slate-700 px-4 items-center">
          <Icon.VSCode />
          <Icon.Vercel />
          
        </div>
        <div className="col-span-5 flex flex-wrap py-8 gap-8 outline outline-1 -outline-offset-4 outline-slate-700 px-4 items-center">
          <Icon.React />
          <Icon.Tailwind />
          <Icon.NodeJs />
          <Icon.Express />
        </div>
      </div>
    </section>
  )
}

export default TechStack
