import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Heading from "@/components/Heading";
import Posts from "@/components/Post/Posts";

export default function AllPosts() {

    return (
        <Container>
            <Heading variant="h1" className="text-main text-center mb-3 mt-5">
                Blog ✍️
            </Heading>
            <Heading variant="body" className="text-center">
                📚 From Code to Life: Our Blog Hub for Coding, Design, Life Tips, Books, and Business 🖥️📚💼
            </Heading>
            <Divider />
            <Posts />
        </Container>
    )
}