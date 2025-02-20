var map;

DG.then(function () {
    map = DG.map('map', {
        center: [56.145835, 101.616128],
        zoom: 15
    });
    DG.marker([56.145835, 101.616128]).addTo(map);
});