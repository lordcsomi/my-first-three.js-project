import * as THREE from 'three';
import Experience from '../Experience.js';

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.recources = this.experience.resources;

        this.setSunlight();

    }

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 200;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(10, 7, 20);
        this.scene.add(this.sunLight);

        const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
        this.scene.add(ambientLight);
    }

    resize() {}

    update() {}
}