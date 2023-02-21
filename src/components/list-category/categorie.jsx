import styles from './categorie.module.css'

const Categorie = (props) => {
    // ci dessous transformer l'heure
    // const heureMess = 

    return (
        <li onClick={()=>{props.choixCat(props.data.id)}} className={styles.liste}>
            <div className={styles.title} >
                <p className={styles.nom} >{props.data.nom}</p> 
                <p className={styles.message}>{props.data.nbreMess} message(s) </p> 
            </div>
            <div>
                <p className={styles.heure}>Dernier message : {props.data.lastMess} </p>
            </div>
            
        </li>
    )
}

export default Categorie