import {key, firmId} from "../../../key.js";


const map = new mapgl.Map('map', {
    key: key,
    center: [101.616128, 56.145835],
    zoom: 17.4,
});

const marker = new mapgl.Marker(map, {
    coordinates: [101.61609, 56.14589],
});