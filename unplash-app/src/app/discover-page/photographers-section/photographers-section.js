import styles from "@/app/page.module.css";
import React from 'react';

// function PhotographersSection({ photographers }) {
//
//     if (!photographers || photographers.length === 0) {
//         return <div>No photographers found.</div>;
//     }
//
//     return (
//         <div className={styles.photographersSection}>
//             <h2 className={styles.photographersTitle}>Photographers</h2>
//             <ul className={styles.photographersContainer}>
//                 {photographers.map((photographer) => (
//                     <li key={photographer.id} className={styles.photographerCard}>
//                         <div className={styles.photographerImgContainer}>
//                             <img
//                                 className={styles.photographerImg}
//                                 src={photographer.profile_image.small}
//                                 alt="Photographer"
//                             />
//                         </div>
//                         <div className={styles.photographerInfoContainer}>
//                             <h4 className={styles.photographerName}>{photographer.name}</h4>
//                             <h4 className={styles.photographerPhotoCount}>Total Photos: {photographer.total_photos}</h4>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

function PhotographersSection() {

    return (
        <div className={styles.photographersSection}>
            <h2 className={styles.photographersTitle}>Photographers</h2>
            <ul className={styles.photographersContainer}>
                <li className={styles.photographerCard}>
                    <div className={styles.photographerImgContainer}>
                        <img
                            className={styles.photographerImg}
                            src=""
                            alt="Photographer"
                        />
                    </div>
                    <div className={styles.photographerInfoContainer}>
                        <h4 className={styles.photographerName}>Test</h4>
                        <h4 className={styles.photographerPhotoCount}>Total Photos:</h4>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default PhotographersSection;