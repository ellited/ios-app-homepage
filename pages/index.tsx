import styles from '../styles/Home.module.scss'
import Homepage from "../components/homepage";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Home() {
    return (
        <div className={styles.container}>
            <Meta/>
            <Homepage />
            <Footer />
        </div>
    )
}
