import Heading from "./Heading"
import Tile from "./Tile"

const Newsletter = () => {
    return (
        <Tile className="my-5">
            <Heading variant="h2">
                Subscribe to our Newsletter 📬
            </Heading>
            <Heading variant="small">
                Never miss an update! Subscribe now to receive my notes, thoughts, and more via email! 📮
            </Heading>

            <form className="flex mb-2 mt-5">
                <div className="relative w-full">
                    <input type="search" className="block p-3 w-full z-20 text-sm bg-grey rounded-lg focus:outline-none" placeholder="Please enter your email" required />
                    <button type="submit" className="absolute top-0 right-0 py-3 px-4 text-sm font-medium text-white bg-main rounded-r-lg flex">⚡ Join</button>
                </div>
            </form>
            <p className="text-xs text-grey-200 text-end">⛔ You can unsubscribe at any time.</p>
        </Tile>
    )
}

export default Newsletter