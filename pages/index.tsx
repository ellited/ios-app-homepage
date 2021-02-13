import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const linkToApp = "https://apps.apple.com/app/id1498416482";
  return (
    <div className={styles.container}>
      <Head>
        <title>ABC Transport</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <a href={linkToApp}>
          <img className={styles.appLogo}
             src="/ios-marketing.jpeg" alt="application logo"/>
        </a>

        <h1 className={styles.title}>
          <a href={linkToApp}> ABC Transport </a>
        </h1>

          <p className={styles.description}>
            One of the best way to learn{' '}
            <code className={styles.code}>English</code>
          </p>

        <a href={linkToApp}>
          <img className={styles.appstore}
               src="/download-appstore-black.svg" alt="application logo"/>
        </a>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Terms of use &rarr;</h3>
            <p>Our information about content, copyrights and Third-Party Links</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Contact form &rarr;</h3>
            <p>You can send message for communication with developer</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        All rights reserved © Elizaveta Rudenko
      </footer>
    </div>
  )
}
