type project = {
    title: string;
    desc: string;
    role: string;
}


export const ProjectCard:React.FC<project> = (info: project) => {

    return(
        <div className="relative flex flex-col bg-neonBlue/20 border border-white/20 shadow-xl shadow-neon-blue w-[100%] h-[200px] overflow-y-auto p-5 text-center">
            <div className="text-neonBlue font-bold tracking-widest text-center uppercase">{info.title}</div>
            <div className="font-tiltNeon text-white/70 text-sm my-auto mx-auto">
                {info.desc}
            </div>
            <div className="mt-auto text-white/70 uppercase font-mono font-bold">
                {info.role}
            </div>  
        </div>
    )
};