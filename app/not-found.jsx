import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return(
        <div className="h-[500px] grid place-content-center">
            <div>
                <h1 className="text-3xl font-bold">4<span className="text-primary">0</span>4 Not Found<span className="text-primary">.</span></h1>
                <p className="text-sm">This page does not exist<span className="text-primary">.</span></p>
                <Button className="mt-4" asChild><Link href="/">Go Home</Link></Button>
            </div>
        </div>
    )
}