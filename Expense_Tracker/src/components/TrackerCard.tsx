import { useRecoilValue } from "recoil"
import { IncomeExpenseCard } from "./IncomeExpenseCard"
import Transactions from "./Transactions"
import { Balance } from "../state/atoms/atoms"

export const TrackerCard = ()=>{
    const balance = useRecoilValue(Balance);
    return(
        <div className="max-w-md w-96 m-12">
            <div className="text-xl font-semibold">
                Your Balance
            </div>
            <div className="text-4xl font-semibold">
                <em>${balance}</em>
            </div>
            
            <div className="w-full h-24 my-7 shadow-sm shadow-gray-600 flex ">
                {/* Income */}
                <IncomeExpenseCard info="income" color="text-green-500" title="INCOME"/>

                <IncomeExpenseCard info="expense" color="text-red-500" title="EXPENSE"/>
            </div>


            <div>
                <Transactions/>
            </div>
        </div>
    )
}