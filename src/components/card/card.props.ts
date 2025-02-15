import {ISeminars} from "../../../common/types/seminars.ts";

export interface ICard {
    seminars: ISeminars,
    onClickDelete(id: string): void,
    onClickEdit(id: string): void,

}