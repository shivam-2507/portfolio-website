import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold transition-all duration-300 hover:scale-110 hover:text-white hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] inline-block">
              {/* Wrap name with mailto link */}
              <a href="mailto:shivam.walia@uwaterloo.ca" className="text-white font-style: italic">
                Shivam Walia
              </a>
            </h1>
            <p className="mt-2 text-gray-300 max-w-[55%] text-left">
              Mechatronics Engineering @UWaterloo. Passionate about robotics, embedded systems, and automation.
              Currently working with C++, Python, ROS, and ESP32.
            </p>
          </div>
          <div className="social-icons flex space-x-4 -translate-y-7">
            <Link
                href="https://www.linkedin.com/in/shivam-walia1/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 p-1 rounded-full hover:bg-[#0077b5]/10 hover:shadow-[0_0_15px_#0077b5]"
            >
              <Image
                  src="/linkedin-logo.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
              />
            </Link>
            <Link
                href="https://github.com/shivam-2507"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 p-1 rounded-full hover:bg-gray-100/10 hover:shadow-[0_0_15px_#ffffff]"
            >
              <Image
                  src="/github.png"
                  alt="GitHub"
                  width={32}
                  height={32}
              />
            </Link>
            <Link
                href="https://www.youtube.com/@Shivam-kx9ef"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 p-1 rounded-full hover:bg-[#ff0000]/10 hover:shadow-[0_0_15px_#ff0000]"
            >
              <Image
                  src="/youtube.png"
                  alt="YouTube"
                  width={32}
                  height={32}
              />
            </Link>
          </div>
        </div>
      </header>
  )
}