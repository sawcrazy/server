import {ISeminars} from "../../common/types/seminars.ts";

export interface ModalEditProps {
    open: boolean;
    title: string;
    onClose: () => void;
    seminar: ISeminars | null;
    onSave: (seminar: ISeminars) => void;
}