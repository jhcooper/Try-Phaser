import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }
    preload() {
        // Log the base URL and path for debugging purposes
        console.log("Base URL:", this.load.baseURL);
        console.log("Path:", this.load.path);

        // List of asset keys and their paths
        const assets = {
            sky: "assets/sky.png",
            ground: "assets/platform.png",
            star: "assets/star.png",
            bomb: "assets/bomb.png",
            dude: "assets/dude.png", // Note: 'dude' is a spritesheet, this is just for logging
        };

        // Load each asset and log its full path
        for (const [key, path] of Object.entries(assets)) {
            console.log(`Loading asset "${key}" from "${path}"`);
            if (key === "dude") {
                // Special handling for spritesheet
                this.load.spritesheet(key, path, {
                    frameWidth: 32,
                    frameHeight: 48,
                });
            } else {
                // Load image normally
                this.load.image(key, path);
            }
        }
    }

    create() {
        this.scene.start("MainScene");
    }

    //test
}
