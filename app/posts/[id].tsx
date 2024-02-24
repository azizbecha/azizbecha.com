import { PostTitle } from "@/components/PostTitle";
import { Container } from "@/components/container";

export default function Posts() {
    return (
        <main>
            <Container>
                <img className="w-28" src="https://www.taniarascia.com/static/d695fe69198cc4558284e9aec1a4892c/92ab1/react.png" />
                <PostTitle title="Is React Overrated ?" />
            </Container>
        </main>
    )
}