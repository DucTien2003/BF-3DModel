import { ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
let scene: THREE.Scene | any, camera: THREE.PerspectiveCamera | any, mixer: any;

let widthScreenModel: number;
const scaleScreenModel: number = 1.2;
const isMounted = ref(false);

// Renderer ------------------------------------------------------------------
const addRenderer = (idScreen: string = '#author-screen') => {
  const containerElement = document.querySelector(idScreen);

  if (containerElement) {
    renderer.setClearColor(0xffffff, 0);
    widthScreenModel = (containerElement as HTMLElement).offsetWidth;
    containerElement.appendChild(renderer.domElement);
  }
};

// General settings ----------------------------------------------------------
const generalSettings = (cameraSetting: any) => {
  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(40, scaleScreenModel, 0.001, 1000);

  const cameraPosition = cameraSetting.cameraPosition;
  camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);

  const targetPoint = new THREE.Vector3(
    cameraSetting.lookAt[0],
    cameraSetting.lookAt[1],
    cameraSetting.lookAt[2],
  );
  camera.lookAt(targetPoint);

  scene.add(camera);

  // Renderer
  renderer.setSize(widthScreenModel, widthScreenModel / scaleScreenModel);

  renderer.toneMapping = THREE.ReinhardToneMapping;

  // Control
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = false;
  controls.screenSpacePanning = false;
  controls.maxPolarAngle = 90;
  controls.enableZoom = false;

  // Light
  const ambientLight = new THREE.AmbientLight(0xcccccc, 2); // Very strong
  scene.add(ambientLight);
};

const spotLight = new THREE.SpotLight(0xffffff, 20); // Light at camera position
const initPostProcessingNormal = (cameraSetting: any) => {
  // Light
  spotLight.position.copy(camera.position);
  scene.add(spotLight);

  // Re-render
  const clock = new THREE.Clock();
  if (!isMounted.value) {
    isMounted.value = true;
    const animate = () => {
      if (isMounted.value) {
        requestAnimationFrame(animate);
      }
      spotLight.position.copy(camera.position);

      // Update the camera's direction
      camera.lookAt(
        new THREE.Vector3(
          cameraSetting.lookAt[0],
          cameraSetting.lookAt[1],
          cameraSetting.lookAt[2],
        ),
      );

      spotLight.position.copy(camera.position);
      const delta = clock.getDelta();
      if (mixer) {
        mixer.update(delta);
      }

      renderer.render(scene, camera);
    };
    animate();
  }
};
//------------------------------------- End init -------------------------------------

// Load model GLTF/GLB
const loadModel = (
  url: string,
  animation: { default: number; quantity: number },
) => {
  const loader = new GLTFLoader();

  loader.load(url, (model) => {
    if (animation.quantity > 0) {
      mixer = new THREE.AnimationMixer(model.scene);
      const clip = model.animations[animation.default];
      mixer.clipAction(clip.optimize()).play();
    }
    scene.add(model.scene);
  });
};

// Render model
const renderModel = (
  url: string,
  animation: {
    default: number;
    quantity: number;
  },
  cameraSetting: {
    cameraPosition: number[];
    lookAt: number[];
  },
) => {
  generalSettings(cameraSetting);
  initPostProcessingNormal(cameraSetting);
  loadModel(url, animation);
};

const disposeScene = () => {
  isMounted.value = false;
};

export { addRenderer, renderModel, disposeScene };
