var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMCIMAHI_1 = new ol.format.GeoJSON();
var features_ADMCIMAHI_1 = format_ADMCIMAHI_1.readFeatures(json_ADMCIMAHI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMCIMAHI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMCIMAHI_1.addFeatures(features_ADMCIMAHI_1);
var lyr_ADMCIMAHI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMCIMAHI_1, 
                style: style_ADMCIMAHI_1,
                popuplayertitle: "ADM CIMAHI",
                interactive: true,
                title: '<img src="styles/legend/ADMCIMAHI_1.png" /> ADM CIMAHI'
            });
var format_SUNGAI_AR_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_2 = format_SUNGAI_AR_25K_2.readFeatures(json_SUNGAI_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_2.addFeatures(features_SUNGAI_AR_25K_2);
var lyr_SUNGAI_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_2, 
                style: style_SUNGAI_AR_25K_2,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_2.png" /> SUNGAI_AR_25K'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_vektorreva_4 = new ol.format.GeoJSON();
var features_vektorreva_4 = format_vektorreva_4.readFeatures(json_vektorreva_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vektorreva_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vektorreva_4.addFeatures(features_vektorreva_4);
var lyr_vektorreva_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vektorreva_4, 
                style: style_vektorreva_4,
                popuplayertitle: "vektor reva",
                interactive: true,
                title: '<img src="styles/legend/vektorreva_4.png" /> vektor reva'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMCIMAHI_1.setVisible(true);lyr_SUNGAI_AR_25K_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_vektorreva_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMCIMAHI_1,lyr_SUNGAI_AR_25K_2,lyr_Buffered_3,lyr_vektorreva_4];
lyr_ADMCIMAHI_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_SUNGAI_AR_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Buffered_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_vektorreva_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMCIMAHI_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_SUNGAI_AR_25K_2.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Buffered_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_vektorreva_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ADMCIMAHI_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_SUNGAI_AR_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vektorreva_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vektorreva_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});