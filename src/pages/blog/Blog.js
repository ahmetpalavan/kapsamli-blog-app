import './Blog.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

import { useState, useEffect } from 'react';
import {getDoc,doc} from 'firebase/firestore';
import { db } from '../../firebase/config';

export default function Blog() {
    const {id}=useParams();
    // const url='http://localhost:8000/bloglar/'+id;

    // const{data:blog,loading,error}=useFetch(url)
    const{mode}=useTheme();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        const ref=doc(db, 'bloglar', id)
        getDoc(ref).then(doc=>{
            // console.log(doc.data());
            if(doc.exists){
                setLoading(false);
                setBlog(doc.data())
            }
            else{
                setLoading(false);
                setError('Verilere erişilemedi')
            }
        })
    },[id])
return (
    <div className={`blog ${mode}`}>
        {error && <p className='error'>{error}</p>}
        {loading && <p className='loading'>loading...</p>}
        {blog && (
            <>
                <h2 className='page-title'>{blog.baslik}</h2>
                <p className='time'>{blog.okunmaSuresi} okunma süresi</p>
                <ul>
                    {blog.kategoriler}
                </ul>
                <p className='info'>{blog.icerik}</p>
            </>
        )}
    </div>
)
}
