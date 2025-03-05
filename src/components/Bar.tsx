export const Bar = ({ score }:any) => {

    const _score = Array.from(new Array(score), 
        (_x,i)=> "#"+Math.floor(Math.random()*16777215).toString(16));

    console.log(_score);

    return (
        <span className="flex ml-3 my-auto">
            {   
            
                _score.map((s,i)=> (
                    <span key={i} className={"text-sm p-1.5"} style={{backgroundColor: s}}></span>
                ))
            }
        </span>
    )
};