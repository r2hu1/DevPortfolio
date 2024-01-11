import { Button } from "@/components/ui/button";
import { Link2Icon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


export default function Project({ title, alt, image, description, url }) {
    return (
        <div className="relative border bg-background dark:bg-secondary max-w-fit rounded-md grid place-content-center">
            <div className="p-1">
                <img className="w-full max-w-[340px] md:max-w-[300px] h-full rounded-md aspect-video" src={image} alt={alt} />
            </div>
            <div className="absolute bottom-[84px] left-3 grid gap-2">
                <span className="text-xs dark:bg-secondary bg-background p-2 px-3 rounded">{alt}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-4 mt-[5px]">
                <h1 className="text-lg">{title}</h1>
                <Button size="sm">
                    <Link href={url || "/"} target="_blank" className="flex items-center gap-1 justify-center">view <ArrowUpRight className="h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
    )
}