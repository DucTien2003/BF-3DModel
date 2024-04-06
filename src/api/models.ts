import { InfoModel } from '@/types';

const modelUrl = (model: string) => {
  return {
    represent: '/assets/models/' + model + '/represent-image.png',
    url: '/assets/models/' + model + '/scene.gltf',
  };
};
const authorUlr = (author: string) => {
  return {
    avatar: '/assets/authors/' + author + '/avatar.jpg',
  };
};

export const models: InfoModel[] = [
  {
    id: 'model1',
    name: 'Blue butterfly',
    views: 90,
    like: 7,
    isLike: false,
    downloads: 16,
    release: '03/05/2023',
    description: 'No description provided.',
    categories: ['Animals & Pets'],
    author: {
      isFollow: false,
      name: 'Erina eka syaharani',
      avatar: authorUlr('author1').avatar,
    },
    represent: modelUrl('model1').represent,
    setting: {
      url: modelUrl('model1').url,
      backgroundColor: '#cccccc',
      camera: {
        cameraPosition: [-1, 1, 0],
        lookAt: [0, 0, 0],
      },
      bloom: {
        isBloom: false,
        parameter: [0, 0, 0],
      },
      animation: {
        default: 0,
        quantity: 1,
      },
    },
  },
  {
    id: 'model2',
    name: 'Super Muscular Bodybuilder Doge',
    views: 171,
    like: 10,
    isLike: false,
    downloads: 33,
    release: '12/13/2023',
    description:
      "Super Muscular Bodybuilder Doge 3D Model: This model is a playful and exaggerated representation of the popular Doge meme, transformed into a muscular bodybuilder. Perfect for humorous games, animations, or as a unique digital art piece, this Doge character combines the internet-famous Shiba Inu with an over-the-top bodybuilding physique. Compatible with various 3D software and game engines, it's designed for both commercial and non-commercial use.",
    categories: ['Animals & Pets', 'Characters & Creatures'],
    author: {
      name: 'GAM3D',
      avatar: authorUlr('author1').avatar,
      isFollow: false,
    },
    represent: modelUrl('model2').represent,
    setting: {
      url: modelUrl('model2').url,
      backgroundColor: '#424040',
      camera: {
        cameraPosition: [0, 0.5, 1.5],
        lookAt: [0, 0.5, 0],
      },
      bloom: {
        isBloom: false,
        parameter: [0, 0, 0],
      },
      animation: {
        default: 0,
        quantity: 1,
      },
    },
  },
  {
    id: 'model3',
    name: 'Silver Dragonkin (Mir4)',
    views: 2034,
    like: 125,
    isLike: false,
    downloads: 486,
    release: '01/01/2024',
    description:
      'WeMade. I do not own this model, all rights are reserved to the company. For non-commercial and PG13 use only.',
    categories: ['Animals & Pets', 'Characters & Creatures'],
    author: {
      name: 'Doctor A.',
      avatar: authorUlr('author1').avatar,
      isFollow: false,
    },
    represent: modelUrl('model3').represent,
    setting: {
      url: modelUrl('model3').url,
      backgroundColor: '#aaaaaa',
      camera: {
        cameraPosition: [0, 10, 15],
        lookAt: [0, 5, 0],
      },
      bloom: {
        isBloom: false,
        // parameter: [0, 1, 0.3],
        parameter: [0, 0, 0],
      },
      animation: {
        default: 0,
        quantity: 37,
      },
    },
  },
  {
    id: 'model4',
    name: "Flux's Pit Stop",
    views: 18754,
    like: 926,
    isLike: false,
    downloads: 5567,
    release: '07/13/2019',
    description:
      'My entry for the 3D Modeling Challenge: Holograms of the Future contest. Tried to create a classic Neon sign look but with a 3D holographic twist.',
    categories: ['Animals & Pets'],
    author: {
      name: 'Phil_XG',
      avatar: authorUlr('author1').avatar,
      isFollow: false,
    },
    represent: modelUrl('model4').represent,
    setting: {
      url: modelUrl('model4').url,
      backgroundColor: '#000000',
      camera: {
        cameraPosition: [0, 1, 3.5],
        lookAt: [0, 0.8, 0],
      },
      bloom: {
        isBloom: true,
        parameter: [1.8, 0.35, 0.3], // Sáng tổng thể(lớn), Độ chói(nhỏ), độ blur(nhỏ)
      },
      animation: {
        default: 0,
        quantity: 0,
      },
    },
  },
  {
    id: 'model5',
    name: 'Stitch',
    views: 16801,
    like: 329,
    isLike: false,
    downloads: 4014,
    release: '05/21/2020',
    description:
      'School character assingment from last year. I recently fixed some things in blender so I could upload it here.',
    categories: ['Characters & Creatures'],
    author: {
      name: 'AlmondFeather',
      avatar: authorUlr('author1').avatar,
      isFollow: false,
    },
    represent: modelUrl('model5').represent,
    setting: {
      url: modelUrl('model5').url,
      backgroundColor: '#bee2ff',
      camera: {
        cameraPosition: [0, 0.4, 1.8],
        lookAt: [0, 0.4, 0],
      },
      bloom: {
        isBloom: false,
        parameter: [0, 0, 0], // Sáng tổng thể(lớn), Độ chói(nhỏ), độ blur(nhỏ)
      },
      animation: {
        default: 0,
        quantity: 1,
      },
    },
  },
  {
    id: 'model6',
    name: 'The X Bow Hover Craft Carrier',
    views: 216,
    like: 33,
    isLike: false,
    downloads: 47,
    release: '01/06/2024',
    description:
      'The X Bow Series Hover Vtol helicopter Carrier. Designed to convey 10 personel plus pilot. designed with space for additional load. modelled as a sci fi concept with a modern approach. 7 rotor system animated.',
    categories: ['Art & Abstract', 'Weapons & Military'],
    author: {
      name: 'VertaScan',
      avatar: authorUlr('author1').avatar,
      isFollow: false,
    },
    represent: modelUrl('model6').represent,
    setting: {
      url: modelUrl('model6').url,
      backgroundColor: '#cccccc',
      camera: {
        cameraPosition: [15, 10, 10],
        lookAt: [0, 0, 0],
      },
      bloom: {
        isBloom: false,
        parameter: [0, 0, 0], // Sáng tổng thể(lớn), Độ chói(nhỏ), độ blur(nhỏ)
      },
      animation: {
        default: 0,
        quantity: 1,
      },
    },
  },
  {
    id: 'model7',
    name: 'Monster Boss Head Dragon',
    views: 650,
    like: 38,
    isLike: false,
    downloads: 154,
    release: '11/16/2021',
    description:
      'WARNING: Re-uploading or selling for personal use is prohibited!!',
    categories: ['Animals & Pets'],
    author: {
      name: 'Ryuism',
      avatar: authorUlr('author1').avatar,
      isFollow: false,
    },
    represent: modelUrl('model7').represent,
    setting: {
      url: modelUrl('model7').url,
      backgroundColor: '#cccccc',
      camera: {
        cameraPosition: [0, 0.5, 2.3],
        lookAt: [0, 0.5, 0],
      },
      bloom: {
        isBloom: false,
        parameter: [0, 0, 0], // Sáng tổng thể(lớn), Độ chói(nhỏ), độ blur(nhỏ)
      },
      animation: {
        default: 0,
        quantity: 3,
      },
    },
  },
  {
    id: 'model8',
    name: 'T-90MS',
    views: 524,
    like: 33,
    isLike: false,
    downloads: 127,
    release: '01/16/2024',
    description:
      'T-90MS (Object 188AM “Breakthrough-2”) is a deep modernization of the T-90 main battle tank. The export versions of these tank modifications are known under the names T-90CM/MS.',
    categories: ['Cars & Vehicles', 'Weapons & Military'],
    author: {
      name: 'Cloostyyyk',
      avatar: authorUlr('author1').avatar,
      isFollow: false,
    },
    represent: modelUrl('model8').represent,
    setting: {
      url: modelUrl('model8').url,
      backgroundColor: '#cccccc',
      camera: {
        cameraPosition: [120, 80, 120],
        lookAt: [0, 0, 0],
      },
      bloom: {
        isBloom: false,
        parameter: [0, 0, 0], // Sáng tổng thể(lớn), Độ chói(nhỏ), độ blur(nhỏ)
      },
      animation: {
        default: 0,
        quantity: 0,
      },
    },
  },
  {
    id: 'model9',
    name: 'WoP - Octopus Pirate King (High Poly)',
    views: 2311,
    like: 114,
    isLike: false,
    downloads: 390,
    release: '11/26/2009',
    description:
      'WARNING: This model was released for FREE on DeviantArt and later reuploaded and sold by this user . BE SURE NOT TO GIVE MONEY TO THIS SCAMMER',
    categories: ['Animals & Pets', 'Characters & Creatures'],
    author: {
      name: 'Doctor A.',
      avatar: authorUlr('author1').avatar,
      isFollow: false,
    },
    represent: modelUrl('model9').represent,
    setting: {
      url: modelUrl('model9').url,
      backgroundColor: '#cccccc',
      camera: {
        cameraPosition: [0, 7, 28],
        lookAt: [0, 7, 0],
      },
      bloom: {
        isBloom: false,
        parameter: [0, 0, 0], // Sáng tổng thể(lớn), Độ chói(nhỏ), độ blur(nhỏ)
      },
      animation: {
        default: 1,
        quantity: 16,
      },
    },
  },
];
