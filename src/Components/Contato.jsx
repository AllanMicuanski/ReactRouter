import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animaLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>allanmicuanski@gmail.com</li>
          <li>(47)99936-3597</li>
          <li>Joinville - SC</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
