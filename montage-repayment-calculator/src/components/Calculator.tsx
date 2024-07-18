import AmountInputField from "./AmountInputField"
import InputField from "./InputField"
import OptionField from "./OptionField"
import PaymentButton from "./PaymentButton"

export default function Calculator(){


    return(
        <div className=" px-10 py-6 flex flex-col gap-5">
            <div className=" flex justify-between items-center">
                <div className=" text-slate-900 font-semibold text-xl">Mortage Calculator</div>
                <div className=" text-slate-400 border-dotted border-b-2 cursor-pointer">Clear all</div>
            </div>
            <AmountInputField/>
            <div className=" flex justify-between">
                <InputField title="Mortage Term" factor="years"/>
                <InputField title="Interest" factor="%"/>
            </div>
            <div>
                <div className=" text-sm font-semibold text-slate-500 m-1"> Mortage Type</div>
                <div>
                    <OptionField title="Repayment"/>
                    <OptionField title="Interest Only"/>
                </div>
            </div>
            <PaymentButton/>
        </div>
    )
}