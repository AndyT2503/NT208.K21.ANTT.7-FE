<template>
  <div>
    <div class="title">
      <h3>Top thành viên</h3>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-100 mx-auto md-small-size-100">
        <carousel
          :per-page="3"
          loop
          :speed="700"
          autoplay
          :autoplay-timeout="5000"
          :mouse-drag="false"
        >
          <slide v-for="index in 10" :key="index">
            <div class="md-layout-item my-2">
              <div class="team-player">
                <md-card class="md-card-plain">
                  <div class="md-layout-item md-size-50 mx-auto">
                    <img
                      src="@/assets/img/faces/default.png"
                      alt="Thumbnail Image"
                      class="img-raised rounded-circle img-fluid"
                    />
                  </div>
                  <h4 class="card-title text-center mt-3">
                    <router-link :to="{ name: 'profile' }">
                      Jonh Hadid
                    </router-link>
                    <br />
                    <small class="card-description text-muted">Model</small>
                  </h4>

                  <md-card-content>
                    <p class="card-description">
                      An artist of considerable range, Chet Faker — the name
                      taken by Melbourne-raised, Brooklyn-based Nick Murphy —
                      writes, performs and records all of his own music, giving
                      it a warm, intimate feel with a solid groove structure.
                    </p>
                  </md-card-content>

                  <md-card-actions class="text-center">
                    <md-button
                      href="javascript:void(0)"
                      class="md-just-icon md-simple"
                    >
                      <i class="fab fa-twitter"></i>
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-just-icon md-simple"
                    >
                      <i class="fab fa-instagram"></i>
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-just-icon md-simple"
                    >
                      <i class="fab fa-facebook-square"></i>
                    </md-button>
                  </md-card-actions>
                </md-card>
              </div>
            </div>
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
