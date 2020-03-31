<template>
  <div>
    <div class="title d-flex justify-content-between">
      <h3>Bài viết mới nhất</h3>
      <div class="d-flex align-items-center">
        <md-button class="md-info md-sm">Xem thêm</md-button>
      </div>
    </div>
    <div class="md-layout newest-post">
      <div class="md-layout-item md-size-100">
        <carousel
          :per-page="1"
          loop
          :speed="700"
          autoplay
          :autoplay-timeout="5000"
          navigationEnabled
          navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
          navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
        >
          <slide v-for="index in 10" :key="index">
            <router-link :to="{ name: 'post_detail' }">
              <div class="carousel-caption">
                <h4 data-aos="fade-up" data-aos-delay="100">
                  <md-icon>location_on</md-icon>
                  Somewhere Beyond, United States
                </h4>
                <p data-aos="fade-up" data-aos-delay="150">
                  Somewhere Beyond, United States, Somewhere Beyond, United
                  States Somewhere Beyond, United States Somewhere Beyond,
                  United States.
                </p>
              </div>
            </router-link>
            <img src="@/assets/img/bg.jpg" alt="carousel1" />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousel1: require("@/assets/img/nature-2.jpg"),
      carousel2: require("@/assets/img/nature.jpg"),
      carousel3: require("@/assets/img/nature-3.jpg")
    };
  }
};
</script>
