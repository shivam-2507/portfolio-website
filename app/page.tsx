'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import Header from './components/Header'
import ProjectSpotlight from './components/ProjectSpotlight'
import Footer from './components/footer'

export default function Home() {
    return (
        <LazyMotion features={domAnimation}>
            {/* Flexbox ensures footer stays at the bottom */}
            <div className="flex flex-col min-h-screen bg-black text-white">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="flex-grow container mx-auto px-4 py-12">
                    <ProjectSpotlight />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </LazyMotion>
    )
}