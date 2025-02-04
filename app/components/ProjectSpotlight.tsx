"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "../hooks/use-mobile"

const projects = [
  {
    id: 1,
    title: "ESP32 Temperature and Humidity Monitoring System",
    description: [
      "Developed a temperature and humidity monitoring system using an ESP32 microcontroller, integrating real-time data visualization and fan speed control through a SwiftUI mobile app with REST communication and JSON serialization.",
      "Designed a dynamic SwiftUI app featuring tab navigation, real-time sensor value displays, an interactive fan speed slider with animations, and dark mode support, providing a user-friendly interface.",
      "Implemented FreeRTOS on the ESP32 for multitasking, enabling concurrent execution of Wi-Fi connectivity, DHT11 sensor readings, LCD updates, and PWM-based motor speed control for efficient system performance.",
      "Engineered a hybrid feedback system for real-time fan speed adjustments, ensuring precise temperature control, while optimizing the C++ firmware for low-latency sensor data acquisition and reliable motor control.",
      <a
          href="https://github.com/shivam-2507/ESP32-Weather-Station"
          target="_blank"
          className="text-blue-600 underline hover:scale-150 hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        Code available here.
      </a>,
      <a
          href="https://www.youtube.com/watch?v=gV-9aD9GX9c&ab_channel=Shivam"
          target="_blank"
          className="text-blue-600 underline hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        Video demo available here.
      </a>,
    ],
    image: "Screenshot of the App (1).png",
  },
  {
    id: 2,
    title: "FIRST Tech Challenge Robot",
    description: [
      "Developed autonomous and teleoperated OpModes for an FTC robot using the FTC SDK within Android Studio, integrating motor control, sensor data processing, and game strategy logic for precise robot movement and efficient gameplay execution.",
      "Implemented computer vision tasks with OpenCV, detecting game elements and assisting in robot alignment during autonomous periods, enhancing field performance and accuracy.",
      "Designed and integrated algorithms like PID-based motion control and game element manipulation, ensuring reliability and consistent robot performance in competition scenarios.",
      "Modeled and planned the entire robot’s mechanical base in SolidWorks for easy assembly and created a claw design.",
      <a
          href="https://cad.onshape.com/documents/b78b5554ab246ee5d90f5a28/w/0f3e5d2f1fb4d0e2f5aa764f/e/b5e66b9cff10db37914cf693"
          target="_blank"
          className="text-blue-600 underline hover:scale-150 hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        Claw model here
      </a>,
      <a
          href="https://github.com/shivam-2507/FTC24226Robotics"
          target="_blank"
          className="text-blue-600 underline hover:scale-150 hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        Code available here
      </a>,
    ],
    image: "FTC_Image_1-min.png",
  },
  {
    id: 3,
    title: "Block Sorting and Collection Robot",
    description: [
      "Coded an interactive user menu in RobotC, developing an on-brick interface for selecting the target block color (Red, Blue, Yellow, Green) and block count (1–9), with real-time feedback displayed on the EV3 screen.",
      "Integrated the EV3 IR sensor for block detection and beacon tracking, a multiplexer-driven color sensor for block sorting, and a touch sensor for accurate block grasping during collection.",
      "Programmed the robot for autonomous block searching using rotational scanning, precise driving toward detected blocks, and returning to the base with IR beacon guidance.",
      "Made a CAD model of a claw in OnShape and 3D printed it to house the servos and sensors used in robot operation, ensuring secure block grasping, color validation, and release at the base with minimal user input.",
      <a
          href="https://cad.onshape.com/documents/b78b5554ab246ee5d90f5a28/w/0f3e5d2f1fb4d0e2f5aa764f/e/b5e66b9cff10db37914cf693"
          target="_blank"
          className="text-blue-600 underline hover:scale-150 hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        CAD Model
      </a>,
      <a
          href="https://github.com/shivam-2507/mechatronics-robot-c-class-project-1A"
          target="_blank"
          className="text-blue-600 underline hover:scale-150 hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        Code available here
      </a>,
    ],
    image: "Robot View 2-min.png",
  },
  {
    id: 4,
    title: "Robotic Arm",
    description: [
      "Built a robotic arm on a strict $80 budget, showcasing innovation and resourcefulness. The project’s success earned a feature in a CTV News article.",
      "Utilized a Logitech controller for robotic arm operation, ensuring seamless control during high-pressure tasks, including sorting red and orange balls.",
      "Programmed the arm’s control system in C++, leveraging the ESP32 microcontroller for efficient motor control and real-time feedback.",
      "Integrated overshoot correction, fine movement adjustments, and safety measures to enhance operator precision, enabling reliable sorting of red and orange balls.",
      "Created a CAD model for a rotating disk plate in SolidWorks to enable arm rotation, optimizing the robotic arm’s functionality.",
      <a
          href="https://grabcad.com/library/apega-rotating-disc-1"
          target="_blank"
          className="text-blue-600 underline hover:scale-150 hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        CAD Model avaliable here
      </a>,
      <a
          href="https://drive.google.com/file/d/127ZGrxaja8zKIWOa_CNgbDYacNtWknrk/view?usp=sharing"
          target="_blank"
          className="text-blue-600 underline hover:scale-150 hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        Video demo avaliable here
      </a>,
    ],
    image: "Apega Robot 1-min.png",
  },
  {
    id: 5,
    title: "CrisisCompass",
    description: [
      "Built a full-stack web application, “CrisisCompass,” to rank and display emergency incidents based on severity and trustworthiness. By analyzing words in an article, the application sorts events that require the most assistance.",
      "Developed the backend with Python and Flask to scrape data from URLs, evaluate incidents using predefined keywords, and assign priority rankings. Used spaCy for natural language processing to extract keywords, locations, and analyze context.",
      "Designed an interactive interface with React.js and Material-UI, enabling users to input URLs, view ranked incidents, and explore details such as severity, trust score, and location.",
      "Dynamic features like live updates to incident rankings, sorting by severity, and indicators such as emojis and color-coded badges for better usability.",
      <a
          href="https://github.com/shivam-2507/Crisis-Compass"
          target="_blank"
          className="text-blue-600 underline hover:scale-150 hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        Code avaliable here
      </a>,
    ],
    image: "download.gif",
  },
  {
    id: 6,
    title: "Autonomous Path Finding Robot",
    description: [
      "Developed an autonomous path-finding robot capable of navigating a maze using color and ultrasonic sensors; implemented a differential drive system using robot kinematics for precise movement control.",
      "Designed and programmed navigation algorithms in C++ with PlatformIO on the Arduino Uno R4 Minima, incorporating sensor-based obstacle detection and path adjustments for real-time decision-making.",
      "Integrated dynamic data structures, such as sequential lists, to manage and analyze sensor inputs, optimizing decision-making for efficient maze navigation.",
      "Managed circuit wiring on a breadboard, incorporating motor drivers, color and ultrasonic sensors, and other electronic components, while applying electrical engineering principles to ensure proper power management",
      <a
          href="https://github.com/shivam-2507/utra_hacks"
          target="_blank"
          className="text-blue-600 underline hover:scale-150 hover:shadow-lg hover:text-purple-400"
          rel="noreferrer"
      >
        Code avaliable here
      </a>,
    ],
    image: "utra_hacks-min.png",
  },
]

export default function ProjectSpotlight() {
  const isMobile = useIsMobile()
  const [currentProject, setCurrentProject] = useState(0)
  const [lastManualChange, setLastManualChange] = useState(0)
  const [avgColor, setAvgColor] = useState("rgba(0, 0, 0, 0.3)")
  const imageRef = useRef<HTMLImageElement>(null)

  const calculateAverageColor = (img: HTMLImageElement) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return "rgba(0, 0, 0, 0.3)"

    const width = img.width
    const height = img.height
    canvas.width = width
    canvas.height = height
    ctx.drawImage(img, 0, 0, width, height)

    const edgePixels = [
      ...ctx.getImageData(0, 0, width, 1).data,
      ...ctx.getImageData(0, height - 1, width, 1).data,
      ...ctx.getImageData(0, 0, 1, height).data,
      ...ctx.getImageData(width - 1, 0, 1, height).data,
    ]

    let r = 0,
        g = 0,
        b = 0
    for (let i = 0; i < edgePixels.length; i += 4) {
      r += edgePixels[i]
      g += edgePixels[i + 1]
      b += edgePixels[i + 2]
    }

    const pixelCount = edgePixels.length / 4
    r = Math.round(r / pixelCount)
    g = Math.round(g / pixelCount)
    b = Math.round(b / pixelCount)

    return `rgba(${r}, ${g}, ${b}, 0.5)`
  }

  const changeProject = useCallback((direction: "next" | "prev") => {
    setCurrentProject((prev) => {
      if (direction === "next") {
        return (prev + 1) % projects.length
      } else {
        return (prev - 1 + projects.length) % projects.length
      }
    })
    setLastManualChange(Date.now())
  }, [])

  const nextProject = useCallback(() => changeProject("next"), [changeProject])
  const prevProject = useCallback(() => changeProject("prev"), [changeProject])

  const autoScrollToNextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }, [])

  useEffect(() => {
    const autoScrollInterval = 7000 // 7 seconds
    const manualPauseDuration = 60000 // 1 minute

    const timer = setInterval(() => {
      const currentTime = Date.now()
      if (currentTime - lastManualChange >= manualPauseDuration) {
        autoScrollToNextProject()
      }
    }, autoScrollInterval)

    return () => clearInterval(timer)
  }, [lastManualChange, autoScrollToNextProject])

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setAvgColor(calculateAverageColor(imageRef.current))
    } else if (imageRef.current) {
      imageRef.current.onload = () => setAvgColor(calculateAverageColor(imageRef.current!))
    }
  }, [currentProject])

  return (
      <div className={`space-y-8 ${isMobile ? "text-center" : ""}`}>
        <div className={`flex ${isMobile ? "flex-col items-center" : "flex-row"} items-start gap-8 list-inside`}>
          <AnimatePresence mode="wait">
            <motion.div
                key={currentProject}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full lg:w-1/2"
            >
              <Image
                  ref={imageRef}
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  width={300}
                  height={300}
                  className={`w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:shadow-[0px_4px_16px_${avgColor}] ${!isMobile && currentProject === 4 ? "transform translate-y-13" : ""} ${!isMobile && currentProject === 4 ? "transform translate-y-14" : ""} ${!isMobile && currentProject === 1 ? "transform -translate-y-4" : ""} ${!isMobile && currentProject === 3 ? "transform translate-y-10" : ""}`}
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
                key={currentProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`w-full ${isMobile ? "text-center" : "lg:w-1/2"} space-y-4`}
            >
              <h2 className="text-3xl font-bold transition-all duration-300 hover:scale-105 hover:text-white hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] inline-block">{projects[currentProject].title }</h2>
              <ul className={`${isMobile ? "list-none pl-0" : "list-disc pl-5"}`}>
                {projects[currentProject].description.map((point, index) => (
                    <li key={index} className={`mb-2 ${isMobile ? "text-center" : ""}`}>
                      {point}
                    </li>
                ))}
              </ul>
              <div
                  className={`flex ${isMobile ? "flex-col items-center" : "flex-row justify-between items-center"} space-y-2 md:space-y-0 pt-4`}
              >
                <div
                    className={`flex ${isMobile ? "flex-col w-full" : "flex-row"} space-x-0 space-y-2 md:space-y-0 md:space-x-4`}
                >
                  <Button
                      onClick={prevProject}
                      variant="outline"
                      className={`bg-black transition-all duration-300 hover:shadow-lg hover:shadow-white/25 hover:scale-105 ${isMobile ? "w-full" : ""}`}
                  >
                    Previous Project
                  </Button>
                  <Button
                      onClick={nextProject}
                      variant="outline"
                      className={`bg-black transition-all duration-300 hover:shadow-lg hover:shadow-white/25 hover:scale-105 ${isMobile ? "w-full" : ""}`}
                  >
                    Next Project
                  </Button>
                </div>
                <div className="text-sm text-gray-400">
                  {currentProject + 1} of {projects.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
  )
}