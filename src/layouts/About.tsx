import { RefObject, useRef } from "react";
import { Card } from "../components/Card"
import { Navigation } from "../components/Navigation"
import { Bar } from "../components/Bar";
import { ProjectCard } from "../components/ProjectCard";


export const About = () => {
    const divRefs:RefObject<HTMLDivElement> = useRef({} as HTMLDivElement);

    return (
        <div className="w-screen h-screen bg-nightSky flex md:flex-row flex-col items-center justify-center md:gap-5 gap-10 py-5">
            <div className="md:mx-10 relative shadow-neon-blue rounded-3xl md:w-[30vw] w-[90vw] h-[80vh] sm:overflow-y-auto sm:scrollbar-hide bg-astronaut bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
                <div ref={divRefs} className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[80vh] overflow-y-auto scrollbar-hide">
                    <Navigation path={"about"}/>
                    <Card direction="col" margin="m-3" font={{color: "neonBlue", weight: "xl", style: "raleway"}}>
                        <h1 className="uppercase font-audioWide text-neonBlue my-2 text-3xl font-bold uppercase tracking-widest text-center drop-shadow-text-border2">
                            Work history
                        </h1>
                        <div className="font-mono drop-shadow-text-border text-black/70 my-2">
                            <div className="flex flex-col">
                                <div className="text-right text-sm font-bold">Mirae Climate</div>
                                <div className="flex flex-row justify-between text-sm my-3">
                                    <div>Software Engineer</div>
                                    <div>2021.01.~2023.05</div>
                                </div>
                                <div className="font-oxanium text-sm mt-2">
                                    Transformed raw numerical data into clear and insightful visualizations,<br/>
                                    developing <span className="text-neonBlue drop-shadow-text-border2">interactive charts and dashboards</span> to enhance <span className="text-neonBlue drop-shadow-text-border2">data-driven decision-making.</span><br/>
                                    Leveraged tools like <span>Plotly.js and D3.js</span> to improve user experience and facilitate complex data analysis

                                </div>
                                <div className="uppercase font-tiltNeon font-bold my-5 text-sm text-neonBlue drop-shadow-text-border2 tracking-widest">Projects</div>
                                <div className="flex flex-col font-tiltNeon text-sm gap-5">
                                    <ProjectCard title={"Kachems"} desc={"Developed a prototype site for visualizing new fine dust modeling. Built interactive, time-based data visualizations using Plotly and D3.js for clear and insightful analysis."} role={"software engineer"}></ProjectCard>
                                    <ProjectCard title={"Sijaq"} desc={"Developed a platform to aggregate and visualize fine dust modeling data, featuring a bulletin board, authentication, and file upload."} role={"software engineer"}></ProjectCard>
                                </div>
                            </div>
  
                        </div>
                    </Card>
                </div>                
            </div>
            <div className="relative shadow-neon-blue rounded-3xl md:w-[30vw] w-[90vw] h-[80vh] sm:overflow-y-auto sm:scrollbar-hide bg-hud bg-cover">
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
                            <span className="text-neonBlue drop-shadow-text-border2 text-xl"> 
                                <p className="pl-6 flex">React <Bar score={4}></Bar> </p> 
                                <p className="pl-6 flex">Angular <Bar score={5}></Bar></p>
                                <p className="pl-6 flex">Typescript <Bar score={4}></Bar></p>
                                <p className="pl-6 flex">Bulma <Bar score={5}></Bar></p>
                                <p className="pl-6 flex">JavaScript <Bar score={5}></Bar></p>
                                <p className="pl-6 flex">HTML <Bar score={4}></Bar></p>
                                <p className="pl-6 flex">CSS <Bar score={3}></Bar></p>
                            </span>
                        </div>
                        <div className="mt-10 font-mono text-xs p-2 border border-neonRed-400 text-red-300 bg-crimsonRed/50 rounded-md text-sm animate-pulse">
                            ⚠ WARNING: System requires continuous updates for optimal performance.
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}