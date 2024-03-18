interface Props {
    children: React.ReactNode,
    className?: string
}

const Tile: React.FC<Props> = (props) => {
    return (
        <div className={`bg-black p-6 rounded-xl ${props.className && props.className}`}>
            {props.children}
        </div>
    )
}

export default Tile