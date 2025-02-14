import {FC} from 'react';
import s from './style.module.css';
import {ISeminars} from '../../../common/types/seminars.ts';
import {Button} from '../button/Button.tsx';

interface ICard {
    seminars: ISeminars,
    onClickDelete(id: string): void,
    onClickEdit(id: string): void,

}

export const Card: FC<ICard> = ({seminars, onClickDelete,onClickEdit}) => {
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
                Ретактировать
            </Button>
        </div>
    )
}