import style from './Category.module.scss'

const Category = ({items, handleClick}) => {
    return (
        <>
        <ul className={style.Category__list}>
            {items.map((item, index)=>               
                <li key={index} data-type='category' data-name={item} onClick={handleClick} className={style.Category__item}>{item}</li>
            )}
        </ul>
        </>
    )
}

export default Category