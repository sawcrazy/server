export interface ModalDeleteProps {
    open: boolean;
    title: string;
    onClose: () => void;
    delete: (id: string) => void;
    id: string | null;
}