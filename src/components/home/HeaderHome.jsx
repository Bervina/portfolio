import React from 'react';
import style from './Home.module.scss';
import CV from '../../fileCV/Resume Oleh Bervina (1).pdf'

const HeaderHome = () => {
  const saveCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Resume Oleh Bervina (1).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className={style.home}>
      <div className={style.card}>
        <h1>Hello, my name is <b className={style.b}>Oleh</b>
          <br/>a frontend developer
        </h1>
        <p>with passion for learning and creating.</p>
      </div>
      <div className={style.cardBtn}><button onClick={saveCV} className={style.btn}>DOWNLOAD CV</button></div>
    </div>
  );
};

export default HeaderHome;
