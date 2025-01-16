import { useIsMobile } from '../hooks/use-mobile'

export default function Footer() {
    const isMobile = useIsMobile()

    return (
        <footer className={`bg-black text-white ${isMobile ? 'text-center' : 'text-left'} py-4`}>
            <div className="container mx-auto px-4">
                <p>&copy; 2025 Shivam Walia. All rights reserved.</p>
            </div>
        </footer>
    )
}

