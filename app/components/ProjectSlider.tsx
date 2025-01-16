'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with React and Node.js',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity tool for teams, built with Vue.js and Firebase',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'Real-time weather updates using React Native and OpenWeatherMap API',
    image: '/placeholder.svg?height=400&width=600',
  },
]

export default function ProjectSlider() {
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
      <div className="relative">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
              src={projects[currentProject].image || "/placeholder.svg"}
              alt={projects[currentProject].title}
              width={600}
              height={400}
              className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 text-white p-4">
            <h2 className="text-xl font-bold">{projects[currentProject].title}</h2>
            <p className="mt-2">{projects[currentProject].description}</p>
          </div>
        </div>
        <button
            onClick={prevProject}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-all"
        >
          &#8592;
        </button>
        <button
            onClick={nextProject}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-all"
        >
          &#8594;
        </button>
      </div>
  )
}

