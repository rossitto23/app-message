import { useState } from "react";
import ListCategory from "../list-category/list-category";
// import Login from "../login/login";


import styles from "./app-message.module.css"



const AppMessage = () => {

    const [choixCategorie, setChoixCategorie] = useState(null)
    const categorySelected = (id) => {
        setChoixCategorie(id)
        console.log(id);
    }

    return(
        <div className={styles.border}>
            <div className={styles.main} >
                <div className={styles.ctn} >
                <h1 className={styles.titre} >Message App</h1>
                </div>
                    {/* <Login /> */}
                    <ListCategory onCat = {categorySelected}/>
                    {/* {choixCategorie && <ListMessageCategory id={choixCategorie}/>} */}
                    {/* <ListMessageCategory /> */}
            </div>
        </div>
    )
}

export default AppMessage;