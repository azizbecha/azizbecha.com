interface Props {
    children: React.ReactNode,
    className? : string,
    [key: string]: any
}

const Container = (props: Props) => {
    const { children, className, ...otherProps } = props;

    const containerClasses = `flex flex-col min-h-screen w-full bg-grey text-white px-4 sm:px-32 ${className || ''}`;

    return (
        <div {...otherProps} className={containerClasses}>
            {props.children}
        </div>
    )
}

export default Container