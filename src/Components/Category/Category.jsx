import style from './Category.module.scss'

const Category = ({items}) => {
    return (
        <>
        <ul className={style.Category__list}>
            {items.map((item, index)=>               
                <li key={index} className={style.Category__item}>{item}</li>
            )}
        </ul>
        </>
    )
}

export default Category