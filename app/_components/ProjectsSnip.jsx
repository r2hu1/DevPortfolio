import Project from "./Project";

export default function ProjectsSnip() {
    const projects = [
        {
            title: "MySocials",
            alt: "fullstack linktree clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202024-01-02%20235105.png",
            url: "https://mysocialz.vercel.app/",
        },
        {
            title: "E-Store",
            alt: "fullstack ecommerce",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202024-01-01%20142513.png",
            url: "https://estorez.vercel.app/",
        },
        {
            title: "Car Showcase",
            alt: "car showcase",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-23%20221423.png",
            url: "https://car-showcase-two-kappa.vercel.app/"
        },
        {
            title: "Nike's Website",
            alt: "landing page",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-23%20144356.png",
            url: "https://nike-landing-page-smoky.vercel.app/"
        },
        {
            title: "Bytes Studio",
            alt: "agency website",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-23%20144516.png",
            url: "https://bytesstudio.vercel.app/"
        },
        {
            title: "Linktree Vanced",
            alt: "linktree clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-05%20205518.png",
            src: "https://profile.rahul.eu.org"
        },
        {
            title: "Srcimg",
            alt: "fullstack postimages.org clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-11%20133619.png",
            url: "https://srcimg.vercel.app/"
        },
        {
            title: "Sub4Url",
            alt: "fullstack urlshortner",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-11%20134038.png",
            url: "https://sub4url.vercel.app"
        },
        {
            title: "Drawit",
            alt: "excalidraw clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-05%20204746.png",
            url: "https://draw-it-orcin.vercel.app/"
        },
        {
            title: "Image Hosting",
            alt: "cloud storage",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-11%20133830.png",
            src: "https://sh2re.vercel.app"
        },
        {
            title: "BuyMeaTea",
            alt: "buymeacoffee clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-05%20205430.png",
            src: "https://pay.rahul.eu.org"
        },
    ];

    return (
        <div className=",d:px-20 lg:px-32 px-5">
            <div className='flex flex-wrap mb-10 gap-5 items-center justify-center'>
                {
                    projects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))
                }
            </div>
        </div>
    )
}