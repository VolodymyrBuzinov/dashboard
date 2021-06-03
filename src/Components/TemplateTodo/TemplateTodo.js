import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import {onClickBtnCreate} from '../../Redux/Actions/onClickBtnCreate-action'

const TemplateTodo = () => {
    const dispatch = useDispatch()

    const onclick = () => dispatch(onClickBtnCreate(true))

    return (<>
    <Button content={'icon-plus'} type={'button'} isFixed={true} onClick={onclick} /> 
    </>)
}

export default TemplateTodo