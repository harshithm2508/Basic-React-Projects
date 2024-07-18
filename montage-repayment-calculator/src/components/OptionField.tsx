interface OptionFieldProps{
    title : string;
}

function OptionField({title} : OptionFieldProps){
    return(
        <div className=" flex gap-2 border-2 p-2 hover:border-lime-400 hover:bg-lime-50 rounded-md mb-2">
            <input type="radio" name="" id="" />
            <div>{title}</div>
        </div>
    )
}

export default OptionField;