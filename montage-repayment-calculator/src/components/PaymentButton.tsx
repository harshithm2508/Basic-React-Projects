import calci from '../../src/assets/images/icon-calculator.svg'

export default function PaymentButton(){
    return(
        <div className=" w-3/4 h-10 rounded-2xl bg-lime-400 flex items-center gap-3 px-5">
            <img src={calci}  alt="" />
            <div className=' text-slate-950 font-semibold'>Calculate Repayments</div>
        </div>
    )
}