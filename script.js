Vue.createApp({
  data() {
    return {
      checkedBoxes: [],
    };
  },
  methods: {
    controlClicks() {
      if (this.checkedBoxes.length === 3) {
        this.checkedBoxes.splice(1, 1);
      }
    },
  },
}).mount("#app");
