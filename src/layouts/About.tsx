import { RefObject, useRef } from "react";
import { Card } from "../components/Card"
import { Navigation } from "../components/Navigation"
import { ScrollButton } from "../components/ScrollButton";
import { faLongArrowAltDown, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
    const skills:string[] = ["Javascript", "Typescript", "Github", "Angular", "React", "Java", "HTML", "CSS", "Spring Boot"];
    const divRefs:RefObject<HTMLDivElement> = useRef({} as HTMLDivElement);

    return (
        <div className="w-screen h-screen bg-nightSky flex md:flex-row flex-col items-center justify-center md:gap-5 gap-10">
            <div className="relative shadow-neon-blue rounded-3xl md:w-[30vw] w-[90vw] h-[80vh] overflow-hidden bg-astronaut bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
                <div ref={divRefs} className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[80vh] overflow-y-auto scrollbar-hide">
                    <Navigation path={"about"}/>
                    <Card direction="col" margin="m-3" font={{color: "neonBlue", weight: "xl", style: "raleway"}}>
                        <h1 className="font-audioWide text-3xl font-bold uppercase tracking-widest text-center">
                            Profile Summary
                        </h1>
                        <div className="font-raleway text-xl text-white/80 my-2">
                            <p className="my-2">Committed to clean, maintainable code. Implements responsive designs and optimizes web app performance.</p>
                            <p className="my-2">Creates efficient, scalable solutions aligned with project goals.</p>
                            <p className="my-2">Thrives in team environments. Leads projects through open communication and collaboration.</p>
                            <p className="my-2">Contributes to code reviews, brainstorming, and knowledge sharing. Stays current with frontend technologies. Seeks innovative ways to enhance UX, project quality, and functionality.</p>
                        </div>
                    </Card>
                </div>                
            </div>
            <div className={"m-0 p-0"}>
                <ScrollButton icon={faLongArrowAltUp } divRefs={divRefs} direction={"up"}></ScrollButton>
                <ScrollButton icon={faLongArrowAltDown} divRefs={divRefs} direction={"down"}></ScrollButton>
            </div>
            <div className="relative shadow-neon-blue rounded-3xl md:w-[30vw] w-[90vw] h-[80vh] overflow-hidden bg-hud bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine2"></div>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[90vh]">
                    <Card direction="col" margin="mx-auto mt-5" font={{color: "neonBlue", weight: "xl", style: "raleway"}}>
                        <h1 className="font-audioWide text-neonBlue my-2 text-3xl font-bold uppercase tracking-widest text-center">
                            MY SKILLS
                        </h1>
                        <div className="flex flex-col">
                            {
                                skills.map((skill:string, index:number)=> (
                                    <span key={index} className="font-oxanium uppercase min-w-xs my-2 p-2 text-sm border border-neonBlue bg-white/20 text-white text-bold rounded-xl text-center mx-2">{ skill }</span>
                                ))
                            }
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}