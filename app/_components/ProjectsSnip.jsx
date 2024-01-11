"use client";
import { Button } from "@/components/ui/button";
import Project from "./Project";
import { useState } from "react";
import { projects } from "@/lib/projects";

export default function ProjectsSnip() {

    const [cate, setCate] = useState("");
    const [filters, setFilters] = useState([]);

    const handleFilter = (e) => {
        setCate(e.target.innerText);
        filters.length = 0;
        for (let i = 0; i < projects.length; i++) {
            if (e.target.innerText == projects[i].cate) {
                filters.push(projects[i]);
            }
        }
    };

    return (
        <div className="md:px-20 lg:px-32 px-5">
            <div className="flex flex-wrap gap-2 mb-6 px-6 items-center justify-center">
                <Button onClick={handleFilter} variant={cate != "reactjs" ? "secondary" : ""} size="sm" className="rounded-full text-xs">reactjs</Button>
                <Button onClick={handleFilter} variant={cate != "nextjs" ? "secondary" : ""} size="sm" className="rounded-full text-xs">nextjs</Button>
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