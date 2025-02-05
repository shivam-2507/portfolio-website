import { useIsMobile } from '../hooks/use-mobile'

export default function Footer() {
    const isMobile = useIsMobile()
    const lastUpdated = "February 4th, 2025"

    // Helper to calculate the time difference
    const lastUpdatedDate = new Date("February 4, 2025") // Adjust this to parse lastUpdated correctly
    const currentDate = new Date()
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(currentDate.getMonth() - 1)

    const isRecentUpdate = lastUpdatedDate >= oneMonthAgo

    return (
        <footer className={`bg-black text-white ${isMobile ? 'text-center' : 'text-left'} py-4`}>
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                <p>&copy; 2025 Shivam Walia.</p>
                <div className="flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Last updated on {lastUpdated}</span>
                    <div className={`w-2 h-2 rounded-full ${isRecentUpdate ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
            </div>
        </footer>
    )
}