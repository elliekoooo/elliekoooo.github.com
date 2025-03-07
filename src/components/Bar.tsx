export const Bar = ({ score }:any) => {

    const _score = Array.from(new Array(score), 
        (_x,i)=> "#00FFFF");

    return (
        <span className="flex ml-3 my-auto animate-typing overflow-hidden whitespace-nowrap gap-1">
            {   
            
                _score.map((s,i)=> (
                    <span key={i} className={"p-1 border-2 border-neonBlue"} style={{backgroundColor: s}}></span>
                ))
            }
        </span>
    )
};