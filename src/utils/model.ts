import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ref } from 'vue';

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  antialias: true,
});
const isShowModal = ref(false);
let scene: THREE.Scene | any, camera: THREE.PerspectiveCamera | any, mixer: any;
const widthScreenA = (window.innerWidth * 0.9 - 56.91) * 0.7;

// Renderer ------------------------------------------------------------------
const addRenderer = () => {
  const containerElement = document.querySelector('#screen-model');

  if (containerElement) {
    containerElement.appendChild(renderer.domElement);
  }
};

// General settings ----------------------------------------------------------
const generalSettings = (backgroundColor: string, cameraSetting: any) => {
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(backgroundColor);

  // Camera
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.001,
    1000,
  );

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
  renderer.setSize(widthScreenA, widthScreenA * 0.5);

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
};

// For models have bloom effect ---------------------------------------------
const initPostProcessingBloom = (
  [strength, radius, threshold]: number[],
  cameraSetting: any,
) => {
  // Light
  const spotLight = new THREE.SpotLight(0xffffff, 20000); // Light at camera position
  spotLight.position.copy(camera.position);
  scene.add(spotLight);

  // Bloom
  const composer = new EffectComposer(renderer);
  const renderScene = new RenderPass(scene, camera);
  composer.addPass(renderScene);
  composer.setSize(widthScreenA, widthScreenA * 0.5);
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
    if (isShowModal.value) {
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

    const delta = clock.getDelta();
    if (mixer) {
      mixer.update(delta);
    }
    composer.render();
  };
  animate();
};

// For models non-bloom effect ----------------------------------------------------------
const initPostProcessingNormal = (cameraSetting: any) => {
  // Light
  const spotLight = new THREE.SpotLight(0xffffff, 20); // Light at camera position
  spotLight.position.copy(camera.position);
  scene.add(spotLight);

  // Re-render
  const clock = new THREE.Clock();
  const animate = () => {
    if (isShowModal.value) {
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

    const delta = clock.getDelta();
    if (mixer) {
      mixer.update(delta);
    }

    renderer.render(scene, camera);
  };
  animate();
};
//------------------------------------- End init -------------------------------------

// Load model GLTF/GLB
const loadModel = (url: string, animation: number[]) => {
  const loader = new GLTFLoader();

  loader.load(
    url,
    (model) => {
      if (animation.length > 0) {
        mixer = new THREE.AnimationMixer(model.scene);
        const clip = model.animations[animation[0]];
        mixer.clipAction(clip.optimize()).play();
      }
      scene.add(model.scene);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    function (error) {
      console.log('An error happened', error);
    },
  );
};

// Render model
const renderModel = (
  url: string,
  backgroundColor: string = '#000000',
  animation: number[] = [],
  bloom: {
    isBloom: false;
    parameter: [2.5, 0.8, 0.15];
  },
  cameraSetting: {
    cameraPosition: [1, 1, 1];
    lookAt: [0, 0, 0];
  },
) => {
  isShowModal.value = true;

  generalSettings(backgroundColor, cameraSetting);

  if (bloom.isBloom) {
    initPostProcessingBloom(bloom.parameter, cameraSetting);
  } else {
    initPostProcessingNormal(cameraSetting);
  }
  loadModel(url, animation);
};

const disposeScene = () => {
  isShowModal.value = false;
};

export { addRenderer, renderModel, disposeScene };
