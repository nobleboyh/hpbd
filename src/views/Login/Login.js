import React from 'react'
import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = () => {
  return (
    <div className={styles.container}>
      <label>Nhập tên: </label>
      <div>
        <input placeholder='Bui Hoang' name='name' id={styles.name} ></input>
        <span><FontAwesomeIcon icon='face-angry'></FontAwesomeIcon></span>
      </div>
    </div>
  )
}

export default Login