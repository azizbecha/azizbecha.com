import clsx from "clsx"

interface Props {
    children: React.ReactNode,
    className?: string
}

const Tile: React.FC<Props> = (props) => {

    const tileClassName = clsx(
        'bg-black p-6 rounded-x',
        props.className && props.className
    );

    return (
        <div className={tileClassName}>
            {props.children}
        </div>
    )
}

export default Tile