import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return(
        <div className="h-[400px] grid place-content-center">
            <div className="border px-4 py-6 rounded-md w-[300px]">
                <h1 className="text-3xl font-bold">404 Not Found<span className="text-primary">.</span></h1>
                <p className="text-sm">This page does not exist<span className="text-primary">.</span></p>
                <Button className="mt-4" asChild><Link href="/">Go Home</Link></Button>
            </div>
        </div>
    )
}