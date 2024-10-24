import { page } from "App";
import { useSelector } from "react-redux";

export const Navigator = () => {

   const pageIndex = useSelector((state:any)=>state.pageReducer);

   const changePage = () => {

   };

   return (
    <div>
        {
            page.map((_p, index:number) =>{
                return (
                    <p 
                        key={index} 
                        className={"circle my-3 "+(pageIndex==index ? 'color' : '')}
                        onClick={changePage}
                    />
                )
            })
        }
    </div>
   ) 
};