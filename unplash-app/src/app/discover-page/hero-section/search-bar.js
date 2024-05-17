function SearchBar() {

    return (
        <div className="search-section">
            <div className="search-wrapper">
                <input
                    type="search"
                    className="search-bar"
                    placeholder="Search photographers..."
                />
                <button className="search-btn">
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBar;