import Link from "next/link";

export default function Logo() {
    return(
        <Link href="/">
            <h1 className="text-4xl font-bold select-none">R<span className="text-primary">.</span></h1>
        </Link>
    )
}