import style from './Button.module.scss'

const Button = ({content, isFixed, }) => {
    return (<>
    <button type="button" className={`${style.Button} ${isFixed && style.fixed}` }>{content}</button>
    </>)
}

export default Button