import { defineStore } from 'pinia';

export const useCheckStore = defineStore('CheckStore', {
  state: () => ({ isHomePage: true, isLogin: true, isMobile: false }),

  getters: {
    getIsHomePage: (state) => state.isHomePage,
    getIsLogin: (state) => state.isLogin,
    getIsMobile: (state) => state.isMobile,
  },

  actions: {
    // isHomePage
    setIsHomePage(isHomePage: boolean) {
      this.isHomePage = isHomePage;
    },
    triggerHomePage() {
      this.isHomePage = !this.isHomePage;
    },

    // isLogin
    setIsLogin(isLogin: boolean) {
      this.isLogin = isLogin;
    },
    triggerLogin() {
      this.isLogin = !this.isLogin;
    },

    // isMobile
    setIsMobile(isMobile: boolean) {
      this.isMobile = isMobile;
    },
    triggerMobile() {
      this.isMobile = !this.isMobile;
    },
  },
});
