import { RefObject, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { set } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { scrollPosition } from "../store/types";

type sections = {
    divRefs: RefObject<HTMLDivElement>
    direction: string
    icon: IconProp
};

export const ScrollButton:React.FC<sections> = ({ icon, divRefs, direction }: sections) => {
    const _position = useSelector((state:any)=> state.scroll as scrollPosition);
    const dispatch = useDispatch();
    const [_point, setPoints] = useState(0);
    const maxHeight = Math.ceil(divRefs.current.offsetHeight);
    

    const handlePosition = () => {
        if(maxHeight < _position.currentPosition && direction == "down")
            return;
        else if(_position.currentPosition <= 0 && direction == "up")
            return;

        const data: scrollPosition = {
            type: direction,
            point: _point,
            currentPosition: _position.currentPosition,
        };

        dispatch(set(data));
    };

    useEffect(()=> {
        setPoints(Math.ceil(divRefs.current.offsetHeight/3));
    }, [divRefs.current]);

    useEffect(()=> {
        divRefs.current?.scrollTo({
            top: _position.currentPosition,
            behavior: "smooth"
        });
    }, [ dispatch, _position.currentPosition ]);

    return (
        <div className="flex flex-col">
            <button 
                className="relative text-white text-sm px-2 py-1 my-3 font-orbitron tracking-widest uppercase bg-gradient-to-r from-blue-500 to-teal-400 border-2 border-transparent rounded-lg shadow-[0px_0px_15px_#00FFFF] transition-all duration-300 hover:shadow-[0px_0px_30px_#00FFFF]" 
                onClick={handlePosition}>
                <FontAwesomeIcon icon={icon} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 opacity-10 hover:opacity-20 transition-all"></div>
            </button>
        </div>
    )
};