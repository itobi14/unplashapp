import styles from "@/app/page.module.css";

function DetailBar() {

    return (
        <div className={styles.detailBarContainer}>
            <div className={styles.detailBar}>
                <div className={styles.detailBarImg}></div>
                <div className={styles.detailUserContainer}>
                    <h2 className={styles.detailTitle}>Leaves with super minimal background</h2>
                    <div className={styles.detailUserWrapper}>
                        <div className={styles.detailUserImg}></div>
                        <h2 className={styles.detailUserName}>Ivy Maddison</h2>
                    </div>
                </div>
                <div className={styles.detailStatsContainer}>
                    <h2 className={styles.detailStatsCount}>103.231</h2>
                    <h2 className={styles.detailStatsText}>Downloads</h2>
                </div>
                <div className={styles.detailStatsContainer}>
                    <h2 className={styles.detailStatsCount}>124.231</h2>
                    <h2 className={styles.detailStatsText}>Views</h2>
                </div>
                <div className={styles.detailDownloadContainer}>
                    <button className={styles.detailDownloadBtn}>Download</button>
                </div>
            </div>
        </div>
    );
}

export default DetailBar;