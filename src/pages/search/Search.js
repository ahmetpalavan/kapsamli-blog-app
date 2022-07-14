import './Search.css';
import { useFetch } from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import BlogList from '../../components/BlogList';
export default function Search() {

    
    
    const queryString= useLocation().search;
    const queryParams=new URLSearchParams(queryString);
    const query=queryParams.get('q')
    const url='http://localhost:8000/bloglar?q=' +query
    const {error,loading,data}=useFetch(url)
return (
    <div>
        <h2 className='page-title'>Aranan Kelime "{query}"</h2>
        {error && <p className='error'>{error}</p>}
        {loading && <p className='loading'> Yükleniyor...</p>}
        {data && <BlogList bloglar={data}/>}
    </div>
)
}
