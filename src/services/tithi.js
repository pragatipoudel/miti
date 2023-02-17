import axios from 'axios';

const tithiUrl = 'https://raw.githubusercontent.com/bibekdahal/nepali-calendar-data/main/data.json';

export const getTithi = async () => {
    const response = await axios.get(tithiUrl);
    const tithiMap = {};
    response.data.data.forEach((item) => {
        tithiMap[item.date] = item;
    });
    return tithiMap;
};
