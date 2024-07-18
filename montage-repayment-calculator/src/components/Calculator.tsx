import { useState } from "react"
import AmountInputField from "./AmountInputField"
import InputField from "./InputField"
import OptionsField from "./OptionsField"
import PaymentButton from "./PaymentButton"

export default function Calculator(){

    const [ mortageAmount, setMortageAmount ] = useState(0);
    const [ term, setTerm ] = useState(0);
    const [ interest, setInterest ] = useState(0);


    return(
        <div className=" px-10 py-6 flex flex-col gap-3">
            <div className=" flex justify-between items-center">
                <div className=" text-slate-900 font-semibold text-xl">Mortage Calculator</div>
                <div className=" text-slate-400 border-dotted border-b-2 cursor-pointer">Clear all</div>
            </div>
            <AmountInputField changeHandleFunc={(e)=>{setMortageAmount(Number(e.target.value))}}/>
            <div className=" flex justify-between">
                <InputField title="Mortage Term" factor="years" changeHandleFunc={(e)=>{setTerm(Number(e.target.value))}}/>
                <InputField title="Interest" factor="%" changeHandleFunc={(e)=>{setInterest(Number(e.target.value))}}/>
            </div>
            <div>
                <div className=" text-sm font-semibold text-slate-500 m-1"> Mortage Type</div>
                <OptionsField/>
            </div>
            <PaymentButton/>
        </div>
    )
}