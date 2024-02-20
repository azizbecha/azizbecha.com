interface CommonButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
}

interface PrimaryButtonProps extends CommonButtonProps {
    primary?: true;
    secondary?: never;
}

interface SecondaryButtonProps extends CommonButtonProps {
    primary?: never;
    secondary?: true;
}

type ButtonProps = (PrimaryButtonProps | SecondaryButtonProps) & {
    primary?: boolean; // Allow defaulting to primary
};

export const Button = (props: ButtonProps) => {
    const { primary, secondary, text, className, onClick } = props;

    const isPrimary = primary || (!primary && !secondary);

    const buttonClass = `bg-${isPrimary ? 'main' : 'grey'} font-ubuntu font-medium text-white px-4 py-2 rounded ${className || ''}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    );
}
