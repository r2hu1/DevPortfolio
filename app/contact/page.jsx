import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
    return (
        <div className="py-20">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">Contact Me<span className="text-primary">.</span></h1>
                <p className="text-xs"> Feel free to contact me if you have any <br /> questions or works<span className="text-primary">.</span></p>
            </div>
            <form method="post" className="max-w-md mx-auto grid gap-2 px-6">
                <Label className="mt-3" htmlFor="name">Full Name</Label>
                <Input autocomplete="off" id="name" type="text" placeholder="John Deo" />
                <Label className="mt-3" htmlFor="email">Email</Label>
                <Input autocomplete="off" id="email" type="email" placeholder="john@deo.com" />
                <Label className="mt-3" htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" autocomplete="off" id="message" placeholder="I wanna hire yo.."></Textarea>
                <Button className="mt-4" type="submit">Send</Button>
            </form>
        </div>
    )
}