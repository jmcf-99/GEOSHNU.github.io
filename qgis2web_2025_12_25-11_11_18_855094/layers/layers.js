ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2263").setExtent([913175.109009, 120128.369995, 1067382.508606, 272844.294006]);
var wms_layers = [];

var format_nynta_with_population_density_0 = new ol.format.GeoJSON();
var features_nynta_with_population_density_0 = format_nynta_with_population_density_0.readFeatures(json_nynta_with_population_density_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_nynta_with_population_density_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nynta_with_population_density_0.addFeatures(features_nynta_with_population_density_0);
var lyr_nynta_with_population_density_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nynta_with_population_density_0, 
                style: style_nynta_with_population_density_0,
                popuplayertitle: 'nynta_with_population_density',
                interactive: true,
    title: 'nynta_with_population_density<br />\
    <img src="styles/legend/nynta_with_population_density_0_0.png" /> 0 - 1500<br />\
    <img src="styles/legend/nynta_with_population_density_0_1.png" /> 1500 - 3000<br />\
    <img src="styles/legend/nynta_with_population_density_0_2.png" /> 3000 - 4500<br />\
    <img src="styles/legend/nynta_with_population_density_0_3.png" /> 4500 - 6000<br />\
    <img src="styles/legend/nynta_with_population_density_0_4.png" /> 6000 - 7500<br />\
    <img src="styles/legend/nynta_with_population_density_0_5.png" /> >7500<br />' });

lyr_nynta_with_population_density_0.setVisible(true);
var layersList = [lyr_nynta_with_population_density_0];
lyr_nynta_with_population_density_0.set('fieldAliases', {'fid': 'fid', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CountyFIPS': 'CountyFIPS', 'NTACode': 'NTACode', 'NTAName': 'NTAName', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Population': 'Population', 'Density': 'Density', });
lyr_nynta_with_population_density_0.set('fieldImages', {'fid': '', 'BoroCode': '', 'BoroName': '', 'CountyFIPS': '', 'NTACode': '', 'NTAName': '', 'Shape_Leng': '', 'Shape_Area': '', 'Population': '', 'Density': '', });
lyr_nynta_with_population_density_0.set('fieldLabels', {'fid': 'hidden field', 'BoroCode': 'hidden field', 'BoroName': 'no label', 'CountyFIPS': 'hidden field', 'NTACode': 'hidden field', 'NTAName': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - visible with data', 'Population': 'inline label - always visible', 'Density': 'inline label - always visible', });
lyr_nynta_with_population_density_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});