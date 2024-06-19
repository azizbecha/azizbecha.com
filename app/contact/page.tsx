import ContactForm from "@/components/ContactForm"
import Container from "@/components/Container"
import Divider from "@/components/Divider"
import Heading from "@/components/Heading"
import Tile from "@/components/Tile"

const Contact = () => {
    return (
        <Container>
            <Heading variant="h1" className="text-main text-center mb-3 mt-5">
                Contact 📩
            </Heading>
            <Heading variant="body" className="text-center">
                Looking to work together or have a discussion? Let&apos;s connect 🙌
            </Heading>
            <Divider />

            <Tile>
                <Heading variant="h3">
                    Get in touch with me
                </Heading>
                <hr className="my-3" />
                <ContactForm />
            </Tile>
        </Container>
    )
}

export default Contact