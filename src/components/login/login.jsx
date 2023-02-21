import { useState } from "react"
import styles from './login.module.css'

const Login = () => {
 const [login,SetLogin] = useState('')

 const logChange = (e) => {
    SetLogin(e.target.value)
 }

 const submitLog = (e) => {
    e.preventDefault()
    SetLogin()
    console.log(login);
 }

    return (
        <form onSubmit={submitLog}>
            <input className={styles.champ} value={login} onChange={logChange}></input>
            <button className={styles.champ}></button>
        </form>
    )
}

export default Login