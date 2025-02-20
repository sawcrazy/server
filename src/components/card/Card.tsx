import s from './style.module.css';
import {ICard} from "./card.props.ts";
import {Button} from '../button/Button.tsx';



export const Card: React.FC<ICard> = ({seminars, onClickDelete,onClickEdit}) => {
    return (
        <div className={s.list}>
            <dl className={s.holiday}>
                <dt>Название семинара</dt>
                <dd>{seminars.title}</dd>
                <dt>Описание</dt>
                <dd>{seminars.description}</dd>
                <dt>Дата проведение семинара</dt>
                <dd>{seminars.date}</dd>
                <dt>Время проведение семинара</dt>
                <dd>{seminars.time}</dd>
                <dt>Фото</dt>
                <dd><img src={seminars.photo} alt="FOTO"/></dd>
            </dl>
            <Button  onClick={() => onClickDelete(seminars.id)}>
                удалить
            </Button>
            <Button onClick={() => onClickEdit(seminars.id)}>
                Редактировать
            </Button>
        </div>
    )
}