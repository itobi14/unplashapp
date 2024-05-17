import styles from "@/app/page.module.css";

function SearchBar() {

    return (
        <div className={styles.searchBarContainer}>
            <div className={styles.searchWrapper}>
                <input
                    type="search"
                    className={styles.searchBar}
                    placeholder="Search photographers..."
                />
                <button
                    className={styles.searchBtn}
                >Search</button>
            </div>
        </div>
    );
}

export default SearchBar;