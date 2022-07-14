import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import BlogList from '../../components/BlogList';
import { db } from '../../firebase/config';
import {collection, getDocs} from 'firebase/firestore'
import { useState, useEffect } from 'react';
export default function Home() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading(true);
        const ref=collection(db,'bloglar')
        getDocs(ref).then((snap)=>{
            // console.log(snap);

            if(snap.empty){
                setError('Bir Hata Oluştu');
                setLoading(false)
            }
            else{
                let sonuçlar=[];
                snap.forEach(doc=>{
                    sonuçlar.push({id:doc.id,...doc.data()})
                })
                    setData(sonuçlar)
                    setLoading(false)
            }
        }).catch(err=>{
            setError(err.message)
            setLoading(false)
        })
    },[])
    // const {data,loading,error}=useFetch('http://localhost:8000/bloglar');
    // console.log(data);
return (
    <div className='home'>
        {error&&<p className="error">{error}</p>}
        {loading && <p className="error">loading...</p>}
        {data && <BlogList bloglar={data}/>}
    </div>
)
}
