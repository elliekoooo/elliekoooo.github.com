import { Card } from "../components/Card";
import { Navigation } from "../components/Navigation";


export const OverView = () => {

    return (
        <div className="w-screen h-screen bg-nightSky flex flex-col items-center justify-center">
          <div className="relative shadow-neon-blue rounded-full w-[80vw] h-[90vh] overflow-hidden bg-earth bg-cover">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] h-[90vh]">
              <Navigation path={"overview"}/>   
              <Card animation={"fadeInScale"} direction="col" margin="mx-auto my-auto" font={{color: "neonBlue", weight: "sm", style: "raleway"}}>
                <div className="flex flex-row items-center justify-center my-5">
                  <div className="w-16 h-16 rounded-full border-2 border-neonBlue shadow-[0_0_10px_#00FFFF] overflow-hidden">
                    <img src="/images/profile.png" alt="Agent" className="w-full h-full object-cover" />
                  </div>
                  <div className="mx-5 text-2xl font-bold tracking-widest text-neonBlue font-audioWide drop-shadow-text-border2 animate-twingkle">ELLIE KOO</div>
                </div>
                <div className="flex flex-row">
                  <p className="text-sm text-white/60 mt-2 font-vt323 mr-auto uppercase">[ CLASSIFIED PERSONNEL ]</p>
                  <p className="text-sm text-white/60 mt-2 font-vt323 ml-auto uppercase">[ From: Seoul, Korea | Status: Online ]</p>
                </div>
                <div className="font-oxanium text-white/60 w-full flex flex-col mt-4 p-2 border border-neonBlue rounded-lg shadow-[0_0_10px_#00FFFF] bg-black/30">
                  <span className="text-xl my-3 mx-5">A goal-oriented, collaborative,<br/>
                    <span className="text-neonBlue text-xl font-bold drop-shadow-text-border animate-twingkle">frontend-focused</span> web developer.</span>
                  <span className="text-sm my-1 mx-5">I specialize in 
                    <span className="text-neonBlue text-xl font-bold drop-shadow-text-border mx-3">React, Angular and TypeScript</span>
                    with a focus on writing efficient, maintainable code.
                  </span>
                  <span className="text-sm my-1 mx-5">I enjoy collaborating to find better solutions through continuous communication.</span>   
                </div>
              </Card>        
            </div>
          </div>
      </div>
    )

};