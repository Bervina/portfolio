import React from 'react';
import style from './Contacts.module.scss';

const Contacts = () => {
  return (
    <main>
      <div className={style.container}>
        <h1>Contacts</h1>
        <h2>Location</h2>
        <p>Ukraine, Dnipro</p>
        <h2>Telegram / Viber</h2>
        <p>
          <a href="tel:+380732159800">+3(073)215-98-00</a>
        </p>
        <h2>Email</h2>

          <p>
            olegbervina1995@gmail.com
          </p>

      </div>
    </main>
  );
};

export default Contacts;
