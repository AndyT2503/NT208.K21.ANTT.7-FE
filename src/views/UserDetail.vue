<template>
  <div class="wrapper overflow-auto">
    <div class="main">
      <div class="section profile-content">
        <div class="container">
          <h2 class="ml-3 title">Personal Info</h2>
          <div class="md-layout m-3">
            <div
              class="md-layout md-layout-item md-size-30 md-small-size-100 justify-content-center"
            >
              <div
                class="md-layout-item md-size-80 md-small-size-50 md-xsmall-size-100 mb-3"
              >
                <img
                  src="@/assets/img/faces/avatar.jpg"
                  alt="Thumbnail Image"
                  class="img-raised rounded-circle"
                />
              </div>
              <md-field class="md-form-group mt-3 md-size-100">
                <input type="file" class="form-control-file" />
              </md-field>
            </div>
            <div class="md-layout-item md-size-70 md-small-size-100">
              <md-field class="md-form-group">
                <md-icon>face</md-icon>
                <label>Tên...</label>
                <md-input v-model="name"></md-input>
              </md-field>
              <md-field class="md-form-group mt-3">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group mt-3">
                <md-icon>lock_outline</md-icon>
                <label>Mật khẩu...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <div class="text-center mt-3">
                <md-button class="md-success">Save</md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "John herry",
      email: "email@example.com",
      password: ""
    };
  },
  props: {
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
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

<style lang="scss" scoped>
.main {
  margin-top: 70px;
  min-height: calc(100vh - 154px);
}
.profile-content {
  padding-top: 20px;
}
</style>
