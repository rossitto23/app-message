import { useState,useEffect } from 'react'
import styles from './list-category.module.css'
import Categorie from './categorie'
import axios from 'axios';


// const Data= [{id:1, nom:'React', nbreMess: 12, lastMess : 1107110465663},{id:2, nom:'React 2', nbreMess: 2, lastMess : Date()}]

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