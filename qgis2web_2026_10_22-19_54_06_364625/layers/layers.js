ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([110.482278, -6.972016, 110.675433, -6.831513]);
var wms_layers = [];


        var lyr_WorldImagery_0 = new ol.layer.Tile({
            'title': 'World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DESAKARANGTENGAHshp_1 = new ol.format.GeoJSON();
var features_DESAKARANGTENGAHshp_1 = format_DESAKARANGTENGAHshp_1.readFeatures(json_DESAKARANGTENGAHshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DESAKARANGTENGAHshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESAKARANGTENGAHshp_1.addFeatures(features_DESAKARANGTENGAHshp_1);
var lyr_DESAKARANGTENGAHshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESAKARANGTENGAHshp_1, 
                style: style_DESAKARANGTENGAHshp_1,
                popuplayertitle: 'DESA KARANGTENGAH.shp',
                interactive: true,
    title: 'DESA KARANGTENGAH.shp<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_0.png" /> Batu<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_1.png" /> Donorejo<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_2.png" /> Dukun<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_3.png" /> Grogol<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_4.png" /> Karangsari<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_5.png" /> Karangtowo<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_6.png" /> Kedunguter<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_7.png" /> Klitih<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_8.png" /> Pidodo<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_9.png" /> Ploso<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_10.png" /> Pulosari<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_11.png" /> Rejosari<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_12.png" /> Sampang<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_13.png" /> Tambakbulusan<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_14.png" /> Wonoagung<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_15.png" /> Wonokerto<br />\
    <img src="styles/legend/DESAKARANGTENGAHshp_1_16.png" /> Wonowoso<br />' });

lyr_WorldImagery_0.setVisible(true);lyr_DESAKARANGTENGAHshp_1.setVisible(true);
var layersList = [lyr_WorldImagery_0,lyr_DESAKARANGTENGAHshp_1];
lyr_DESAKARANGTENGAHshp_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Kepadatan': 'Kepadatan', });
lyr_DESAKARANGTENGAHshp_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Kepadatan': 'TextEdit', });
lyr_DESAKARANGTENGAHshp_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', 'Kepadatan': 'inline label - always visible', });
lyr_DESAKARANGTENGAHshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});