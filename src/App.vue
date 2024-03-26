<script setup lang="ts">
import moment from 'moment';
import left1 from "@/components/left1.vue";
import myMap from "@/components/my-map.vue";
import { onMounted, ref } from 'vue';
const city = ref('上海');
const nowDate = ref(moment(new Date()).format('yyyy-MM-DD HH:mm:ss'));

onMounted(() => {
  setInterval(() => {
    nowDate.value = moment(new Date()).format('yyyy-MM-DD HH:mm:ss');
  }, 1000)
})
</script>

<template>
  <div class="home">
    <div class="topbar">
      <div class="title">大屏可视化平台</div>
      <div class="navbar">
        <ul class="left">
          <!-- <li>数据分析1</li> -->
        </ul>
        <div class="right">
          现在是{{ nowDate }}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <left1 :city="city"></left1>
      </div>
      <div class="container-center">
        <myMap v-model="city"></myMap>
      </div>
      <div class="container-right">
        <!-- <left1></left1> -->
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.home {
  width: vw(1920);
  height: vh(1080);
  background-image: url('@/assets/pageBg.png');
  padding: vw(20);
}

.topbar {

  height: vh(100);
  padding-top: vh(30);
  position: relative;

  .navbar {
    display: flex;
    justify-content: space-between;
  }

  .title {
    line-height: vh(100);
    text-align: center;
    width: vw(200);
    position: absolute;
    font-size: vw(24);
    color: azure;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .left {

    line-height: vh(70);
    height: vh(70);
    font-size: vw(20);
    color: aliceblue;
    width: calc(50% - vw(150));
    background-color: #0f1325;

    li {
      background-color: rgb(148, 142, 142);
      text-align: center;
      width: vw(160);
      margin-right: vw(10);
      display: inline-block;
    }
  }

  .right {
    padding-left: vw(20);
    line-height: vh(70);
    font-size: vw(20);
    color: aliceblue;
    height: vh(70);
    width: calc(50% - vw(150));
    background-color: #0f1325;

  }
}

.container {
  margin-top: vh(20);
  height: vh(920);
  position: relative;
  display: flex;
  justify-content: center;

  .container-center {
    width: vw(1000);
    background-color: white;
  }

  .container-left {
    z-index: 9;
    position: absolute;
    left: 0;
    top: 0;
    height: vh(920);
    width: vw(460);
  }

  .container-right {
    z-index: 9;
    position: absolute;
    right: 0;
    top: 0;
    height: vh(920);
    width: vw(460);
  }

}
</style>
