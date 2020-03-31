export default {
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  mounted: function() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
};
