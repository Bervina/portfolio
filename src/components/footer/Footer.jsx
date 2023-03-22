import React from 'react';
import insagram from '../../image/icons/instagram.svg'
import linkenin from '../../image/icons/linkedIn.svg'
import gitHub from '../../image/icons/gitHub.svg'
import twitter from '../../image/icons/twitter.svg'
import style from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={style.image}>
      <a href="https://instagram.com/oleg_bervina?igshid=YmMyMTA2M2Y=" className={style.a}><img src={insagram} alt="Link"/></a>
      <a href="https://www.linkedin.com/in/oleg-bervina-2a5407267/" className={style.a}><img src={linkenin} alt="Link"/></a>
      <a href="https://github.com/Bervina?tab=repositories" className={style.a}><img src={gitHub} alt="Link"/></a>
      <a href="https://twitter.com/Bervina_O" className={style.a}><img src={twitter} alt="Link"/></a>
    </div>
  );
};

export default Footer;
