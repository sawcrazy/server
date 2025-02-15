export interface ModalProps {
    open: boolean;
    onClick: () => void;
    title: string;
    children: React.ReactNode;
}