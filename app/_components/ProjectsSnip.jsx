import { Button } from "@/components/ui/button";
import Project from "./Project";
import Link from "next/link";

export default function ProjectsSnip() {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <Project title={"MySocials"} alt={"fullstack linktree clone"} image={"https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202024-01-02%20235105.png"} />
            </div>
            <div className='flex justify-center items-center mt-6 mb-10'>
                <Button className="w-fit" asChild><Link href="/projects">All Projects</Link></Button>
            </div>
        </div>
    )
}