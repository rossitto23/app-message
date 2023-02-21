import styles from './categorie.module.css'

const Categorie = (props) => {
    // ci dessous transformer l'heure
    const heureMess = `${new Date(props.data.lastMess).getHours()}h${new Date(props.data.lastMess).getMinutes()}`

    return (
        <li onClick={()=>{props.choixCat(props.data.id)}} className={styles.liste}>
            <div className={styles.title} >
                <p className={styles.nom} >{props.data.nom}</p> 
                <p className={styles.message}>{props.data.nbreMess} message(s) </p> 
            </div>
            <div className={styles.ctnHeure} >
                <p className={styles.heure}>Dernier message : {heureMess} </p>
            </div>
            
        </li>
    )
}

export default Categorie