import { useIsMobile } from '../hooks/use-mobile'

export default function Footer() {
    const isMobile = useIsMobile()
    const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <footer className={`bg-black text-white ${isMobile ? 'text-center' : 'text-left'} py-4`}>
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                <p>&copy; 2025 Shivam Walia.</p>
                <div className="flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Last updated on {lastUpdated}</span>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
            </div>
        </footer>
    )
}

