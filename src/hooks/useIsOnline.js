import { useEffect, useState } from "react";

function useIsOnline() {
    
    const [isOnline, setisOnline] = useState(navigator.onLine)

    const handleRetry = () => {
        const status = navigator.onLine
        console.log("status is:", status);
        
        setisOnline(status)
    }

    useEffect(() => {
        const offline = () => setisOnline(false)

        window.addEventListener("offline", offline)
        
        return () => {
            window.removeEventListener("offline", offline)
        }
    }, [])
    
    return {isOnline, handleRetry}
}
export default useIsOnline
