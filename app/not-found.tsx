import { Metadata } from "next";
import Image from "next/image";

import Container from "@/components/Container";
import Heading from "@/components/Heading";

export const metadata: Metadata = {
    title: "Page not found | Aziz Becha",
};

export default function Custom404() {
    return (
        <main className="my-5">
            <Container>
                <Heading variant="h1" className="text-center text-main">
                    404
                </Heading>

                <Heading variant="body" className="text-center text-main">
                    The page you are looking for does not exist.
                </Heading>
            </Container>
        </main>
    )
}