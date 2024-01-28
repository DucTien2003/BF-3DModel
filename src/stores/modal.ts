import { defineStore } from 'pinia';
import { renderModel } from '@/utils';

import { InfoModel } from '@/types';

export const useModalStore = defineStore('ModalStore', {
  state: () => ({
    isMounted: false,
    isShowModal: false,
    model: null as InfoModel | any,
  }),

  getters: {
    getIsMounted: (state) => state.isMounted,
    getIsShowModal: (state) => state.isShowModal,
    getModel: (state) => state.model,
  },

  actions: {
    setIsShowModal(isShowModal: boolean) {
      this.isShowModal = isShowModal;
    },
    setIsMounted(isMounted: boolean) {
      this.isMounted = isMounted;
    },
    toggleShowModal(model: InfoModel) {
      this.isShowModal = !this.isShowModal;
      if (this.isShowModal) {
        this.model = model;

        if (this.isMounted) {
          renderModel(
            this.model.setting.url,
            this.model.setting.backgroundColor,
            this.model.setting.animation,
            this.model.setting.bloom,
            this.model.setting.camera,
          );
        }
      }
    },
    toggleLike() {
      if (this.model) {
        this.model.isLike = !this.model.isLike;
        if (this.model.isLike) {
          this.model.like++;
        } else {
          this.model.like--;
        }
      }
    },
  },
});
