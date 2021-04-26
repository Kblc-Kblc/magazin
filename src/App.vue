<template>
  <div id="app">
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from "@/components/v-main-wrapper";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    vMainWrapper,
  },
  methods: {
    ...mapActions(["SET_MOBILE", "SET_DESCTOP"]),
  },
  computed: {
    ...mapGetters(["IS_MOBILE", "IS_DESCTOP"]),
  },
  mounted() {
    let vm = this;
    window.addEventListener("resize", function () {
      if (window.innerWidth > 767) {
        vm.SET_DESCTOP();
        console.log("desc" + vm.IS_DESCTOP);
      } else {
        vm.SET_MOBILE();
        console.log("mobile" + vm.IS_MOBILE);
      }
    });
  },
};
</script>

<style>
</style>