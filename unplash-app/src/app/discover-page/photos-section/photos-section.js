import styles from "@/app/page.module.css";

function PhotosSection() {

    return (
        <div className={styles.photosSection}>
            <h2 className={styles.photosTitle}>Photos</h2>
            <ul className={styles.photosContainer}>
                <li className={styles.photosCard}></li>
            </ul>
        </div>
    );
}

export default PhotosSection;