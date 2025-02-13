import {FC} from 'react';
import s from './style.module.css';
import {ISeminars} from '../../../common/types/seminars.ts';
import {Button} from '../button/Button.tsx';

interface ICard {
    seminars: ISeminars;
    deleteSeminars(id: string): void;
}

export const Card: FC<ICard> = ({seminars,deleteSeminars}) => {
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
                <dd>{seminars.photo}</dd>
            </dl>
            <Button onClick={()=>deleteSeminars(seminars.id)}>
                удалить
            </Button>
        </div>
    )
}