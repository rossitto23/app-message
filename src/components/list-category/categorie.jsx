import styles from './categorie.module.css'


const Categorie = (data) => {
    // ci dessous transformer l'heure
    const heureMess = `${new Date(data.data.lastUpdate).getHours()}h${new Date(data.data.lastUpdate).getMinutes()}`

    return (
        <li onClick={()=>{data.data.choixCat(data.data.id)}} className={styles.liste}>
            <div className={styles.title} >
                <p className={styles.nom} >{data.data.name}</p> 
                <p className={styles.message}>{data.data.count} message(s) </p> 
            </div>
            <div className={styles.ctnHeure} >
                <p className={styles.heure}>Dernier message : {heureMess} </p>
            </div>
            
        </li>
    )
}

export default Categorie