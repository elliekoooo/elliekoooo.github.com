import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

export const Contacts = () => {
    

    return (
        <div className="w-screen h-screen bg-nightSky flex md:flex-row flex-col items-center justify-center md:gap-5 gap-10 py-5">
            <div className="md:mx-10 relative shadow-neon-blue rounded-3xl md:w-[80vw] w-[90vw] h-[80vh] overflow-hidden bg-neonBlue/20 bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[90vh] overflow-y-auto scrollbar-hide">
                    <div className="mx-5 my-5 text-3xl font-audioWide font-bold uppercase text-neonBlue text-center drop-shadow-text-border2">Contacts</div>
                    <div className="relative w-[500px] h-[500px] flex items-center justify-center mx-auto">
                        <div className="absolute w-[450px] h-[450px] rounded-full border-2 border-white/30 animate-spinSlow bg-space bg-cover"></div>
    
                        <a href="https://github.com/elliekoooo" className="absolute top-2 left-1/2 text-5xl transform -translate-x-1/2 text-black hover:text-neonBlue" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </a>
                        <a href="https://medium.com/@elliekoooo" className="absolute bottom-2 left-1/2 text-5xl transform -translate-x-1/2 text-black hover:text-neonBlue" target="_blank">
                            <FontAwesomeIcon icon={faBlogger}/>
                        </a>
                        <a href="mailto:elliekoooo@gmail.com" className="absolute right-2 top-1/2 text-5xl transform -translate-y-1/2 text-black hover:text-neonBlue" target="_blank">
                            <FontAwesomeIcon icon={faMailBulk} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

