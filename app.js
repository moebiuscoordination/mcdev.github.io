// Configure CesiumJS access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMTBkOWQyMi0wMWYzLTRlMTQtOWE5Zi03MzNjNjVhNGMyOTciLCJpZCI6MjIzMjg2LCJpYXQiOjE3MTg4MjI2MDJ9.EvgU8ftfu8MjvdgKwjRSLU3UNqITQRvHcyG9Cfayl-4';

// Initialize the Cesium Viewer
const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 2 }), // Bing Maps Aerial imagery
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    timeline: false,
    navigationHelpButton: false,
    animation: false
});

// Enable lighting
viewer.scene.globe.enableLighting = true;

// Add some additional effects
viewer.scene.postProcessStages.fxaa.enabled = true;
viewer.scene.skyAtmosphere.show = true;

// Add a simple marker
const redPin = viewer.entities.add({
    name: 'Red pin',
    position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
    billboard: {
        image: 'https://img.icons8.com/color/48/000000/marker.png',
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
});

// Add terrain
viewer.terrainProvider = Cesium.createWorldTerrain({
    requestVertexNormals: true,
    requestWaterMask: true
});

// Rotate the globe
function rotateGlobe() {
    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -0.001);
    requestAnimationFrame(rotateGlobe);
}
rotateGlobe();
