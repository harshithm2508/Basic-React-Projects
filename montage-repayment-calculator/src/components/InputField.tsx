import style from '../ui/home.module.css'

interface InputFieldProps{
    title : string;
    factor : string
}

export default function InputField({title, factor} : InputFieldProps){
    return(
        <div className={`${style.input_field_width}`}>
            <div className="text-sm font-semibold text-slate-500 m-1">{title}</div>
            <div className=" h-8 border-2 border-blue-400 rounded-md flex overflow-hidden">
                <input type="text" className="w-full focus:outline-none px-2" />
                <div className=" bg-blue-100 flex justify-center items-center p-2">{factor}</div>
            </div>
        </div>
    )
}