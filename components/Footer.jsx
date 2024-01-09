import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return(
        <footer className="grid gap-3 md:px-20 lg:px-32 px-8 py-10">
            <ul className="text-sm grid gap-1">
                <li className="hover:underline hover:text-primary"><Link href="/">Fix this web</Link></li>
                <li className="hover:underline hover:text-primary"><Link href="/">Report Issue</Link></li>
            </ul>
            <p className="text-xs"> ©{new Date().getFullYear()} <a href="https://github.com/r2hu1" className="hover:underline hover:text-primary">r2hu1</a> All Rights Reserved.</p>
            
        </footer>
    )
}