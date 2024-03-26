export interface ButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    href?: string;
    target?: string;
    type?: 'button' | 'submit' | 'reset';
    id?: string;
    rel?: string;
    style?: React.CSSProperties;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    children?: React.ReactNode;
    icon?: string;
}