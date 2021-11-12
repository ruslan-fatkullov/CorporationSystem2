<template>
  <div class="reaction_test">
    <NavBar />
    <div
      class="content"
      v-bind:class="{ greenScreen: waitingScreen, yellowScreen: actionScreen }"
      @click="changeColor"
    >
      <h1>Reaction time test</h1>
    </div>
  </div>
</template>
<script>
import NavBar from "./Navigation.vue";
export default {
  data() {
    return {
      waitingScreen: false,
      actionScreen: false,
      content: {},
    };
  },
  components: {
    NavBar,
  },
  methods: {
    changeColor: function () {
      this.actionScreen = false;
      this.waitingScreen = !this.waitingScreen;
      if (this.waitingScreen) {
        this.timer();
      }
    },
    timer: function () {
      var time = this.randSec() / 2;
      setTimeout(() => {
        this.actionScreen = true;
        console.log(time);
      }, time);
    },
    randSec: function () {
      return Math.random() * 10000;
    },
  },
};
</script>
<style scoped>
.content {
  background-color: #210a468c;
  height: 70vh;
  text-align: left;
}
.greenScreen {
  background-color: rgb(17, 167, 42);
}
.yellowScreen {
  background-color: rgb(255, 230, 1);
}
</style>