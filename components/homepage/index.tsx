import styles from "../../styles/Home.module.scss";
import Link from "next/link";

function Homepage() {
    const linkToApp = "https://apps.apple.com/app/id1498416482";

    return <>
        <main className={styles.main}>

            <a href={linkToApp}>
                <img className={styles.appLogo}
                     src="/ios-marketing.jpeg"
                     alt="application logo"/>
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
                     src="/download-appstore-black.svg" alt="ABC Transport logo"/>
            </a>

            <div className={styles.grid}>
                <Link href="/terms">
                    <a className={styles.card}>
                        <h3>Terms of use &rarr;</h3>
                        <p>Our information about content, copyrights and Third-Party Links</p>
                    </a>
                </Link>

                <Link href="/contacts">
                    <a className={styles.card}>
                        <h3>Contact form &rarr;</h3>
                        <p>You can send message for communication with developer</p>
                    </a>
                </Link>

            </div>
        </main>
    </>
}

export default Homepage;
