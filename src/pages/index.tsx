import React from "react";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Perfil";

import styles from '../styles/pages/Home.module.css';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countedown } from "../components/Countedown";

import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Moviet</title>
      </Head>
      

      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>

          <Countedown/>
        </div>

        <div>

        </div>
      </section>
  </div>
      )
}
