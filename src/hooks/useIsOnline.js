import { useEffect, useState } from "react";

function useIsOnline() {
    
    const [isOnline, setisOnline] = useState(navigator.onLine)

    useEffect(() => {
        const offline = () => setisOnline(false)
        const online = () => setisOnline(true)

        window.addEventListener("offline", offline)
        window.addEventListener("online", online)

        return () => {
            window.removeEventListener("offline", offline)
            window.removeEventListener("online", online)
        }
    }, [])
    
    return isOnline
}
export default useIsOnline
