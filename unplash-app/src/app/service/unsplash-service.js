const axios = require('axios');

const unsplashBaseUrl = 'https://api.unsplash.com';
const accessKey = 'NLECKtEQTyj4jrZiSSqrkY41mweZa6N_NA__btZFaDY';

const searchPhotographers = async (query) => {
    try {
        const response = await axios.get(`${unsplashBaseUrl}/search/users`, {
            params: {
                query,
                per_page: 4,
                client_id: accessKey,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching photographers:', error);
        return [];
    }
};

module.exports = { searchPhotographers };