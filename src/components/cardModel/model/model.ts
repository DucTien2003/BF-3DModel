import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// Init
// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
const addRenderer = (id: string) => {
  const containerElement = document.querySelector('#' + id);

  if (containerElement) {
    containerElement.appendChild(renderer.domElement);
  }
};

let scene: any, camera: any, mixer: any;

const initPostProcessingBloom = (
  backgroundColor: string,
  cameraPosition: number[],
  rendererWidth: number,
  [strength, radius, threshold]: number[],
) => {
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(backgroundColor);

  // Camera
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    1000,
  );
  camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
  scene.add(camera);

  // Renderer
  renderer.setSize(
    rendererWidth,
    (window.innerHeight / window.innerWidth) * rendererWidth,
  );
  renderer.toneMapping = THREE.ReinhardToneMapping;

  // Control
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = false;
  controls.screenSpacePanning = false;
  controls.maxPolarAngle = Math.PI;

  // Light
  const ambientLight = new THREE.AmbientLight(0xcccccc, 1); // Very strong
  scene.add(ambientLight);

  const light = new THREE.DirectionalLight(0xffffff, 1); // Strong
  light.position.set(200, 200, 500);
  scene.add(light);

  const spotLight = new THREE.SpotLight(0xffffff, 20000); // Weak
  spotLight.position.copy(camera.position);
  scene.add(spotLight);

  // Bloom
  const composer = new EffectComposer(renderer);
  const renderScene = new RenderPass(scene, camera);
  composer.addPass(renderScene);
  composer.setSize((window.innerWidth / window.innerHeight) * 600, 600);
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

    spotLight.position.copy(camera.position);

    const delta = clock.getDelta();
    if (mixer) {
      mixer.update(delta);
    }
    composer.render();
  };
  animate();
};

const initPostProcessingNormal = (
  backgroundColor: string,
  cameraPosition: number[],
  rendererWidth: number,
) => {
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(backgroundColor);

  // Camera
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    1000,
  );
  camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
  scene.add(camera);

  // Renderer
  renderer.setSize(
    rendererWidth,
    (window.innerHeight / window.innerWidth) * rendererWidth,
  );
  renderer.toneMapping = THREE.ReinhardToneMapping;

  // Control
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = false;
  controls.screenSpacePanning = false;
  controls.maxPolarAngle = Math.PI;

  // Light
  const ambientLight = new THREE.AmbientLight(0xcccccc, 1); // Very strong
  scene.add(ambientLight);

  const light = new THREE.DirectionalLight(0xffffff, 1); // Strong
  light.position.set(200, 200, 500);
  scene.add(light);

  const spotLight = new THREE.SpotLight(0xffffff, 30); // Weak
  spotLight.position.copy(camera.position);
  scene.add(spotLight);

  // Re-render
  const animate = () => {
    requestAnimationFrame(animate);

    spotLight.position.copy(camera.position);

    renderer.render(scene, camera);
  };
  animate();
};
//------------------------------------- End init -------------------------------------

// Load model GLTF/GLB
const loadModel = (url: string, isAnimation: boolean) => {
  const loader = new GLTFLoader();

  loader.load(
    url,
    (model) => {
      if (isAnimation) {
        mixer = new THREE.AnimationMixer(model.scene);
        const clip = model.animations[0];
        mixer.clipAction(clip.optimize()).play();
      }

      scene.add(model.scene);
    },
    function (xhr) {
      // console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    function (error) {
      console.log('An error happened', error);
    },
  );
};

const renderModel = (
  url: string,
  isBloom: boolean,
  isAnimation: boolean,
  backgroundColor: string = '#000000',
  cameraPosition: number[] = [300, 300, 300],
  rendererWidth: number = 800,
  [strength, radius, threshold]: number[] = [2.5, 0.8, 0.15],
) => {
  if (isBloom) {
    initPostProcessingBloom(backgroundColor, cameraPosition, rendererWidth, [
      strength,
      radius,
      threshold,
    ]);
  } else {
    initPostProcessingNormal(backgroundColor, cameraPosition, rendererWidth);
  }
  loadModel(url, isAnimation);
};

export { addRenderer, renderModel };
