import { defineStore } from 'pinia';

export const SliderStore = defineStore({
  id: 'SliderStore',
  state: () => ({ isCollapsed: false }),

  getters: {
    getIsCollapsed: (state) => state.isCollapsed,
  },

  actions: {
    setIsCollapse(isCollapsed: boolean) {
      this.isCollapsed = isCollapsed;
    },
    triggerCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
});
