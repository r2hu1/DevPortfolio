import Skills from "../_components/Skills";

export default function Page() {
    return (
        <div className="py-20 -mb-10">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">Skills<span className="text-primary">.</span></h1>
                <p className="text-xs">Some of my skills, i learnt in my journey of <br /> self thought coding<span className="text-primary">.</span></p>
            </div>
            <Skills />
        </div>
    )
}