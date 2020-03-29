<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <router-link :to="{ name: 'index' }">
        <div class="md-toolbar-section-start">
          <h3 class="md-title">
            <img class="logo-bar md-image" src="@/assets/img/logo.png" /> V-GO
          </h3>
        </div>
      </router-link>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-white md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-list-item href="javascript:void(0)">
                <p>Discover</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)">
                <p>Whishlist</p>
              </md-list-item>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button class="md-rose md-just-icon md-round"
                      ><md-icon>email</md-icon></md-button
                    >
                  </div>
                </a>
              </li>

              <li v-if="!true" class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down" class="profile-photo">
                      <div
                        class="profile-photo-small"
                        slot="title"
                        data-toggle="dropdown"
                      >
                        <img src="@/assets/img/faces/avatar.jpg" alt="Circle Image" />
                      </div>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-header">Dropdown header</li>
                        <li>
                          <a href="#pablo" class="dropdown-item">Me</a>
                        </li>
                        <li>
                          <a href="#pablo" class="dropdown-item"
                            >Settings and other stuff</a
                          >
                        </li>
                        <li>
                          <a href="#pablo" class="dropdown-item">Sign Out</a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li v-else class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down" class="profile-photo">
                      <div
                        class="profile-photo-small"
                        slot="title"
                        data-toggle="dropdown"
                      >
                        <img src="@/assets/img/faces/default.png" alt="Circle Image" />
                      </div>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-header">Dropdown header</li>
                        <li>
                          <a href="#pablo" class="dropdown-item">Login</a>
                        </li>
                        <li>
                          <a href="#pablo" class="dropdown-item">Signup</a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
