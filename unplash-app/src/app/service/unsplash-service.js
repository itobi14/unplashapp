import axios from 'axios';

const unsplashBaseUrl = 'https://api.unsplash.com';
const apiKey = 'NLECKtEQTyj4jrZiSSqrkY41mweZa6N_NA__btZFaDY';

const searchPhotos = async (query) => {
    try {
        const response = await axios.get(`${unsplashBaseUrl}/search/photos`, {
            params: {
                query,
                per_page: 4,
                client_id: apiKey,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const getRandomPhotos = async () => {
    try {
        const response = await axios.get(`${unsplashBaseUrl}/photos/random`, {
            params: {
                per_page: 4,
                client_id: apiKey,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

module.exports = { getRandomPhotos };
module.exports = { searchPhotos };