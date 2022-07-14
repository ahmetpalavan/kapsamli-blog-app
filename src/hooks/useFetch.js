import { useState, useEffect } from "react"

export const useFetch = (url,method="GET") => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [options, setOptions] = useState(null)
    const postData=(data)=>{
        setOptions({
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }
useEffect(() => {
    const controller = new AbortController()
    const fetchData = async (fetchOptions) => {
        setLoading(true)
    try {
        const res = await fetch(url, {...fetchOptions, signal: controller.signal })
        if(!res.ok) {
        throw new Error(res.statusText)
        }
        const data = await res.json()
        setLoading(false)
        setData(data)
        setError(null)
    } catch (err) {
        if (err.name === "AbortError") {
        console.log("veri çekme işlemi iptal edildi")
        } else {
        setLoading(false)
        setError('veriler çekilemedi')
        }
    }
    }
    if(method==="GET" ){
        fetchData()
    }

    if(method==="POST" && options){
        fetchData(options)
    }
    return () => {
    controller.abort()
    }
}, [url,method,options])
return { data, loading,error,postData }
}
