var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_test_air_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "test_air",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/test_air_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7594291.934200, 757755.480200, 10840356.264300, 4446464.946200]
                            })
                        });

        var lyr_usepaaqi_2 = new ol.layer.Tile({
            'title': 'usepa-aqi',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tiles.aqicn.org/tiles/usepa-aqi/{z}/{x}/{y}.png'
            })
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_test_air_1.setVisible(true);lyr_usepaaqi_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_test_air_1,lyr_usepaaqi_2];
