import styles from '../../styles/BackHeader.module.scss';
import {useRouter} from "next/router";

const BackHeader = (props: { title: string; }) => {
    const router = useRouter();
    return <header className={styles.header}>
        <div className={styles.back} onClick={() => router.back()}>
            &larr; Back
        </div>
        <h1 className={styles.title}>
            {props.title}
        </h1>
        <div className={styles.spacer}></div>
    </header>
}

export default BackHeader;
