import * as THREE from 'three';
import Experience from '../Experience.js';

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.recources = this.experience.resources;
        this.model = this.recources.items.rifle;
        this.actualModel = this.model.scene;
        this.actualModel.scale.set(0.1, 0.1, 0.1);
        this.actualModel.rotation.y = Math.PI;

        this.setModel();

    }

    setModel() {
        this.scene.add(this.actualModel);
    }

    resize() {}

    update() {}
}