<template>
  <div class="wrapper overflow-auto">
    <div class="main">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-30 md-small-size-100 order-lg-2 order-xl-2 order-sm-1 order-md-1"
            >
              <form
                action="#"
                method="post"
                novalidate="novalidate"
                style="margin-left:20px;"
                class="searchBox"
              >
                <div class="row">
                  <div class="col-lg-12">
                    <div class="row" style="margin-top:20px">
                      <div class="col-lg-7 col-md-7 col-sm-12 p-0 searchItem">
                        <input type="text" class="form-control search-slt" placeholder="Tìm kiếm" />
                      </div>
                      <div class="col-lg-7 col-md-7 col-sm-12 p-0 searchItem">
                        <select class="form-control search-slt" id="exampleFormControlSelect1">
                          <option>Tất cả</option>
                          <option>Người đăng</option>
                          <option>Hình ảnh</option>
                          <option>Địa điểm</option>
                        </select>
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-12 p-0 searchItem">
                        <button type="button" class="btn btn-danger wrn-btn">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="md-layout-item md-size-70 md-small-size-100 order-lg-1 order-xl-1 order-sm-2 order-md-2"
            >
              <div v-for="index in 10" :key="index" class="my-3">
                <div class="md-layout md-layout-item activity-box">
                  <div class="md-layout-item md-size-100 d-flex activity-box--header">
                    <div class="profile-photo">
                      <img class="rounded-circle" src="@/assets/img/faces/avatar.jpg" />
                    </div>
                    <div class="ml-3">
                      <router-link class="h5" :to="{ name: 'profile' }">Jenifer Law</router-link>Write a post
                      <p class="text-muted">2 hours ago</p>
                    </div>
                  </div>
                  <div class="md-layout-item md-size-100 mt-3">
                    Bootdey is a gallery of free snippets resources templates
                    and utilities for bootstrap css hmtl js framework. Codes for
                    developers and web designers
                    <div class="m-3">
                      <img class="w-100" src="@/assets/img/faces/avatar.jpg" />
                    </div>
                  </div>
                  <div class="my-1">
                    <md-button v-if="true" class="md-rose md-sm md-round">
                      <md-icon class="mr-1">favorite</md-icon>20
                    </md-button>
                    <md-button v-if="true" class="md-info md-sm md-round ml-3">
                      <md-icon class="mr-1">comment</md-icon>20
                    </md-button>
                  </div>
                  <hr class="w-100 my-1" />
                  <div class="d-flex mt-1 align-items-center w-100">
                    <!-- <div class="profile-photo--comment mr-3">
                      <img class="rounded-circle" src="@/assets/img/faces/avatar.jpg" />
                    </div>-->
                    <md-field class="flex-fill">
                      <md-icon>comment</md-icon>
                      <label>Leave a comment</label>
                      <md-input v-model="floatingLabel" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="d-flex mt-1 align-items-center w-100">
                    <img
                      class="profile-photo--comments rounded-circle"
                      src="@/assets/img/faces/avatar.jpg"
                    />
                    <div class="flex-fill ml-3">
                      <router-link class="h5" :to="{ name: 'profile' }">Jenifer Law</router-link>Can i take a picture?
                      <p class="text-muted m-0">2 hours ago</p>
                    </div>
                  </div>
                </div>
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
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg2.jpg")
    },
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

.activity-box {
  border: 1px solid #dddddd;
  box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;
  padding: 20px;
  border-radius: 1rem;
  .profile-photo {
    height: 60px;
    width: 60px;
    &--comment {
      height: 40px;
      width: 56px;
    }
    &--comments {
      height: 40px;
      width: 40px;
    }
  }
}
.searchItem{
  margin: 1px 1px 1px 1px;
}
@media screen and (min-width: 1000px) {
  .searchBox {
    position: fixed;
  }
}
</style>
