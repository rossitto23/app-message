import { useState } from "react";
import ListCategory from "../list-category/list-category";
import Login from "../login/login";
import styles from "./app-message.module.css";
import ListMessageCategory from "../list-message-category/list-message-category";

const AppMessage = () => {
  const [choixCategorie, setChoixCategorie] = useState(null);
  const[listMessage, setListMessage] = useState(null);
  const categorySelected = (id) => {
    setChoixCategorie(id);
    console.log(id);
  };

  const [logged, setLogged] = useState(null);
  const login = (data) => {
    setLogged(data); 
  };



  return (
    <div className={styles.border}>
      <div className={styles.main}>
        <div className={styles.ctn}>
          <h1 className={styles.titre}>Message App</h1>
        </div>
        { !logged && <Login onLogin = {login}/>}

        {(logged && !choixCategorie && !listMessage) && <ListCategory onCat={categorySelected} />}
        {/* {choixCategorie && <ListMessageCategory id={choixCategorie}/>} */}
        {/* <ListMessageCategory /> */}
        {choixCategorie && <ListMessageCategory categoryId={choixCategorie} />}
      </div>
    </div>
  );
};

export default AppMessage;
