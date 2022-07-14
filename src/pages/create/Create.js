import { useState,useRef,useEffect } from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

import { db } from '../../firebase/config'
import { addDoc,collection } from 'firebase/firestore'

export default function Create() {  


    const{postData,data,error}=useFetch('http://localhost:8000/bloglar','POST')

    const [baslik, setBaslik] = useState('')
    const [icerik, setIcerik] = useState('')
    const [okunmaSuresi, setOkunmaSuresi] = useState('')
    
    const [yeniKategori, setYeniKategori] = useState('')
    const [kategoriler, setKategoriler] = useState([])
    const kategoriInput=useRef(null)
    const{mode}=useTheme();
    const history=useHistory()
    const handleSubmit = async(e) => {
    e.preventDefault()
    // console.log(baslik, icerik, okunmaSuresi,kategoriler)
    // postData({baslik,kategoriler,icerik,okunmaSuresi:okunmaSuresi+ 'dakika'})
    const doc=({baslik,kategoriler,icerik,okunmaSuresi:okunmaSuresi+ 'dakika'})
    const ref=collection(db,'bloglar')
    try {
        await addDoc(ref,{
            ...doc
            
        })
        history.push('/')
    } catch (error) {
        console.log(error);
    }
    }
    const handleAdd =(e)=>{
        e.preventDefault()
        const yKAt=yeniKategori.trim();
        if(yKAt && !kategoriler.includes(yKAt)){
            setKategoriler(oKat=>[...oKat, yeniKategori])
        }
        setYeniKategori('')
        kategoriInput.current.focus()
    }
    // useEffect(()=>{
    //     if(data){
    //         history.push('/')
    //     }
    // },[data,history])
    return (
    <div className={`create ${mode}`}>
        <h2 className="page-title">Yeni Yazı</h2>
        <form onSubmit={handleSubmit}>

        <label>
            <span>Yazı Başlık:</span>
            <input 
            type="text" 
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
            required
            />
        </label>

            <label>
                <span>Yazı Kategorileri:</span>
                <div className='categories'>
                    <input type="text" onChange={(e)=>setYeniKategori(e.target.value)} value={yeniKategori} ref={kategoriInput}/>
                    <button onClick={handleAdd} className='btnAdd btn'>EKLE</button>
                </div>
            </label>
            <p>Kategoriler: <span className='list'>{kategoriler.map(i => <em key={i}>{i},</em>)}</span></p>
        <label>
            <span>Yazı İçerik:</span>
            <textarea 
            onChange={(e) => setIcerik(e.target.value)}
            value={icerik}
			rows={5}
            required
            />
        </label>

        <label>
            <span>Okunma Süresi:</span>
            <input 
            type="number" 
            onChange={(e) => setOkunmaSuresi(e.target.value)}
            value={okunmaSuresi}
            required 
            />
        </label>

        <button className="btn">Oluştur</button>
        </form>
    </div>
    )
}