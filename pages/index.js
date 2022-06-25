import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Parker Dinsdale</title>
        <meta name="description" content="Parker Dinsdale's personal site. Might suck but eh oh well." />
        <link rel="icon" href="/pdicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Parker Dinsdale
        </h1>

        <p className={styles.description}>
          Work in progress... This might suck...
        </p>
      </main>
    </div>
  )
}
