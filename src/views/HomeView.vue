<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-for="item in items" :key="item.name">
      <span>
        {{ item.name }}
      </span> :
      <span>
        {{ item.age }}
      </span>
    </div>
    <!-- <button @click="btnClick">click me!</button> -->
    <HelloWorld msg="Welcome to Your Vue.js App" name1="정지훈" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import VotingView from "./VotingView.vue";
// import ResultView from "./ResultView.vue";


export default {
  name: "HomeView",
  props: {

  },
  created() {
    console.log("in created");
  },
  mounted() {
    console.log("");
  }
  ,
  components: {
    HelloWorld,
  },
  data() {
    return {
      items: [
        { name: "StopHoon", age: 28 },
        { name: "GoingHoon", age: 29 },
        { name: "BackHoon", age: 30 },
        { name: "FrontHoon", age: 27 },
        { name: "DBHoon", age: 26 },
      ]
    }
  },
  methods: {
    btnClick() {
      alert("button clicked!");
    }
  },
};
</script>
