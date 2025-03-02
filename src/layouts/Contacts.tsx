import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";

export const Contacts = () => {
    const [input, setInput] = useState("");
    const [lines, setLines] = useState([""]);
    const [step, setStep] = useState(0);

    const systemLogs = [
        "...........................................",
        "Do you want to leave a message...? (yes/no)",
        "Please identify yourself...(ex. Jain Doe)",
        "Provide authorized contact...(ex. yourId@example.com)",
        "Transmit Your Message",
        "Initate Transmission.........Done."
    ];

    const handleEnter = (e:any) => {
        const newLine = [...lines, `> ${input}`];
        if(e.key === "Enter"){
            if(input.toLowerCase()==="help"){
                newLine.push("Availiable Commands...");                    
            }

            if(step == 0) {
                if(input.toLowerCase() === "no"){
                    newLine.push("OK Bye.........");
                }else if(input.toLowerCase() === "yes"){
                    setStep(step+1);
                }else{ 
                    newLine.push("Command not Found......");
                    newLine.push("Please type 'help' for a list of commands.");
                }
            }

            setLines(newLine);
            setStep(step+1);
            setInput("");

            if(systemLogs.length-1 === step){
                setLines([" All Clear....."])
            }
        }

    };


    const handleAfterTyping = () => {
        if(step == 0)
            setStep(step + 1);
    };

    useEffect(()=> {
        setLines([...lines, systemLogs[step]]);

    }, [step]);

    return (
        <div className="w-screen h-screen bg-nightSky flex flex-col items-center justify-center">
            <div className="relative shadow-neon-blue rounded-full w-[60vw] h-[80vh] overflow-hidden bg-astronaut bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] h-[90vh] overflow-y-auto scrollbar-hide">
                    <Navigation path={"contacts"}/>
                    <div className="flex h-full">
                        <div className="mx-auto my-auto">
                            <div className="relative p-12 w-[100%] h-[30%] max-w-xl bg-[#000000] overflow-y-auto scrollbar-hide text-white border rounded-lg">
                                <p onAnimationEnd={handleAfterTyping} className="animate-typing font-vt323 overflow-hidden whitespace-nowrap text-xl">[ System...Booting..................Done. ]</p>
                                {
                                    lines.map((log:string, index:number)=> (
                                        <p key={index}  className={`${index % 2 == 0 ? "animate-typing":""} text-xl font-vt323 overflow-hidden whitespace-nowrap`}>{log}</p>
                                    ))
                                }
                                <div className={`flex ${step < 1 ? "hidden":""}`}>
                                    <span className="mr-1 font-vt323 text-xl">{">"}</span>
                                    <input type="text" value={input} 
                                        className="bg-transparent outline-none text-neonGreen-400 font-vt323 w-full text-neonBlue "
                                        onChange={(e)=>setInput(e.target.value)} 
                                        onKeyDown={(e)=>handleEnter(e)}
                                        autoFocus
                                    />
                                    <span className="animate-blink text-sm">|</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};