import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageBox } from "../components/ImageBox"
import { RefObject, useRef } from "react"
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
    const divRefs:RefObject<HTMLDivElement> = useRef({} as HTMLDivElement);

    return (
        <div className="w-screen h-screen bg-nightSky flex flex-col items-center justify-center">
            <div className="relative shadow-neon-blue rounded-3xl w-[85vw] h-[90vh] overflow-hidden bg-spaceship bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
                <div ref={divRefs} className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[90vh] overflow-y-scroll">
                    <div className="mx-5 my-5 text-3xl font-audioWide font-bold uppercase text-neonBlue text-center drop-shadow-text-border2">Toy Projects</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 place-items-center text-white">
                        <ImageBox image="/toy/entertainment-webapp.png">
                            A simple entertainment webapp with bookmark and search functionality.
                            <div className="text-right my-2">
                                <a href={"https://github.com/elliekoooo/frontend-mentor-challenges/tree/develop/entertainment-webapp"} target="_blank">
                                    <span 
                                        className="border-2 bg-neonBlue border-neonBlue rounded-xl text-nightSky px-2 py-1 mx-1">
                                            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                    </span>  
                                </a>
                                <a href={"https://elliekoooo.github.io/frontend-mentor-challenges/entertainment-webapp/"} target="_blank">
                                    <span 
                                        className="border-2 bg-neonBlue border-neonBlue rounded-xl text-nightSky px-2 py-1 mx-1">
                                            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                    </span>  
                                </a>
                            </div>
                        </ImageBox>
                        <ImageBox image="/toy/interactive-comments-section.png">
                            Developed an interactive comment section with CRUD functionality.
                            <div className="text-right my-2">
                                <a href={"https://github.com/elliekoooo/frontend-mentor-challenges/tree/develop_ellie/interactive-comments-section"} target="_blank">
                                    <span 
                                        className="border-2 bg-neonBlue border-neonBlue rounded-xl text-nightSky px-2 py-1 mx-1">
                                            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                    </span>  
                                </a>
                                <a href={"https://elliekoooo.github.io/frontend-mentor-challenges/interactive-comments-section/"} target="_blank">
                                    <span 
                                        className="border-2 bg-neonBlue border-neonBlue rounded-xl text-nightSky px-2 py-1 mx-1">
                                            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                    </span>  
                                </a>
                            </div>
                        </ImageBox>
                        <ImageBox image="/toy/age-calculator-app.png">
                            A simple webapp with a date-based calculation feature.
                            <div className="text-right my-3">
                                <a href={"https://github.com/elliekoooo/frontend-mentor-challenges/tree/develop_ellie/age-calculator-app"} target="_blank">
                                    <span 
                                        className="border-2 bg-neonBlue border-neonBlue rounded-xl text-nightSky px-2 py-1 mx-1">
                                            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                    </span>  
                                </a>
                                <a href={"https://elliekoooo.github.io/frontend-mentor-challenges/age-calculator-app/"} target="_blank">
                                    <span 
                                        className="border-2 bg-neonBlue border-neonBlue rounded-xl text-nightSky px-2 py-1 mx-1">
                                            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                    </span>  
                                </a>
                            </div>
                        </ImageBox>
                    </div>
                </div>
            </div>
        </div>
    )
}