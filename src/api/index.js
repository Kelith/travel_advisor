import axios from 'axios';


export const getPlacesData = async (type,sw,ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            'X-RapidAPI-Key': '5c3d0a199bmsh8d3edddc8225bd6p13e94ajsnaed9841933af',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }});
        console.log({
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}
