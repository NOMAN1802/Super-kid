import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Super Kid`;
    },[title])
};

export default useTitle;