import { Navigation } from "../components/Navigation"
import { ImageBox } from "../components/ImageBox"
import { ScrollButton } from "../components/ScrollButton"
import { RefObject, useRef } from "react"
import { faLongArrowAltDown, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons"

export const Projects = () => {
    const divRefs:RefObject<HTMLDivElement> = useRef({} as HTMLDivElement);

    return (
        <div className="w-screen h-screen bg-nightSky flex flex-col items-center justify-center">
            <div className="relative shadow-neon-blue rounded-3xl w-[80vw] h-[90vh] overflow-hidden bg-earth bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
                <div ref={divRefs} className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[90vh] overflow-y-auto scrollbar-hide">
                    <Navigation path={"projects"} />
                    <div className="mx-5 my-5 text-3xl font-audioWide font-bold uppercase text-neonBlue text-center drop-shadow-text-border2">Toy Projects</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                        <ImageBox image="/images/moon.png">
                            <div className="text-neonGreen">
                                ksdlafasdkf
                            </div>
                        </ImageBox>
                        <ImageBox image="/images/moon.png">
                            <div className="text-neonGreen">
                                ksdlafasdkf
                            </div>
                        </ImageBox>
                        <ImageBox image="/images/moon.png">
                            <div className="text-neonGreen">
                                ksdlafasdkf
                            </div>
                        </ImageBox>
                        <ImageBox image="/images/moon.png">
                            <div className="text-neonGreen">
                                ksdlafasdkf
                            </div>
                        </ImageBox>
                        <ImageBox image="/images/moon.png">
                            <div className="text-neonGreen">
                                ksdlafasdkf
                            </div>
                        </ImageBox>
                        <ImageBox image="/images/moon.png">
                            <div className="text-neonGreen">
                                ksdlafasdkf
                            </div>
                        </ImageBox>
                        <ImageBox image="/images/moon.png">
                            <div className="text-neonGreen">
                                ksdlafasdkf
                            </div>
                        </ImageBox>
                        <ImageBox image="/images/moon.png">
                            <div className="text-neonGreen">
                                ksdlafasdkf
                            </div>
                        </ImageBox>
                    </div>
                </div>
            </div>
            <div className="absolute top-[50%] flex flex-col mx-auto my-auto hidden md:block">
                <div>
                    <ScrollButton icon={faLongArrowAltUp } divRefs={divRefs} direction={"up"}></ScrollButton>
                    <ScrollButton icon={faLongArrowAltDown} divRefs={divRefs} direction={"down"}></ScrollButton>
                </div>
            </div>
        </div>
    )
}