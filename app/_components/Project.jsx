import { Button } from "@/components/ui/button";
import { Link2Icon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


export default function Project({ title, alt, image, description, url }) {
    return (
        <div className="border bg-background dark:bg-secondary max-w-fit rounded-md grid place-content-center mx-4">
            <div className="m-2 rounded-md relative border">
                <span className="absolute text-xs bg-primary text-white p-2 px-3 rounded-md bottom-3 left-3">{alt}</span>
                <img src={image} alt={title} className="w-full h-full max-w-[350px] max-h-[300px] rounded-md" />
            </div>
            <div className="flex items-center justify-between px-6 py-4 -mt-1">
                <h1 className="text-lg">{title}</h1>
                <Link href={url || "/"} target="_blank">
                    <Button size="icon"><ArrowUpRight className="h-4 w-4" /></Button>
                </Link>
            </div>
        </div>
    )
}