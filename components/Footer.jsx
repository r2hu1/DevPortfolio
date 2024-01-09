import Link from "next/link";
import Logo from "./Logo";
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <footer className="grid gap-3 md:px-20 lg:px-32 px-8 py-10">
            <div>
                <Logo/>
                <p className="text-sm">Built by me, avilable on <a href="https://github.com/r2hu1" className="hover:underline hover:text-primary">GitHub</a><span className="text-primary">.</span></p>
            </div>
            <div className="flex gap-2 items-center -ml-1 bg-secondary rounded-full p-2 w-fit">
                <Link href="/" className="hover:text-primary"><GitHubLogoIcon className="h-4 w-4" /></Link>
                <Link href="/" className="hover:text-primary"><InstagramLogoIcon className="h-4 w-4" /></Link>
                <Link href="/" className="hover:text-primary"><TwitterLogoIcon className="h-4 w-4" /></Link>
            </div>
            <ul className="text-sm grid gap-1">
                <li className="hover:underline hover:text-primary"><Link href="/">Fix this web</Link></li>
                <li className="hover:underline hover:text-primary"><Link href="/">Report Issue</Link></li>
            </ul>
            <p className="text-xs"> ©{new Date().getFullYear()} <a href="https://github.com/r2hu1" className="hover:underline hover:text-primary">r2hu1</a> All Rights Reserved.</p>
        </footer>
    )
}