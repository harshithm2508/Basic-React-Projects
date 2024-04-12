import { IncomeExpenseCard } from "./IncomeExpenseCard"

export const TrackerCard = ()=>{
    return(
        <div className="max-w-md w-96 m-12">
            <div className="text-xl font-semibold">
                Your Balance
            </div>
            <div className="text-4xl font-semibold">
                <em>${0}</em>
            </div>
            
            <div className="w-full h-24 my-7 shadow-sm shadow-gray-600 flex ">
                {/* Income */}
                <IncomeExpenseCard color="text-green-500" title="INCOME"/>

                <IncomeExpenseCard color="text-red-500" title="EXPENSE"/>
            </div>
        </div>
    )
}