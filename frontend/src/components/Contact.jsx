import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"

function Contact() {
  return (
    <div className="pt-20 min-h-screen">
        <div className="flex min-h-[40vh] flex-col sm:flex-row sm:items-end sm:justify-between px-[2%] py-3">
            <div className="flex flex-col gap-4 md:max-w-[60%]">
              <Badge title={"Contact Us"}/>
              <h1 className="text-6xl font-bold leading-20">Start your AI transformation today!</h1>
            </div>
            <div className="md:max-w-[30%]">
                <p className="text-[1rem] opacity-70">Build a reliable, scalable, and secure solution that transforms interactions into opportunities for growth.</p>
            </div>
        </div>

        <hr className="my-8"/>

        <div className="flex flex-col md:flex-row gap-3">
            <div className="md:max-w-[60%]">
                
            </div>
            <Separator orientation="vertical" className={"hidden md:block"}/>
            <div className="md:max-w-[40%]">

            </div>
        </div>
    </div>
  )
}

export default Contact