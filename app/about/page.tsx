import Container from "@/components/Container"
import Divider from "@/components/Divider"
import Heading from "@/components/Heading"

const About = () => {
    return (
        <Container>
            <Heading variant="h1" className="text-main text-center mb-3 mt-5">
                About 👋
            </Heading>
            <Heading variant="body" className="text-center">
                Interested to learn more about who I am? You&apos;re in the perfect spot! 🌟
            </Heading>
            <Divider />
        </Container>
    )
}

export default About