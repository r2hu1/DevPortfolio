import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
    return (
        <div className="flex gap-2 items-center -ml-1 bg-secondary rounded-full p-2 w-fit">
            <Link href="https://github.com/r2hu1" className="hover:text-primary"><GitHubLogoIcon className="h-4 w-4" /></Link>
            <Link href="https://instagram.com/r.rah_ul" className="hover:text-primary"><InstagramLogoIcon className="h-4 w-4" /></Link>
            <Link href="https://x.com/r2hu1" className="hover:text-primary"><TwitterLogoIcon className="h-4 w-4" /></Link>
        </div>
    )
}