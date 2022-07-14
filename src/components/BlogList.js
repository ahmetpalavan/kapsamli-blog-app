import './BlogList.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import deleteIcon from '../assets/deleteIcon.svg'
import {db} from '../firebase/config'
import {deleteDoc,doc} from 'firebase/firestore';

export default function BlogList({bloglar}) {

    
    const {mode}=useTheme();
    const handleDelete= async(id)=>{
        console.log(id);
        const ref=doc(db,'bloglar',id);
        await deleteDoc(ref)
    }
        
    if(bloglar.length===0){
        return <div className='error'>Aranan Kelime Bulunamadı</div>
    }
return (
    <div className='blog-list'>
        {bloglar.map(blog=>(
            <div key={blog.id} className={`card ${mode}`}>
                <h3>{blog.baslik}</h3>
                <p>{blog.okunmaSuresi}</p>
                <div>{blog.icerik.substring(0,100)}...</div>
                <Link to={`/blog/${blog.id}`}>Daha Fazla Oku</Link>
                <img className='delete' onClick={()=>handleDelete(blog.id)}
                src={deleteIcon} alt='Yazı Sil'/>
            </div>
        ))}
    </div>
)
}
