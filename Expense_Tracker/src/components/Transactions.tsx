import { useRecoilState } from "recoil";
import { Balance, Income, Expense } from "../state/atoms/atoms"

import { useState, ChangeEvent, useCallback, useEffect } from "react"; // Add useEffect import

const Transactions = () => {
    const [amountInput, setAmountInput] = useState(0);
    const [titleInput, setTitleInput] = useState('');
    const [balance, setBalance] = useRecoilState(Balance);
    const [income, setIncome] = useRecoilState(Income);
    const [expense, setExpense] = useRecoilState(Expense);

    // Function to handle the input
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === 'amount') {
            setAmountInput(prevAmountInput => Number(value) || prevAmountInput);
        } else if (name === 'title') {
            setTitleInput(prevTitleInput => value || prevTitleInput);
        } else {
            console.warn(`Unexpected input name: ${name}`);
        }
    };

    // Function to handle adding a transaction
    const addTransaction = useCallback(() => {
        if(amountInput < 0)
            setExpense(prevVal => prevVal - amountInput);
        else
            setIncome(prevVal => prevVal + amountInput);
    
        // Reset input fields after adding transaction
        setAmountInput(0);
        setTitleInput('');
    }, [amountInput, setIncome, setExpense]);
    
    

    // Update balance whenever income or expense changes
    useEffect(() => {
        setBalance(income - expense);
    }, [income, expense, setBalance]);

    return (
        <div>
            <div className="text-black font-semibold text-xl border-b-2 border-gray-400">Add new transaction</div>

            <InputField fieldName="title" label="Transaction Title" inputHandler={handleInput} type="text" placeholder="Enter your transaction title..." />
            <InputField fieldName="amount" label="Amount (+) for income (-) for expenses" inputHandler={handleInput} type="number" placeholder="Enter the amount" />

            <button onClick={addTransaction} className="w-full text-white py-2 bg-purple-500">Add Transaction</button>

        </div>
    );
};


interface InputFieldData{
    label : string,
    placeholder : string,
    type : string,
    inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fieldName : string
}

export const InputField = ({label, placeholder, type, inputHandler, fieldName} : InputFieldData) => {
    return(
        <div className="my-4 text-md">
            <div className="mb-2 ">{label}</div>
            <input type={type} name={fieldName} onChange={inputHandler} className="w-full h-10 border-2 px-2 font-md border-gray-200" placeholder={placeholder} />
        </div>
    )
}

export default Transactions;
