import clsx from "clsx";

interface CommonButtonProps {
    children: React.ReactNode;
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

const Button = (props: ButtonProps) => {
    const { primary, secondary, children, className, onClick } = props;

    const isPrimary = primary || (!primary && !secondary);
    const buttonClass =
        clsx(
            "font-ubuntu font-medium text-white text-center px-3.5 sm:px-4 py-2 rounded-lg",
            `bg-${isPrimary ? 'main' : 'grey'}`,
            className
        )

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button