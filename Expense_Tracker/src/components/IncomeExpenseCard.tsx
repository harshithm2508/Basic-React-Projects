import { useRecoilValue } from "recoil";
import { Expense, Income } from "../state/atoms/atoms";



interface IECardDetails{
    title : string,
    color : string,
    info : string
}



export function IncomeExpenseCard({title, color, info} : IECardDetails) {
    
    const income = useRecoilValue(Income);
    const expense = useRecoilValue(Expense);
    return (
        <>
            <div className="flex flex-col  font-semibold text-lg items-center w-6/12 px-10 justify-center">
                <div>{title}</div>
                <div className={color}>${info === 'income' ? income : expense}</div>
            </div>
        </>
    );
}