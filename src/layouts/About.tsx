import { RefObject, useRef } from "react";
import { Card } from "../components/Card"
import { Navigation } from "../components/Navigation"
import { ScrollButton } from "../components/ScrollButton";
import { faLongArrowAltDown, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { Bar } from "../components/Bar";



export const About = () => {
    const skills:string[] = ["Javascript", "Typescript", "Github", "Angular", "React", "Java", "HTML", "CSS", "Spring Boot"];
    const divRefs:RefObject<HTMLDivElement> = useRef({} as HTMLDivElement);

    return (
        <div className="w-screen h-screen bg-nightSky flex md:flex-row flex-col items-center justify-center md:gap-5 gap-10">
            <div className="md:mx-10 relative shadow-neon-blue rounded-3xl md:w-[30vw] w-[90vw] h-[80vh] overflow-hidden bg-astronaut bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
                <div ref={divRefs} className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[80vh] overflow-y-auto scrollbar-hide">
                    <Navigation path={"about"}/>
                    <Card direction="col" margin="m-3" font={{color: "neonBlue", weight: "xl", style: "raleway"}}>
                        <h1 className="font-audioWide text-3xl font-bold uppercase tracking-widest text-center drop-shadow-text-border2">
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
            <div className="flex flex-col">
                <div className="relative shadow-neon-blue rounded-3xl md:w-[30vw] w-[90vw] h-[80vh] overflow-hidden bg-hud bg-cover">
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine2"></div>
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[80vh] overflow-y-auto scrollbar-hide">
                        <Card direction="col" margin="m-3" font={{color: "neonBlue", weight: "xl", style: "raleway"}}>
                            <h1 className="uppercase font-audioWide text-neonBlue my-2 text-3xl font-bold uppercase tracking-widest text-center drop-shadow-text-border2">
                                Skill Report
                            </h1>
                            <div className="my-1 font-mono text-sm uppercase">
                                <span className="text-neonBlue drop-shadow-text-border2">System Log:</span> 
                                <span className="text-black/50"> Skill assessment initialized...</span> 
                            </div>
                            <div className="my-1 font-mono text-sm uppercase">
                                <span className="text-neonBlue drop-shadow-text-border2">Module:</span> 
                                <span className="text-black/50"> Frontend Development</span>
                            </div>
                            <div className="my-1 font-mono text-sm uppercase">
                                <span className="text-neonBlue drop-shadow-text-border2">Status:</span> <span className="animate-pulse text-neonGreen">🟢 Active</span>
                            </div>
                            <div className="my-1 font-mono text-sm uppercase">
                                <span className="text-neonBlue drop-shadow-text-border2">Stack:</span> 
                                <span className="text-neonBlue text-xl"> 
                                    <p className="pl-6 flex">React <Bar score={7}></Bar> </p> 
                                    <p className="pl-6 flex">Angular <Bar score={9}></Bar></p>
                                    <p className="pl-6 flex">Typescript <Bar score={6}></Bar></p>
                                    <p className="pl-6 flex">Bulma <Bar score={9}></Bar></p>
                                    <p className="pl-6 flex">JavaScript <Bar score={8}></Bar></p>
                                    <p className="pl-6 flex">HTML <Bar score={10}></Bar></p>
                                    <p className="pl-6 flex">CSS <Bar score={5}></Bar></p>
                                </span>
                            </div>
                            <div className="mt-4 font-mono text-sm p-2 border border-neonRed-400 text-red-300 bg-crimsonRed/50 rounded-md text-sm animate-driftIn">
                                ⚠ WARNING: System requires continuous updates for optimal performance.
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}