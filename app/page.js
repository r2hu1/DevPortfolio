import { projects } from '@/lib/projects'
import Hero from './_components/Hero'
import Project from './_components/Project'
import ProjectsSnip from './_components/ProjectsSnip'
import Skills from './_components/Skills'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='mb-20'>
      <Hero />
      
      <div className="text-center mb-0 mt-7">
        <h1 className="text-xl font-bold">Skills<span className="text-primary">.</span></h1>
        <p className='text-xs'>Some of my skills i learnt in my journey of <br /> self though coding<span className="text-primary">.</span></p>
      </div>
      
      <Skills />
      
      <div className="text-center mb-5">
        <h1 className="text-xl font-bold">Projects<span className="text-primary">.</span></h1>
        <p className='text-xs'>Some of my projects i built, click view all <br /> for all projects<span className="text-primary">.</span></p>
      </div>
      
      <div className='flex gap-2 flex-wrap items-center justify-center'>
        <Project {...projects[Math.floor(Math.random() * projects.length)]} />
        <Project {...projects[Math.floor(Math.random() * projects.length)]} />
      </div>

      <div className='grid place-content-center mt-10'>
        <Button asChild variant="secondary"><Link href="/projects">View All Projects</Link></Button>
      </div>
    </main>
  )
}
