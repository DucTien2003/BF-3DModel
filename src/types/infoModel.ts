export interface InfoModel {
  id: string;
  name: string;
  views: number;
  like: number;
  isLike: boolean;
  downloads: number;
  release: string;
  description: string;
  categories: string[];
  tags: string[];
  author: {
    name: string;
    avatar: string;
    isFollow: boolean;
  };
  represent: string;
  setting: {
    url: string;
    backgroundColor: string;
    camera: {
      cameraPosition: number[];
      lookAt: number[];
    };
    bloom: {
      isBloom: boolean;
      parameter: number[];
    };
    animation: number[];
  };
}
