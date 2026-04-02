export default function PhoneCallButton() {
    const phoneNumber = "+919319931989";

    return (
        <a
            href={`tel:${phoneNumber}`}
            className="fixed bottom-24 right-6 z-[9999] group flex items-center justify-center"
            aria-label="Call us"
        >
            {/* Pulse Rings */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping"></span>
            <span className="absolute inline-flex h-14 w-14 rounded-full bg-blue-500 opacity-40 animate-pulse"></span>

            {/* Button Body */}
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-[0_10px_25px_-5px_#3b82f6aa] hover:shadow-[0_15px_35px_-5px_#3b82f6cc] transform hover:scale-110 transition-all duration-300 border-2 border-white/20">
                {/* Phone Icon SVG */}
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-3 py-1.5 bg-white text-blue-600 text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border-b-4 border-blue-600">
                Call Us
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
            </div>
        </a>
    );
}
