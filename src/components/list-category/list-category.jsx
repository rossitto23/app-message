import { useState,useEffect } from 'react'
import styles from './list-category.module.css'
import Categorie from './categorie'
import axios from 'axios';

const ListCategory = (props) => {

    const [data,setData] = useState(null)
    // UseEffect fetch
    useEffect(() => {
        axios.get('http://localhost:8080/api/subject/category').then(({data})=>{setData(data)})
    },[])
    return (
        
        <div>
            <ul className={styles.ul} >
                {data && data.map(cat=><Categorie key={cat.id} data={cat} choixCat={props.onCat}/>)}
            </ul>
        </div>
    )
}
export default ListCategory