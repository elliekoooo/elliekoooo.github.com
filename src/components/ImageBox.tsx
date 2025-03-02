import { PropsWithChildren } from "react";
import { Card } from "./Card";

type imageBox = {
    image: string;
    
} & PropsWithChildren;

export const ImageBox:React.FC<imageBox> = ({ image, children }:imageBox) => {

    return (
        <div>
            <Card animation={"fadeInScale"} direction="col" margin="my-5 mx-8" font={{color: "neonBlue", weight: "sm", style: "raleway"}}>
                <img src={`${image}`} alt="Agent" className="w-full h-full object-cover" />
                { children }
            </Card>
        </div>
    )
};