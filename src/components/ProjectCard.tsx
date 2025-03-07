type project = {
    title: string;
    desc: string;
    role: string;
}


export const ProjectCard:React.FC<project> = (info: project) => {

    return(
        <div className="relative flex flex-col bg-neonBlue/20 border border-white/20 shadow-xl shadow-neon-blue p-3 w-[100%] h-[200px] overflow-y-auto p-5 text-center">
            <div className="text-neonBlue font-bold tracking-widest text-center">{info.title}</div>
            <div className="text-sm my-auto mx-auto">
                {info.desc}
            </div>
            <div className="mt-auto uppercase font-vt323 font-bold">
                {info.role}
            </div>  
        </div>
    )
};