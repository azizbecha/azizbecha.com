import React, { ElementType } from "react";

type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body"
    | "body-small"
    | "small";

interface Props {
    variant: Variant;
    children: React.ReactNode;
    className?: string;
    as?: ElementType;
    id?: string
}

const tags: Record<Variant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    body: "p",
    "body-small": "p",
    small: "span"
};

const sizes: Record<Variant, string> = {
    h1: "text-3xl font-bold font-ubuntu sm:text-5xl",
    h2: "text-2xl font-bold font-ubuntu sm:text-4xl",
    h3: "text-xl font-bold font-ubuntu sm:text-3xl",
    h4: "text-lg font-bold font-ubuntu sm:text-2xl",
    h5: "text-md font-bold font-ubuntu sm:text-lg",
    body: "text-md sm:text-lg",
    "body-small": "font-ubuntu text-sm sm:text-sm",
    small: "font-ubuntu text-sm sm:text-xs"
};

export const Heading = ({ variant, children, className, as, id }: Props) => {
    const sizeClasses = sizes[variant];
    const Tag = as || tags[variant];

    return <Tag className={`${sizeClasses} ${className}`} id={id}>{children}</Tag>;
};

export type { Variant }