import {GiHamburgerMenu} from 'react-icons/gi'
import {useDispatch} from 'react-redux'
import { toggleMenu } from '../../redux/reducers/menuSlice'
import styles from './Burger.module.scss'
import classNames from 'classnames'

export const Burger = () => {

	const dispatch = useDispatch()

	const onToggle = () => dispatch(toggleMenu())

    return (
        <button onClick={onToggle} className={classNames(styles.burger, 'btn-reset')}>
            <GiHamburgerMenu/>
        </button>
    )
}