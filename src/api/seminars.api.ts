import {API} from '../constants/api.ts';
import {ISeminars} from "../../common/types/seminars.ts";

export const fetchSeminars = async () => {
    const response = await fetch(`${API.SEMINARS}`);
    const seminars = await response.json();
    return seminars;
};

export const deleteSeminar = async (id: string) => {
    await fetch(`${API.SEMINARS}${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    return await fetchSeminars();
};

export const editSeminar = async (editedSeminar: ISeminars) => {
    await fetch(`${API.SEMINARS}${editedSeminar.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(editedSeminar),
    });
    return await fetchSeminars();
};
