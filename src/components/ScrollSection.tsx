import { PropsWithChildren, useEffect, useRef, useState } from "react";
import arrow from '/svgs/hud_triple_arrow_wide.svg';


type option = {
    sections: any;
} & PropsWithChildren;


export const ScrollSection:React.FC<option> = (prop:option) => {
    const sectionRefs = useRef([] as HTMLDivElement[]);
    const [pageNumber, setPageNumber] = useState(0);
    const isScrolling = useRef(false);

    const moveSection = (index: number) => {
        if(sectionRefs.current[index]){
            sectionRefs.current[index]?.scrollIntoView({behavior: 'smooth'});
            setPageNumber(index);
        }
    };
      
    useEffect(()=> {() => {
        
        const wheel = (e:WheelEvent) => {
            e.preventDefault();    

            if(isScrolling.current) return;
            isScrolling.current = true;
    
            setTimeout(()=> {
                isScrolling.current = false;
            }, 700);
      
            const { deltaY } = e;
    
            //move down
            if(deltaY > 0){
                moveSection(Math.min(prop.sections.length-1, pageNumber+1));
            //move up
            }else if(deltaY < 0){
                moveSection(Math.max(0, pageNumber-1));
            }
        };

        const keyDown = (e:KeyboardEvent) => {
            if(e.key == "ArrowDown") {
                moveSection(Math.min(prop.sections.length-1, pageNumber+1));
            }else if(e.key == "ArrowUp") {
                moveSection(Math.max(0, pageNumber-1));
            }
        }
        
      window.addEventListener("wheel", wheel);
      window.addEventListener("keydown", keyDown);
  
      return () => {
        window.removeEventListener("wheel", wheel);
        window.removeEventListener("keydown", keyDown);

      }

    }}, [pageNumber]);

    return (
        <div className="relative w-full overflow-hidden h-screen">
            <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
            { 
                prop.sections.map((section:any, index:number)=> (
                    <div key={index}
                        ref={(el:HTMLDivElement|any)=> sectionRefs.current[index] = el}
                        className="h-screen w-full snap-center flex content-center items-center">
                        <button className={pageNumber==0?"hidden":"z-10"} onClick={()=> moveSection(Math.max(0, pageNumber-1))}>
                            <div className='absolute h-[10vh] left-1/2 transform -translate-x-1/2 top-0 text-neonBlue opacity-30'>
                                <img src={arrow} className="animate-slideUp"/>
                            </div>
                        </button> 
                        <div className="">{ section }</div>      
                        <button className={pageNumber==prop.sections.length-1?"hidden":"z-10"} onClick={()=> moveSection(Math.min(prop.sections.length-1, pageNumber+1))}>
                            <div className='absolute h-[10vh] left-1/2 transform -translate-x-1/2 bottom-0 text-neonBlue rotate-180 opacity-30'>
                                <img src={arrow} className="animate-slideDown"/>
                            </div>
                        </button>                     
                    </div>
                ))
            }
            </div>
        </div>
    )
};