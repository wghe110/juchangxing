<template>
  <div class="wrap">
    <div class="top-item">
      <img src="./assets/logo.jpg" alt="" class="logo" />
      <div class="btns">
        <a href="#">王功贺</a>
        <a href="#" style="color: #57a1c8">我的申报</a>
        <a href="#">
          <van-icon name="scan" style="margin-right: 6px" />
          <span>场所码扫码</span>
        </a>
      </div>
    </div>

    <van-collapse v-model="activeNames" class="info">
      <van-collapse-item name="1">
        <template #title>
          <div class="opt-tit">绿码 一 点击查看详情</div>
        </template>
        <div style="margin-bottom: -1px">
          <van-cell title="苏康码" value="绿色" />
          <van-cell
            title="行程卡"
            value-class="nowrap-opt"
            value="未去过中高风险地区城市"
          />
          <van-cell title="核酸" value="阴性" />
          <van-cell title="核酸检测时间" :value="yesterdayDate" />
        </div>
      </van-collapse-item>
    </van-collapse>

    <img src="./assets/images/pic_03.png" alt="" class="pic" />
    <div class="time">{{ nowDate }}</div>
    <img src="./assets/images/pic_05.png" alt="" class="pic" />
  </div>
</template>

<script>
import { format, subDays } from "date-fns";

export default {
  components: {},
  data() {
    return {
      nowDate: this.formatDate(),
      timer: null,

      activeNames: [],
      yesterdayDate: format(subDays(new Date(), 1), "yyyy-MM-dd HH:mm:ss"),
    };
  },
  created() {
    clearInterval(this.timer);
    this.timer = setInterval(this.formatDate, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    formatDate() {
      this.nowDate = format(new Date(), "yyyy/M/d HH:mm:ss");
    },
  },
};
</script>

<style lang="scss">
.info {
  .van-collapse-item__title {
    padding: 10px;
  }
  .van-collapse-item__content {
    padding: 0 0;
  }
  .van-collapse-item__title::after {
    left: 0;
    right: 0;
  }
}
</style>

<style lang="scss" scoped>
.wrap {
  min-height: 100vh;
  background-color: #f8f8f8;
  font-size: 0;
  padding-top: 10px;
}
.time {
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 26px;
  font-weight: bolder;
  color: #000;
  font-family: "微软雅黑";
  margin-bottom: 10px;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
  top: -2px;
}
.pic {
  width: 100%;
}
.top-item {
  height: 120px;
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 28px;
  margin-bottom: -1px;
  > .logo {
    height: 66px;
    width: 66px;
    border-radius: 50%;
    animation: logoAnimation 2s ease infinite;
  }
  > .btns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 66px;
    align-items: flex-end;
    > a {
      color: #000;
      font-size: 16px;
      text-decoration: none;
    }
  }
}

.opt-tit {
  color: #a6ceac;
  font-size: 16px;
}

.info {
  margin-bottom: 10px;
  border-bottom: 1px solid #e4e4e4;
}

.nowrap-opt {
  white-space: nowrap;
}

@keyframes logoAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}
</style>