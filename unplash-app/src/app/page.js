import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>

          <div className={styles.heroSection}>
              <img src="/backgroundImg.jpg" className={styles.backgroundImg} alt="Background Img"/>

              <div className={styles.navbar}>
                  <ul className={styles.ul}>
                      <li className={styles.navItem}>About</li>
                      <li className={`${styles.navItem} ${styles.active}`}>Discover</li>
                      <h2 className={styles.logo}>Viewr</h2>
                      <li className={styles.navItem}>Users</li>
                      <li className={styles.navItem}>Account</li>
                  </ul>
              </div>

              <div className={styles.heroTitleContainer}>
                  <h2 className={styles.heroTitle}>Discover the perfect image for your design</h2>
                  <div className={styles.descriptionContainer}>
                      <div className={styles.line}></div>
                      <p className={styles.descriptionText}>Photographed by:</p>
                      <p className={styles.descriptionTextBold}>&nbsp; Maarten Bouwkamp</p>
                  </div>
              </div>

              <div className={styles.searchBarContainer}>
                  <div className={styles.searchWrapper}>
                      <input type="search" className={styles.searchBar}/>
                      <button className={styles.searchBtn}>Search</button>
                  </div>
              </div>
          </div>

          <div className={styles.photographersSection}>

              <h2 className={styles.photographersTitle}>Photographers</h2>
              <div className={styles.photographersContainer}>
                  <div className={styles.photographerCard}></div>
                  <div className={styles.photographerCard}></div>
                  <div className={styles.photographerCard}></div>
                  <div className={styles.photographerCard}></div>
              </div>
          </div>

          <div className={styles.photosSection}>

              <h2 className={styles.photosTitle}>Photos</h2>
              <div className={styles.photosContainer}>

              </div>
          </div>

      </main>
  );
}