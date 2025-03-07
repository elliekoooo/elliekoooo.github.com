import { PropsWithChildren } from "react";
import { Card } from "./Card";

type imageBox = {
    image: string;
    
} & PropsWithChildren;

export const ImageBox:React.FC<imageBox> = ({ image, children }:imageBox) => {

    return (
        <div className="min-w-48 min-h-200">
            <Card animation={"fadeInScale"} direction="col" margin="my-5 mx-4" font={{color: "white/80", weight: "xs", style: "raleway"}}>
                <div className="flex flex-col items-center">
                    <img src={`${image}`} alt="Agent" className="w-full h-96 object-cover" />
                    <div className="font-mono mt-6 mx-auto">
                        <span className="uppercase text-neonBlue drop-shadow-text-border2">status</span> : { children }
                    </div>
                </div>
            </Card>
        </div>
    )
};