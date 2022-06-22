<template>
  <div class="result-box">
    <p class="title">후보별 득표율</p>
  </div>
  <div class="table-row" v-for="hubo in voteDatas" :key="hubo.hubo">
    <div class="name">
      {{ hubo.hubo }}
    </div>
    <div class="rate">
      <img :style="{ width: `${hubo.percentage * 10}px` }" class="barImgae" src="../assets/bar.png" /> {{
          hubo.percentage
      }}
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.voteDatas);
  },
  props: {
    voteDatas: Array,
  },
}
</script>
<style lang="scss">
.result-box {
  width: 100%;
  border: 2px solid black;
}

.title {
  font-size: x-large;
}

.name {
  border: 2px solid black;
  display: inline-block;
  margin: 0px;
  float: left;
  height: 50px;
  width: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rate {
  border: 2px solid black;
  display: inline-block;
  float: left;
  margin: 0px;
  height: 50px;
  width: 85vw;
  display: flex;
  align-items: center;
}

.barImgae {
  height: 30px;
}
</style>