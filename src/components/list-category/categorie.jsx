import styles from './categorie.module.css'


const Categorie = ({data,choixCat}) => {
    // ci dessous transformer l'heure
    const heureMess = `${new Date(data.lastUpdate).getHours()}h${new Date(data.lastUpdate).getMinutes()}`

    return (
        <li onClick={()=>{choixCat(data.id)}} className={styles.liste}>
            <div className={styles.title} >
                <p className={styles.nom} >{data.name}</p> 
                <p className={styles.message}>{data.count} message(s) </p> 
            </div>
            <div className={styles.ctnHeure} >
                <p className={styles.heure}>Dernier message : {heureMess} </p>
            </div>
            
        </li>
    )
}

export default Categorie