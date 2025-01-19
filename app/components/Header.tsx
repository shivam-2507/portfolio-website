import Link from 'next/link'
import { useIsMobile } from '../hooks/use-mobile'
import { Linkedin, Github, Youtube, Mail } from 'lucide-react'

export default function Header() {
  const isMobile = useIsMobile()

  return (
      <header className="bg-black text-white py-6">
        <div className={`container mx-auto px-4 ${isMobile ? 'flex flex-col items-center' : 'flex justify-between items-center'}`}>
          <div className={`${isMobile ? 'text-center mb-4' : ''}`}>
            <h1 className="text-3xl font-bold transition-all duration-300 hover:scale-110 hover:text-white hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] inline-block">
              Shivam Walia
            </h1>
            <p className={`mt-2 text-gray-300 ${isMobile ? 'w-full' : 'max-w-[55%]'} text-left`}>
              Mechatronics Engineering @UWaterloo. Passionate about robotics, embedded systems, and automation.
              Currently working with C++, Python, ROS, and ESP32.
            </p>
          </div>
          <div className={`social-icons flex space-x-4 ${isMobile ? 'mt-4' : '-translate-y-7'}`}>
            <Link
                href="mailto:shivam.walia@uwaterloo.ca"
                className="transition-all duration-300 hover:scale-110 p-1 rounded-full"
            >
              <Mail className="w-8 h-8 text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </Link>
            <Link
                href="https://www.linkedin.com/in/shivam-walia1/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 p-1 rounded-full"
            >
              <Linkedin className="w-8 h-8 text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </Link>
            <Link
                href="https://github.com/shivam-2507"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 p-1 rounded-full"
            >
              <Github className="w-8 h-8 text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </Link>
            <Link
                href="https://www.youtube.com/@Shivam-kx9ef"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 p-1 rounded-full"
            >
              <Youtube className="w-8 h-8 text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </Link>
          </div>
        </div>
      </header>
  )
}

