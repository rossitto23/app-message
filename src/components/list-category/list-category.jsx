import styles from './list-category.module.css'
import Categorie from './categorie'

const Data= [{nom:'react', nbreMess: 12, lastMess : Date()}]

const ListCategory = (props) => {
    return (
        <div>
            <ul>
                {Data.map(cat=><Categorie data={cat} />)}
            </ul>
        </div>
    )
}

export default ListCategory