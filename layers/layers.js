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
var format_Kantor_Pemerintahan_Baru_1 = new ol.format.GeoJSON();
var features_Kantor_Pemerintahan_Baru_1 = format_Kantor_Pemerintahan_Baru_1.readFeatures(json_Kantor_Pemerintahan_Baru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kantor_Pemerintahan_Baru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantor_Pemerintahan_Baru_1.addFeatures(features_Kantor_Pemerintahan_Baru_1);
var lyr_Kantor_Pemerintahan_Baru_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kantor_Pemerintahan_Baru_1, 
                style: style_Kantor_Pemerintahan_Baru_1,
                interactive: false,
                title: '<img src="styles/legend/Kantor_Pemerintahan_Baru_1.png" /> Kantor_Pemerintahan_Baru'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kantor_Pemerintahan_Baru_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kantor_Pemerintahan_Baru_1];
lyr_Kantor_Pemerintahan_Baru_1.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'SUB_JENIS': 'SUB_JENIS', 'KETERANGAN': 'KETERANGAN', 'SUB_KET': 'SUB_KET', });
lyr_Kantor_Pemerintahan_Baru_1.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'SUB_JENIS': 'TextEdit', 'KETERANGAN': 'TextEdit', 'SUB_KET': 'TextEdit', });
lyr_Kantor_Pemerintahan_Baru_1.set('fieldLabels', {'Id': 'no label', 'JENIS': 'no label', 'SUB_JENIS': 'no label', 'KETERANGAN': 'no label', 'SUB_KET': 'no label', });
lyr_Kantor_Pemerintahan_Baru_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});