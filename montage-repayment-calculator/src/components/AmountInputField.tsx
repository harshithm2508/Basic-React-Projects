
export default function AmountInputField(){
    return(
        <div>
            <div className=" text-sm font-semibold text-slate-500 m-1">Mortage Amount</div>
            <div className=" border-2 rounded-lg border-lime-400 h-10 w-full flex overflow-hidden">
                <div className="  w-10 flex flex-col justify-center items-center font-semibold text-slate-500 text-lg bg-lime-400 h-full">&#x20B9;</div>
                <input type="text" className=" w-full focus:outline-none px-2"  />
            </div>
        </div>
    )
}