interface IECardDetails{
    title : string,
    color : string
}



export function IncomeExpenseCard({title, color} : IECardDetails) {
    return (
        <>
            <div className="flex flex-col  font-semibold text-lg items-center w-6/12 px-10 justify-center">
                <div>{title}</div>
                <div className={color}>${0}</div>
            </div>
        </>
    );
}