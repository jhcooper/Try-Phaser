import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("sky", "/assets/phaser3_tutorial_assets/sky.png");
        this.load.image(
            "ground",
            "/assets/phaser3_tutorial_assets/platform.png"
        );
        this.load.image("star", "/assets/phaser3_tutorial_assets/star.png");
        this.load.image("bomb", "/assets/phaser3_tutorial_assets/bomb.png");
        this.load.spritesheet(
            "dude",
            "/assets/phaser3_tutorial_assets/dude.png",
            { frameWidth: 32, frameHeight: 48 }
        );
    }

    create() {
        this.scene.start("MainScene");
    }

    //test
}
