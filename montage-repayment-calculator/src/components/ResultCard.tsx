import style from '../ui/home.module.css'
import image from '../../src/assets/images/illustration-empty.svg'

function ResultCard(){
    return(
        <div className={`bg-slate-900 ${style.shaped_border} px-4 flex flex-col items-center py-10 gap-5`}>
            <img className={style.image_size} src={image} alt="" />
            <div className='text-white text-center font-semibold text-xl'>Results shown here</div>
            <div className=' text-slate-300 text-center font-medium'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</div>
        </div>
    )
}

export default ResultCard;