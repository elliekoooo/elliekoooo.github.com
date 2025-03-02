import { PropsWithChildren } from "react";


type card = {
    animation: string;
    margin: string;
    direction: 'col' | 'row';
    height?: string,
    width?: string,
    font: font    
} & PropsWithChildren;

type font = {
    color: string,
    weight: 'sm' | 'xl' | '2xl' | '3xl',
    style: string
}

export const Card:React.FC<any> = ({ animation, margin, height, width, direction, font, children }: card) => {
    return (
        <div className={`flex flex-${direction} h-full font-${font.style} text-${font.color} text-${font.weight} animate-${animation}`}>
            <div className={`${margin}`}>
                <div className={`relative ${height} ${width} w-full max-w-xl bg-black/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-lg p-6 overflow-hidden`}>
                    <div className={`flex flex-${direction} my-auto text-left px-1`}>
                        { children }
                    </div>
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neonBlue"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neonBlue"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neonBlue"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neonBlue"></div>
                </div>
            </div>
        </div>
    )
};