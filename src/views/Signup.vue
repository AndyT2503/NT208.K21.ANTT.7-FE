<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout md-layout-item md-size-100">
            <div class="md-layout-item md-size-66" v-if="windowWidth > 960">
              <lottie :options="lottie.defaultOptions" />
            </div>
            <login-card
              header-color="green"
              class="md-layout-item md-size-33 md-small-size-85"
            >
              <h4 slot="title" class="card-title">
                Tham gia cùng V-GO ngay
              </h4>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>First Name...</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <p data-aos="fade-left" data-aos-delay="350" slot="redirect">
                Đã có tài khoản?<router-link :to="{ name: 'login' }">
                  Đăng nhập ngay
                </router-link>
              </p>
              <md-button
                slot="footer"
                class="md-simple md-success md-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Đăng Ký
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import Lottie from "vue-lottie";
import travelMan from "@/assets/lotties/travel-man.json";
import ScreenSizeMixin from "@/mixins/screen_size.js";

export default {
  components: {
    LoginCard,
    Lottie
  },
  mixins: [ScreenSizeMixin],
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      lottie: {
        defaultOptions: { animationData: travelMan },
        animationSpeed: 1
      }
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/nature-3.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>
