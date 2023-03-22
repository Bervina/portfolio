import React from 'react';
import style from './Home.module.scss';
import HeaderHome from './HeaderHome';

const Home = () => {
  return (
    <>
      <HeaderHome/>
      <main className={style.main}>
        <div className={style.container}>
        <h2 className={style.h2}>Frontend</h2>
        <p className={style.p}>JavaScript, ReactJS, Redux, React-router-dom,
          HTML, CSS(sass),<br/> NPM, BootStrap, Yarn,
           StyledComponents</p>
        </div>
      </main>
    </>
  );
};

export default Home;
