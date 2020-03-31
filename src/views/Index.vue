<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout md-layout-item md-size-100 md-small-size-80">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h1 class="title" data-aos="fade-down" data-aos-delay="50">
                V-GO - mang Việt Nam lại gần hơn.
              </h1>
              <h4 data-aos="fade-up" data-aos-delay="200">
                Du lịch tại nhà mùa corona cùng V-GO. Nơi chia sẽ những hành
                trình cùng Việt Nam.
              </h4>
              <br />
              <md-button
                @click="$router.push({ name: 'login' })"
                class="md-success md-lg"
                target="_blank"
                data-aos="fade-left"
                data-aos-delay="300"
                ><i class="fas fa-play"></i> Login</md-button
              >
            </div>
            <div
              v-if="windowWidth > 960"
              class="md-layout-item md-size-50 md-small-size-100"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <lottie
                :options="lottie.defaultOptions"
                :height="400"
                :width="400"
              />
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <newest-post></newest-post>
        </div>

        <div class="container">
          <top-user></top-user>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopUser from "./components/LandingPage/TopUser";
import NewestPost from "./components/LandingPage/NewestPost";
import Lottie from "vue-lottie";
import stayHomeLottie from "@/assets/lotties/stay-at-home.json";
import ScreenSizeMixin from "@/mixins/screen_size.js";

export default {
  components: {
    TopUser,
    NewestPost,
    Lottie
  },
  mixins: [ScreenSizeMixin],
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/header-main.jpg")
    }
  },
  data() {
    return {
      lottie: {
        defaultOptions: { animationData: stayHomeLottie },
        animationSpeed: 1
      }
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>
