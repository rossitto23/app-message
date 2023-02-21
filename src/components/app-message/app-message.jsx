import { useState } from "react";
import ListCategory from "../list-category/list-category";
import styles from "./app-message.module.css"



const AppMessage = () => {

    const [choixCategorie, setChoixCategorie] = useState(null)
    const categorySelected = (id) => {
        setChoixCategorie(id)
        console.log(id);
    }

    return(
        <div className={styles.border}>
            <div className={styles.ctn} >
            <h1 className={styles.titre} >Message App</h1>
            </div>
        {/* <Login /> */}
        <ListCategory onCat = {categorySelected}/>
        {/* <ListMessageCategory /> */}
        </div>
    )
}

export default AppMessage;