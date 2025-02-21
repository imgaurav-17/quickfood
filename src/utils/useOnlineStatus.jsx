import { useState, useEffect } from 'react'


const useOnlineStatus = () => {
    const [statusOnline, setStatusOnline] = useState(true);
    useEffect(()=>{
        window.addEventListener('online', () => setStatusOnline(true));

        window.addEventListener('offline', () => setStatusOnline(false));
    },[]);
  return statusOnline;
}

export default useOnlineStatus