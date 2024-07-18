import Calculator from "./Calculator";
import ResultCard from "./ResultCard";

function Card(){
    return(
        <div className=" h-3/4 w-3/5 bg-white grid grid-cols-2 rounded-xl overflow-hidden">
            <Calculator/>
            <ResultCard/>
        </div>
    )
}

export default Card;