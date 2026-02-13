import React, { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        // Add custom styling to hide Google branding (optional)
        const style = document.createElement('style');
        style.innerHTML = `
            /* Google Translate Widget Styling */
            #google_translate_element {
                position: fixed;
                top: 80px;
                right: 20px;
                z-index: 1000;
                background: rgba(255, 255, 255, 0.95);
                padding: 10px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            
            /* Hide Google branding */
            .goog-te-banner-frame {
                display: none !important;
            }
            
            .goog-te-gadget {
                font-family: inherit !important;
                font-size: 14px !important;
            }
            
            .goog-te-gadget-simple {
                background-color: transparent !important;
                border: none !important;
                padding: 0 !important;
            }
            
            /* Remove top frame */
            body {
                top: 0 !important;
            }
            
            /* Mobile responsive */
            @media (max-width: 768px) {
                #google_translate_element {
                    top: 60px;
                    right: 10px;
                    padding: 8px;
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div id="google_translate_element"></div>
    );
};

export default GoogleTranslate;
