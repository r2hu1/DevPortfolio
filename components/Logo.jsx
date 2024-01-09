import Link from "next/link";

export default function Logo() {
    return(
        <Link href="/">
            <h1 className="md:text-4xl text-3xl font-bold select-none">R<span className="text-primary">.</span></h1>
        </Link>
    )
}