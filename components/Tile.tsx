import clsx from "clsx"

interface Props {
    children: React.ReactNode,
    className?: string
}

const Tile: React.FC<Props> = (props) => {

    const tileClassName = clsx(
        'bg-black p-4 sm:p-6 rounded-xl',
        props.className && props.className
    );

    return (
        <div className={tileClassName}>
            {props.children}
        </div>
    )
}

export default Tile