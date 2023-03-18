import { FC } from 'react'
import { IRegion } from '../../redux/types'
import { FiAlertTriangle } from 'react-icons/fi'
import styles from './Menu.module.scss'
import moment from 'moment'
import 'moment/locale/uk'
moment.locale('uk')

interface IMenuItem {
    item: IRegion
}

export const MenuItem: FC<IMenuItem> = ({ item }) => {
   
    const date = moment(Date.parse(item.changed)).format('D MMMM о HH:mm');
    const dateFromNow = moment(Date.parse(item.changed)).fromNow();
    let isNull = false;
    if(item.changed === null){
        isNull = true;
    }
    
    return (
        <li className={styles.item} key={item?.id}>
            <FiAlertTriangle className={styles.icon}/>
            <span className={styles.name}>{item?.name}</span>
            {isNull
                ? <span className={styles.date}>   
                    Тривога вже досить довго 
                </span>
                : <span className={styles.date}>   
                    {date}&nbsp;
                    ({dateFromNow}) 
                </span>
            } 
        </li>
    )
}