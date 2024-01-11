"use client";
import { Button } from "@/components/ui/button";
import Project from "./Project";
import { useState } from "react";

export default function ProjectsSnip() {
    const projects = [
        {
            title: "MySocials",
            alt: "fullstack linktree clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202024-01-02%20235105.png",
            url: "https://mysocialz.vercel.app/",
            cate: "nextjs"
        },
        {
            title: "E-Store",
            alt: "fullstack ecommerce",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202024-01-01%20142513.png",
            url: "https://estorez.vercel.app/",
            cate: "nextjs"
        },
        {
            title: "Car Showcase",
            alt: "car showcase",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-23%20221423.png",
            url: "https://car-showcase-two-kappa.vercel.app/",
            cate: "nextjs"
        },
        {
            title: "Nike's Website",
            alt: "landing page",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-23%20144356.png",
            url: "https://nike-landing-page-smoky.vercel.app/",
            cate: "react"
        },
        {
            title: "Bytes Studio",
            alt: "agency website",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-23%20144516.png",
            url: "https://bytesstudio.vercel.app/",
            cate: "nextjs"
        },
        {
            title: "Linktree Vanced",
            alt: "linktree clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-05%20205518.png",
            url: "https://profile.rahul.eu.org",
            cate: "html/css"
        },
        {
            title: "Srcimg",
            alt: "fullstack postimages.org clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-11%20133619.png",
            url: "https://srcimg.vercel.app/",
            cate: "nextjs"
        },
        {
            title: "Sub4Url",
            alt: "fullstack urlshortner",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-11%20134038.png",
            url: "https://sub4url.vercel.app",
            cate: "nextjs"
        },
        {
            title: "Drawit",
            alt: "excalidraw clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-05%20204746.png",
            url: "https://draw-it-orcin.vercel.app/",
            cate: "react"
        },
        {
            title: "Image Hosting",
            alt: "cloud storage",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-11%20133830.png",
            url: "https://sh2re.vercel.app",
            cate: "nextjs"
        },
        {
            title: "BuyMeaTea",
            alt: "buymeacoffee clone",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/Screenshot%202023-12-05%20205430.png",
            url: "https://pay.rahul.eu.org",
            cate: "html/css"
        },
        {
            title: "Cart.JS",
            alt: "module",
            image: "https://raw.githubusercontent.com/r2hu1/s2lls/main/src/cartjs.png",
            url: "https://github.com/r2hu1/cart.js",
            cate: "module"
        }
    ];

    const [cate, setCate] = useState("");
    const [filters, setFilters] = useState([]);

    const handleFilter = (e) => {
        setCate(e.target.innerText);
        filters.length = 0;
        for (let i = 0; i < projects.length; i++) {
            if (e.target.innerText == projects[i].cate) {
                filters.push(projects[i]);
                console.log(filters);
            }
        }
    };

    return (
        <div className="md:px-20 lg:px-32 px-5">
            <div className="flex gap-2 mb-6 px-6 items-center justify-center">
                <Button onClick={handleFilter} variant={cate != "nextjs" ? "secondary" : ""} size="sm" className="rounded-full text-xs">nextjs</Button>
                <Button onClick={handleFilter} variant={cate != "react" ? "secondary" : ""} size="sm" className="rounded-full text-xs">react</Button>
                <Button onClick={handleFilter} variant={cate != "html/css" ? "secondary" : ""} size="sm" className="rounded-full text-xs">html/css</Button>
                <Button onClick={handleFilter} variant={cate != "module" ? "secondary" : ""} size="sm" className="rounded-full text-xs">module</Button>
            </div>
            <div className='flex flex-wrap mb-10 gap-5 items-center justify-center'>
                {!cate ?
                    projects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))
                    :
                    filters.map((project, index) => (
                        <Project key={index} {...project} />
                    ))
                }
            </div>
        </div>
    )
}