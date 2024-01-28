import { defineStore } from 'pinia';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export const useModelStore = defineStore('ModelStore', {
  state: () => ({
    renderer: new THREE.WebGLRenderer({
      antialias: true,
    }) as THREE.WebGLRenderer,
    scene: null as THREE.Scene | any,
    camera: null as THREE.PerspectiveCamera | any,
    mixer: null as any,
    isAnimation: true as boolean,
  }),

  getters: {
    // getTest: (state) => {},
  },

  actions: {
    addRenderer() {
      const containerElement = document.querySelector('#screen-model');

      if (containerElement) {
        containerElement.appendChild(this.renderer.domElement);
      }
    },

    // Init
    generalSettings(
      backgroundColor: string,
      cameraSetting: any,
      rendererWidth: number,
    ) {
      // Scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(backgroundColor);

      // Camera
      this.camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        0.001,
        1000,
      );

      const cameraPosition = cameraSetting.cameraPosition;
      this.camera.position.set(
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2],
      );

      const targetPoint = new THREE.Vector3(
        cameraSetting.lookAt[0],
        cameraSetting.lookAt[1],
        cameraSetting.lookAt[2],
      );
      this.camera.lookAt(targetPoint);

      this.scene.add(this.camera);

      // Renderer
      this.renderer.setSize(rendererWidth, rendererWidth * 0.5);

      this.renderer.toneMapping = THREE.ReinhardToneMapping;

      // Control
      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.enableDamping = false;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI;

      // Light
      const ambientLight = new THREE.AmbientLight(0xcccccc, 1); // Very strong
      this.scene.add(ambientLight);

      const light = new THREE.DirectionalLight(0xffffff, 1); // Strong
      light.position.set(200, 200, 500);
      this.scene.add(light);
    },

    // For models have bloom effect
    initPostProcessingBloom(
      rendererWidth: number,
      [strength, radius, threshold]: number[],
      cameraSetting: any,
    ) {
      // Light
      const spotLight = new THREE.SpotLight(0xffffff, 20000); // Light at camera position
      spotLight.position.copy(this.camera.position);
      this.scene.add(spotLight);

      // Bloom
      const composer = new EffectComposer(this.renderer);
      const renderScene = new RenderPass(this.scene, this.camera);
      composer.addPass(renderScene);
      composer.setSize(rendererWidth, rendererWidth / 1.78);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        strength,
        radius,
        threshold,
      );
      composer.addPass(bloomPass);

      // Re-render
      const clock = new THREE.Clock();
      const animate = () => {
        requestAnimationFrame(animate);

        spotLight.position.copy(this.camera.position);

        // Update the camera's direction
        this.camera.lookAt(
          new THREE.Vector3(
            cameraSetting.lookAt[0],
            cameraSetting.lookAt[1],
            cameraSetting.lookAt[2],
          ),
        );

        const delta = clock.getDelta();
        if (this.mixer) {
          this.mixer.update(delta);
        }
        composer.render();
      };
      animate();
    },

    // For models non-bloom effect
    initPostProcessingNormal(cameraSetting: any) {
      // Light
      const spotLight = new THREE.SpotLight(0xffffff, 20); // Light at camera position
      spotLight.position.copy(this.camera.position);
      this.scene.add(spotLight);

      // Re-render
      const clock = new THREE.Clock();
      const animate = () => {
        if (this.isAnimation) {
          requestAnimationFrame(animate);
        }
        spotLight.position.copy(this.camera.position);
        // Update the camera's direction
        this.camera.lookAt(
          new THREE.Vector3(
            cameraSetting.lookAt[0],
            cameraSetting.lookAt[1],
            cameraSetting.lookAt[2],
          ),
        );
        const delta = clock.getDelta();
        if (this.mixer) {
          this.mixer.update(delta);
        }
        this.renderer.render(this.scene, this.camera);
      };
      animate();
    },

    // Load model GLTF/GLB
    loadModel(url: string, animation: number[]) {
      const loader = new GLTFLoader();

      loader.load(
        url,
        (model) => {
          if (animation.length > 0) {
            this.mixer = new THREE.AnimationMixer(model.scene);
            const clip = model.animations[0];
            // console.log(model.animations.length);
            this.mixer.clipAction(clip.optimize()).play();
          }
          this.scene.add(model.scene);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        function (error) {
          console.log('An error happened', error);
        },
      );
    },

    // Render model
    renderModel(
      url: string,
      backgroundColor: string = '#000000',
      animation: number[] = [],
      rendererWidth: number = 800,
      bloom: {
        isBloom: false;
        parameter: [2.5, 0.8, 0.15];
      },
      cameraSetting: {
        cameraPosition: [1, 1, 1];
        lookAt: [0, 0, 0];
      },
    ) {
      this.isAnimation = true;

      this.generalSettings(backgroundColor, cameraSetting, rendererWidth);

      if (bloom.isBloom) {
        this.initPostProcessingBloom(
          rendererWidth,
          bloom.parameter,
          cameraSetting,
        );
      } else {
        this.initPostProcessingNormal(cameraSetting);
      }
      this.loadModel(url, animation);
    },

    disposeScene() {
      this.isAnimation = false;
    },
  },
});
