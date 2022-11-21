import React from 'react';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onNavigate = (e) => {
    e.preventDefault();
    alert('Đùa thôi chớ em biết tên Giám đốc mà :))');
    navigate('../hpbd', { replace: false });
  };
  return (
    <div className={styles.container}>
      <label>Nhập tên: </label>
      <div className={styles.inputContainer}>
        <input placeholder="Giám đốc" name="name" id={styles.name}></input>
        <span>
          <button className={styles.next} onClick={(e) => onNavigate(e)}>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Login;
