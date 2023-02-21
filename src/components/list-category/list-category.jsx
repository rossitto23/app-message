import styles from './list-category.module.css'
import Categorie from './categorie'

const Data= [{id:1, nom:'React', nbreMess: 12, lastMess : Date()},{id:2, nom:'React 2', nbreMess: 2, lastMess : Date()}]

const ListCategory = (props) => {
    return (
        <div>
            <ul className={styles.ul} >
                {Data.map(cat=><Categorie key={props.id} data={cat} choixCat={props.onCat} />)}
            </ul>
        </div>
    )
}

export default ListCategory