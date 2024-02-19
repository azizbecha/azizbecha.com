interface Props {
    children: React.ReactNode
}

export const Container = (props: Props) => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-black text-white px-4 sm:px-64">
            {props.children}
        </div>
    )
}