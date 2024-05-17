import styles from "@/app/page.module.css";

function PhotographersSection() {

    return (
        <div className={styles.photographersSection}>
            <h2 className={styles.photographersTitle}>Photographers</h2>
            <ul className={styles.photographersContainer}>
                <li className={styles.photographerCard}></li>
                <li className={styles.photographerCard}></li>
                <li className={styles.photographerCard}></li>
                <li className={styles.photographerCard}></li>
            </ul>
        </div>
    );
}

export default PhotographersSection;