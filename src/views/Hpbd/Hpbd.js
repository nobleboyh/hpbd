import React from 'react';
import styles from './Hpbd.module.scss';
import images from '../../assets';
const Hpbd = () => {
  const onHpbdPresent = (e) => {
    e.preventDefault();
    alert('Do khoảng cách địa lý nên nợ quà nhé :)) \n Về Việt Nam hứa dẫn đi ăn cả Hà Nội (づ｡◕‿‿◕｡)づ');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.outside}>
          <div className={styles.front}>
            <p>Chúc mừng sinh nhật Giám đốc !!</p>
            <div className={styles.cake}>
              {/* Cake */}
              <img src={images.ava5} alt="van anh" className={styles.avatar} />
            </div>
          </div>
          <div className={styles.back}></div>
        </div>
        <div className={styles.inside}>
          <p>
            Chúc Giám đốc luôn xinh đẹp vui tươi và hoàn thành nhiệm kì thành công ha <br />
            (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
          </p>
          <button className={styles.present} onClick={(e) => onHpbdPresent(e)}>
            <h1>&#127873;</h1>
          </button>
        </div>
      </div>

      {/* FireWorks */}
      <div class={styles.firework} id={styles.firework1}>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
      </div>

      <div class={styles.firework} id={styles.firework2}>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
      </div>

      <div class={styles.firework} id={styles.firework3}>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
        <div class={styles.explosion}></div>
      </div>
    </div>
  );
};

export default Hpbd;
