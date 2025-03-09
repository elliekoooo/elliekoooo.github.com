import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../components/Card";
import { faBlogger, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const OverView = () => {

    return (
      <>
        <div className="h-screen w-[100vw] bg-hud4 bg-cover flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
          <div className="relative w-[100vw] h-[100vh] md:overflow-hidden bg-cover">
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[100vh]">
              <Card animation={"warp"} direction="col" margin="mx-auto my-auto" font={{color: "neonBlue", weight: "sm", style: "raleway"}}>
                <div className="flex flex-row items-center justify-center my-5">
                  <div className="w-16 h-16 rounded-full border-2 border-neonBlue shadow-[0_0_10px_#00FFFF] overflow-hidden">
                    <img src="/images/profile.png" alt="Agent" className="w-full h-full object-cover" />
                  </div>
                  <div className="mx-5 text-2xl font-bold tracking-widest text-neonBlue font-audioWide drop-shadow-text-border2 animate-twingkle">ELLIE KOO</div>
                </div>
                <div className="flex flex-row">
                  <p className="text-sm hidden md:block text-white/60 md:mt-2 font-vt323 mr-auto uppercase text-crimsonRed">[ CLASSIFIED PERSONNEL ]</p>
                  <p className="text-sm text-white/60 md:mt-2 font-vt323 ml-auto uppercase">[ From: <span className="text-neonGreen">Seoul, Korea</span> | Status: <span className="animate-pulse text-neonGreen">🟢 Online</span>  ]</p>
                </div>
                <div className="font-raleway text-white/60 w-full flex flex-col mt-4 p-2 border border-neonBlue rounded-lg shadow-[0_0_10px_#00FFFF] bg-black/30">
                  <span className="text-xl my-3 ml-5">
                    <span className="text-neonBlue text-xl font-bold drop-shadow-text-border animate-twingkle">A goal-oriented, collaborative, frontend-focused</span> web developer.
                  </span>
                  <span className="text-xl my-1 ml-5">I specialize in 
                    <span className="text-neonBlue text-xl font-bold drop-shadow-text-border mx-3">React, Angular and TypeScript </span>
                    with a focus on <span className="underline decoration-sky-500">writing efficient, maintainable code.</span>
                  </span>
                  <span className="text-xl my-5 ml-5">Once I start a task, I dive in completely and finish it as efficiently as possible.</span>   
                </div>
                <div className="text-right mt-5">
                        <a href="https://github.com/elliekoooo" className="text-4xl text-black hover:text-neonBlue mx-1" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </a>
                        <a href="https://medium.com/@elliekoooo" className="text-4xl text-black hover:text-neonBlue mx-1" target="_blank">
                            <FontAwesomeIcon icon={faBlogger} />
                        </a>
                        <a href="mailto:elliekoooo@gmail.com" className="text-4xl text-black hover:text-neonBlue mx-1" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} size="sm" />
                        </a>
                </div>
              </Card>        
            </div>
          </div>
      </div>
      </>
    )

};