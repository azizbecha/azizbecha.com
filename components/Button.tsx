import React from "react";
import clsx from "clsx";

interface CommonButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset"; // New: Add the type prop
    disabled: boolean;
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
    const { primary, secondary, children, className, onClick, type = "button", disabled = false } = props; // New: Destructure the type prop and provide a default value

    const isPrimary = primary || (!primary && !secondary);
    const buttonClass =
        clsx(
            "font-ubuntu font-medium text-white text-center px-3.5 sm:px-4 py-2 rounded-lg",
            "text-xs sm:text-base", // Smaller text for mobile (text-sm) and normal size for larger screens (text-base)
            `bg-${isPrimary ? 'main' : 'grey'}`,
            className
        )

    return (
        <button className={buttonClass} onClick={onClick} type={type} disabled={disabled}> {/* New: Pass the type prop to the button element */}
            {children}
        </button>
    );
}

export default Button;
