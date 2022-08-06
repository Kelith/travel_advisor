import axios from 'axios';


export const getPlacesData = async (type,sw,ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {params: {
            bl_latitude: sw.lat,
            bl_longitude: ne.lat,
            tr_longitude: sw.lng,
            tr_latitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '5c3d0a199bmsh8d3edddc8225bd6p13e94ajsnaed9841933af',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }});

        return data;
    } catch (error) {
        console.log(error);
    }
}

