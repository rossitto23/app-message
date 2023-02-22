import { useState } from "react";
import ListCategory from "../list-category/list-category";
import Login from "../login/login";
import styles from "./app-message.module.css";

const AppMessage = () => {
  const [choixCategorie, setChoixCategorie] = useState(null);
  const categorySelected = (id) => {
    setChoixCategorie(id);
    console.log(id);
  };

  const [logged, setLogged] = useState(null);
  const login = () => {
    setLogged(true);
  };

  return (
    <div className={styles.border}>
      <div className={styles.main}>
        <div className={styles.ctn}>
          <h1 className={styles.titre}>Message App</h1>
        </div>
        {/* <Login onLog = {login}/> */}
        {logged && <ListCategory onCat={categorySelected} />}
        {/* {choixCategorie && <ListMessageCategory id={choixCategorie}/>} */}
        {/* <ListMessageCategory /> */}
      </div>
    </div>
  );
};

export default AppMessage;
