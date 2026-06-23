var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.777000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JaringanJALAN_1 = new ol.format.GeoJSON();
var features_JaringanJALAN_1 = format_JaringanJALAN_1.readFeatures(json_JaringanJALAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJALAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJALAN_1.addFeatures(features_JaringanJALAN_1);
var lyr_JaringanJALAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJALAN_1, 
                style: style_JaringanJALAN_1,
                popuplayertitle: 'Jaringan JALAN',
                interactive: false,
                title: '<img src="styles/legend/JaringanJALAN_1.png" /> Jaringan JALAN'
            });
var format_15KM_Short_2 = new ol.format.GeoJSON();
var features_15KM_Short_2 = format_15KM_Short_2.readFeatures(json_15KM_Short_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15KM_Short_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15KM_Short_2.addFeatures(features_15KM_Short_2);
var lyr_15KM_Short_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15KM_Short_2, 
                style: style_15KM_Short_2,
                popuplayertitle: '1.5KM_Short',
                interactive: false,
                title: '<img src="styles/legend/15KM_Short_2.png" /> 1.5KM_Short'
            });
var format_3KM_Short_3 = new ol.format.GeoJSON();
var features_3KM_Short_3 = format_3KM_Short_3.readFeatures(json_3KM_Short_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3KM_Short_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3KM_Short_3.addFeatures(features_3KM_Short_3);
var lyr_3KM_Short_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3KM_Short_3, 
                style: style_3KM_Short_3,
                popuplayertitle: '3KM_Short',
                interactive: false,
                title: '<img src="styles/legend/3KM_Short_3.png" /> 3KM_Short'
            });
var format_45KM_Short_4 = new ol.format.GeoJSON();
var features_45KM_Short_4 = format_45KM_Short_4.readFeatures(json_45KM_Short_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_45KM_Short_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_45KM_Short_4.addFeatures(features_45KM_Short_4);
var lyr_45KM_Short_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_45KM_Short_4, 
                style: style_45KM_Short_4,
                popuplayertitle: '4.5KM_Short',
                interactive: false,
                title: '<img src="styles/legend/45KM_Short_4.png" /> 4.5KM_Short'
            });
var format_55KM_Short_5 = new ol.format.GeoJSON();
var features_55KM_Short_5 = format_55KM_Short_5.readFeatures(json_55KM_Short_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_55KM_Short_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_55KM_Short_5.addFeatures(features_55KM_Short_5);
var lyr_55KM_Short_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_55KM_Short_5, 
                style: style_55KM_Short_5,
                popuplayertitle: '5.5KM_Short',
                interactive: false,
                title: '<img src="styles/legend/55KM_Short_5.png" /> 5.5KM_Short'
            });
var format_15KM_BUFF_6 = new ol.format.GeoJSON();
var features_15KM_BUFF_6 = format_15KM_BUFF_6.readFeatures(json_15KM_BUFF_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15KM_BUFF_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15KM_BUFF_6.addFeatures(features_15KM_BUFF_6);
var lyr_15KM_BUFF_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15KM_BUFF_6, 
                style: style_15KM_BUFF_6,
                popuplayertitle: '1.5KM_BUFF',
                interactive: false,
                title: '<img src="styles/legend/15KM_BUFF_6.png" /> 1.5KM_BUFF'
            });
var format_3KM_BUFF_7 = new ol.format.GeoJSON();
var features_3KM_BUFF_7 = format_3KM_BUFF_7.readFeatures(json_3KM_BUFF_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3KM_BUFF_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3KM_BUFF_7.addFeatures(features_3KM_BUFF_7);
var lyr_3KM_BUFF_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3KM_BUFF_7, 
                style: style_3KM_BUFF_7,
                popuplayertitle: '3KM_BUFF',
                interactive: false,
                title: '<img src="styles/legend/3KM_BUFF_7.png" /> 3KM_BUFF'
            });
var format_45KM_BUFF_8 = new ol.format.GeoJSON();
var features_45KM_BUFF_8 = format_45KM_BUFF_8.readFeatures(json_45KM_BUFF_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_45KM_BUFF_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_45KM_BUFF_8.addFeatures(features_45KM_BUFF_8);
var lyr_45KM_BUFF_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_45KM_BUFF_8, 
                style: style_45KM_BUFF_8,
                popuplayertitle: '4.5KM_BUFF',
                interactive: false,
                title: '<img src="styles/legend/45KM_BUFF_8.png" /> 4.5KM_BUFF'
            });
var format_6KM_BUFF_9 = new ol.format.GeoJSON();
var features_6KM_BUFF_9 = format_6KM_BUFF_9.readFeatures(json_6KM_BUFF_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6KM_BUFF_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6KM_BUFF_9.addFeatures(features_6KM_BUFF_9);
var lyr_6KM_BUFF_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6KM_BUFF_9, 
                style: style_6KM_BUFF_9,
                popuplayertitle: '6KM_BUFF',
                interactive: false,
                title: '<img src="styles/legend/6KM_BUFF_9.png" /> 6KM_BUFF'
            });
var format_FASKES_10 = new ol.format.GeoJSON();
var features_FASKES_10 = format_FASKES_10.readFeatures(json_FASKES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASKES_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASKES_10.addFeatures(features_FASKES_10);
cluster_FASKES_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FASKES_10
});
var lyr_FASKES_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FASKES_10, 
                style: style_FASKES_10,
                popuplayertitle: 'FASKES',
                interactive: true,
    title: 'FASKES<br />\
    <img src="styles/legend/FASKES_10_0.png" /> Puskesmas<br />\
    <img src="styles/legend/FASKES_10_1.png" /> RS<br />\
    <img src="styles/legend/FASKES_10_2.png" /> <br />' });
var format_Administration_11 = new ol.format.GeoJSON();
var features_Administration_11 = format_Administration_11.readFeatures(json_Administration_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administration_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administration_11.addFeatures(features_Administration_11);
var lyr_Administration_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administration_11, 
                style: style_Administration_11,
                popuplayertitle: 'Administration',
                interactive: false,
                title: '<img src="styles/legend/Administration_11.png" /> Administration'
            });
var group_BUFFER = new ol.layer.Group({
                                layers: [lyr_15KM_BUFF_6,lyr_3KM_BUFF_7,lyr_45KM_BUFF_8,lyr_6KM_BUFF_9,],
                                fold: 'open',
                                title: 'BUFFER'});
var group_SHORTESTROUTE = new ol.layer.Group({
                                layers: [lyr_15KM_Short_2,lyr_3KM_Short_3,lyr_45KM_Short_4,lyr_55KM_Short_5,],
                                fold: 'open',
                                title: 'SHORTEST ROUTE'});

lyr_OpenStreetMap_0.setVisible(true);lyr_JaringanJALAN_1.setVisible(true);lyr_15KM_Short_2.setVisible(true);lyr_3KM_Short_3.setVisible(true);lyr_45KM_Short_4.setVisible(true);lyr_55KM_Short_5.setVisible(true);lyr_15KM_BUFF_6.setVisible(true);lyr_3KM_BUFF_7.setVisible(true);lyr_45KM_BUFF_8.setVisible(true);lyr_6KM_BUFF_9.setVisible(true);lyr_FASKES_10.setVisible(true);lyr_Administration_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JaringanJALAN_1,group_SHORTESTROUTE,group_BUFFER,lyr_FASKES_10,lyr_Administration_11];
lyr_JaringanJALAN_1.set('fieldAliases', {'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_15KM_Short_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Jangkauan': 'Jangkauan', 'start': 'start', });
lyr_3KM_Short_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Jangkauan': 'Jangkauan', 'start': 'start', });
lyr_45KM_Short_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Jangkauan': 'Jangkauan', 'start': 'start', });
lyr_55KM_Short_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Jangkauan': 'Jangkauan', 'start': 'start', });
lyr_15KM_BUFF_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Jangkauan': 'Jangkauan', });
lyr_3KM_BUFF_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_45KM_BUFF_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Jangkauan': 'Jangkauan', });
lyr_6KM_BUFF_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Jangkauan': 'Jangkauan', });
lyr_FASKES_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Jangkauan': 'Jangkauan', 'ATTCH': 'ATTCH', });
lyr_Administration_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JaringanJALAN_1.set('fieldImages', {'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_15KM_Short_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Jangkauan': 'TextEdit', 'start': 'TextEdit', });
lyr_3KM_Short_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Jangkauan': 'TextEdit', 'start': 'TextEdit', });
lyr_45KM_Short_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Jangkauan': 'TextEdit', 'start': 'TextEdit', });
lyr_55KM_Short_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Jangkauan': 'TextEdit', 'start': 'TextEdit', });
lyr_15KM_BUFF_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_3KM_BUFF_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_45KM_BUFF_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_6KM_BUFF_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_FASKES_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Jangkauan': 'TextEdit', 'ATTCH': 'ExternalResource', });
lyr_Administration_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JaringanJALAN_1.set('fieldLabels', {'REMARK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_15KM_Short_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Jangkauan': 'no label', 'start': 'no label', });
lyr_3KM_Short_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Jangkauan': 'no label', 'start': 'no label', });
lyr_45KM_Short_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Jangkauan': 'no label', 'start': 'no label', });
lyr_55KM_Short_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Jangkauan': 'no label', 'start': 'no label', });
lyr_15KM_BUFF_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Jangkauan': 'no label', });
lyr_3KM_BUFF_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_45KM_BUFF_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Jangkauan': 'no label', });
lyr_6KM_BUFF_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Jangkauan': 'no label', });
lyr_FASKES_10.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'hidden field', 'Jangkauan': 'hidden field', 'ATTCH': 'no label', });
lyr_Administration_11.set('fieldLabels', {'NAMOBJ': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Administration_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});