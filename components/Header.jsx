import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-6 px-8 md:px-20 lg:px-32">
            <div>
                <Logo />
            </div>
            <div className="flex gap-3 items-center justify-center">
                <ul className="md:flex gap-4 text-sm mr-5 hidden">
                    <li className="hover:underline underline-offset-4 hover:text-primary"><Link href="/">About</Link></li>
                    <li className="hover:underline underline-offset-4 hover:text-primary"><Link href="/">Skills</Link></li>
                    <li className="hover:underline underline-offset-4 hover:text-primary"><Link href="/">Projects</Link></li>
                </ul>

                <DropdownMenu>
                    <DropdownMenuTrigger className="md:hidden flex" asChild>
                        <Button variant="ghost" size="icon">
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="ml-[96px]">
                        <Link href="/"><DropdownMenuItem>About</DropdownMenuItem></Link>
                        <Link href="/"><DropdownMenuItem>Skills</DropdownMenuItem></Link>
                        <Link href="/"><DropdownMenuItem>Projects</DropdownMenuItem></Link>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button asChild>
                    <Link href="/">Contact Me</Link>
                </Button>
                <ModeToggle />
            </div>
        </header>
    )
}