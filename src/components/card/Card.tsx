import {FC} from 'react';
import s from './style.module.css';
import {ISeminars} from '../../../common/types/seminars.ts';
import {Button} from '../button/Button.tsx';

interface ICard {
    seminars: ISeminars,
    ClickDelete(): void,
    ClickEdit(): void,

}

export const Card: FC<ICard> = ({seminars, ClickDelete,ClickEdit}) => {
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
            <Button  onClick={ClickDelete}>
                удалить
            </Button>
            <Button onClick={ClickEdit}>
                Ретактировать
            </Button>
        </div>
    )
}