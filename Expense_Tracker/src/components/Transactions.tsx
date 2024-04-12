const Transactions = () => {
    return(
        <div>
            <div className="text-black font-semibold text-xl border-b-2 border-gray-400">Add new transaction</div>

            <InputField label="Transaction Title" type="text" placeholder="Enter your transaction title..."/>
            <InputField label="Amount (+) for income (-) for expenses" type="number" placeholder="Enter the amount"/>

            <button className="w-full text-white py-2 bg-purple-500">Add  Transaction</button>
        </div>
    )
}

interface InputFieldData{
    label : string,
    placeholder : string,
    type : string
}

export const InputField = ({label, placeholder, type} : InputFieldData) => {
    return(
        <div className="my-4 text-md">
            <div className="mb-2 ">{label}</div>
            <input type={type} className="w-full h-10 border-2 px-2 font-md border-gray-400" placeholder={placeholder} />
        </div>
    )
}

export default Transactions;