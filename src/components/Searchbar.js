import './Searchbar.css'
import { useState } from "react";
import { useHistory } from "react-router-dom";



export default function Searchbar() {
    const [kelime, setKelime] = useState('');
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        history.push(`/search?q=${kelime}`)
    }
return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <input placeholder='Aranacak Kelime' id='search' type='text' onChange={
                (e)=>setKelime(e.target.value)
            }required/>
        </form>
    </div>
)
}
