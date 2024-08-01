<template>
  <div class="container-fluid">
    <nav
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: #3a3a3a"
    >
      <a class="navbar-brand" id="test" @click="changeImage(1)" href="#"
        >Dashboard
      </a>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { show: isMenuOpen }]">
        <ul class="navbar-nav custom-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="changeImage(3)">Tips-Tips</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="changeImage(2)">Jadwal</a>
          </li>
          <li class="nav-item">
            <button class="nav-link" href="#" @click="changeImage(4)">
              Kamar
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" href="#" @click="changeImage(5)">
              Hyperbaric
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" href="#" @click="changeImage(6)">
              Kertas Kinerja
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" href="#" @click="changeImage(7)">
              Bulletin
            </button>
          </li>
        </ul>
        <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
      </div>
    </nav>
  </div>
  <!-- Flip -->
  <div
    id="app"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false"
  >
    <Flipbook
      class="flipbook"
      :pages="pages"
      :pagesHiRes="pagesHiRes"
      :startPage="pageNum"
      v-slot="flipbook"
      ref="flipbook"
      @flip-left-start="onFlipLeftStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-right-start="onFlipRightStart"
      @flip-right-end="onFlipRightEnd"
      @zoom-start="onZoomStart"
      @zoom-end="onZoomEnd"
    >
      <div class="action-bar">
        <left-icon
          class="btn-slide left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft"
        />
        <plus-icon
          class="btn-slide plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn"
        />
        <span class="page-num">
          Page {{ flipbook.page }} of {{ flipbook.numPages }}
        </span>
        <minus-icon
          class="btn-slide minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut"
        />
        <right-icon
          class="btn-slide right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
        />
      </div>
    </Flipbook>
    <p class="credit">
      Photos from
      <a href="https://www.batubhayangkara.com/" target="_blank">RSHB</a>.
    </p>
  </div>
</template>
<script>
import "vue-material-design-icons/styles.css";
import LeftIcon from "vue-material-design-icons/ChevronLeftCircle";
import RightIcon from "vue-material-design-icons/ChevronRightCircle";
import PlusIcon from "vue-material-design-icons/PlusCircle";
import MinusIcon from "vue-material-design-icons/MinusCircle";
import Flipbook from "flipbook-vue";

export default {
  components: { Flipbook, LeftIcon, RightIcon, PlusIcon, MinusIcon },
  data() {
    return {
      pages: [],
      pagesHiRes: [],
      hasMouse: true,
      pageNum: null,
      isMenuOpen: false,
    };
  },
  methods: {
    onFlipLeftStart(page) {
      console.log("flip-left-start", page);
    },
    onFlipLeftEnd(page) {
      console.log("flip-left-end", page);
      window.location.hash = "#" + page;
    },
    onFlipRightStart(page) {
      console.log("flip-right-start", page);
    },
    onFlipRightEnd(page) {
      console.log("flip-right-end", page);
      window.location.hash = "#" + page;
    },
    onZoomStart(zoom) {
      console.log("zoom-start", zoom);
    },
    onZoomEnd(zoom) {
      console.log("zoom-end", zoom);
    },
    setPageFromHash() {
      const n = parseInt(window.location.hash.slice(1), 10);
      if (isFinite(n)) this.pageNum = n;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    // Method to change the image URLs based on the menu item clicked
    changeImage(menuItem) {
      switch (menuItem) {
        case 1:
          // Unggulan Dashboard
          this.pageNum = 1;
          this.pages = [
            null,
            "menu/cover/hospi-640.png",
            "menu/Unggulan/bayi-640.png",
            "menu/Unggulan/hyperbaric2-640.png",
            "menu/Unggulan/pirata-640.png",
            "menu/Unggulan/narkoba-640.png",
          ];
          this.pagesHiRes = [
            null,
            "menu/cover/hospi-1920.png",
            "menu/Unggulan/bayi-1920.png",
            "menu/Unggulan/hyperbaric2-1920.png",
            "menu/Unggulan/pirata-1920.png",
            "menu/Unggulan/narkoba-1920.png ",
          ];
          break;
        case 2:
          // Jadwal
          this.pageNum = 1;
          this.pages = [
            null,
            "menu/Jadwal/coverjw-640.png",
            "menu/Jadwal/jw1-640.png",
            "menu/Jadwal/jw2-640.png",
          ];
          this.pagesHiRes = [
            null,
            "menu/Jadwal/coverjw-1920.png",
            "menu/Jadwal/jw1-1920.png",
            "menu/Jadwal/jw2-1920.png",
          ];
          break;
        case 3:
          // Tips
          this.pageNum = 1;
          this.pages = [
            null,
            "menu/Tips-tips/covertips-640.png",
            "menu/Tips-tips/dbd-640.png",
            "menu/Tips-tips/dbd2-640.png",
            "menu/Tips-tips/gerd-640.png",
            "menu/Tips-tips/gerd2-640.png",
            "menu/Tips-tips/imunisasi-640.png",
            "menu/Tips-tips/imunisasi2-640.png",
            "menu/Tips-tips/stunting-640.png",
            "menu/Tips-tips/stunting-1920.png",
            "menu/Tips-tips/makan-640.png",
            "menu/Tips-tips/makan2-640.png",
          ];
          this.pagesHiRes = [
            null,
            "menu/Tips-tips/covertips-1920.png",
            "menu/Tips-tips/dbd-1920.png",
            "menu/Tips-tips/dbd2-1920.png",
            "menu/Tips-tips/gerd-1920.png",
            "menu/Tips-tips/gerd2-1920.png",
            "menu/Tips-tips/imunisasi-1920.png",
            "menu/Tips-tips/imunisasi2-1920.png",
            "menu/Tips-tips/stunting-640.png",
            "menu/Tips-tips/stunting-1920.png",
            "menu/Tips-tips/makan-1920.png",
            "menu/Tips-tips/makan2-1920.png",
          ];
          break;
        case 4:
          // Jadwal
          this.pageNum = 1;
          this.pages = [
            null,
            "menu/Kamar/coverkamar-640.png",
            "menu/Kamar/vvip-640.png",
            "menu/Kamar/vip-640.png",
            "menu/Kamar/kls1-640.png",
            "menu/Kamar/kls2-640.png",
            "menu/Kamar/kls3-640.png",
          ];
          this.pagesHiRes = [
            null,
            "menu/Kamar/coverkamar-1920.png",
            "menu/Kamar/vvip-1920.png",
            "menu/Kamar/vip-1920.png",
            "menu/Kamar/kls1-1920.png",
            "menu/Kamar/kls2-1920.png",
            "menu/Kamar/kls3-1920.png",
          ];
          break;
        case 5:
          // Hyperbaric
          this.pageNum = 1;
          this.pages = [
            null,
            "menu/Hyperbaric/coverhiperbarik-640.png",
            "menu/Hyperbaric/penjelasan-640.png",
            "menu/Hyperbaric/prosedur-640.png",
            "menu/Hyperbaric/syarat-640.png",
            "menu/Hyperbaric/tarif1-640.png",
          ];
          this.pagesHiRes = [
            null,
            "menu/Hyperbaric/coverhiperbarik-1920.png",
            "menu/Hyperbaric/penjelasan-1920.png",
            "menu/Hyperbaric/prosedur-1920.png",
            "menu/Hyperbaric/syarat-1920.png",
            "menu/Hyperbaric/tarif1-1920.png",
          ];
          break;
        case 6:
          // Kertas Kinerja
          this.pageNum = 1;
          this.pages = [
            null,
            "menu/dipa/dipa-640.png",
            "menu/dipa/1.jpg",
            "menu/dipa/2.jpg",
            "menu/dipa/3.jpg",
            "menu/dipa/4.jpg",
            "menu/dipa/5.jpg",
            "menu/dipa/6.jpg",
            "menu/dipa/7.jpg",
            "menu/dipa/8.jpg",
            "menu/dipa/9.jpg",
            "menu/dipa/10.jpg",
          ];
          this.pagesHiRes = [
            null,
            "menu/dipa/dipa-1920.png",
            "menu/dipa/1.jpg",
            "menu/dipa/2.jpg",
            "menu/dipa/3.jpg",
            "menu/dipa/4.jpg",
            "menu/dipa/5.jpg",
            "menu/dipa/6.jpg",
            "menu/dipa/7.jpg",
            "menu/dipa/8.jpg",
            "menu/dipa/9.jpg",
            "menu/dipa/10.jpg",
          ];
          break;
        case 7:
          // Buletin
          this.pageNum = 1;
          this.pages = [
            null,
            "menu/Bulletin/cover buletin - 640.png",
            "menu/Bulletin/Profil -640.png",
            "menu/Bulletin/Profil2 -640.png",
            "menu/Bulletin/baktikes1-640.png",
            "menu/Bulletin/baktikes2-640.png",
            "menu/Bulletin/pemilu - 640.png",
            "menu/Bulletin/baktikes3-640.png",
            "menu/Bulletin/baktikes4-640.png",
            "menu/Bulletin/layanan hyperbaric - 640.png",
            "menu/Bulletin/layanan pirata-640.png",
            "menu/Bulletin/layanan perluasan - 640.png",
          ];
          this.pagesHiRes = [
            null,
            "menu/Bulletin/cover buletin - 1920.png",
            "menu/Bulletin/Profil -1920.png",
            "menu/Bulletin/Profil2 -1920.png",
            "menu/Bulletin/baktikes1-1920.png",
            "menu/Bulletin/baktikes2-1920.png",
            "menu/Bulletin/pemilu - 1920.png",
            "menu/Bulletin/baktikes3-1920.png",
            "menu/Bulletin/baktikes4-1920.png",
            "menu/Bulletin/layanan hyperbaric - 1920.png",
            "menu/Bulletin/layanan pirata-1920.png",
            "menu/Bulletin/layanan perluasan - 1920.png",
          ];
          break;
        default:
          break;
      }
    },
    startRedirectTimeout() {
     
      const timeoutDuration = 20000; 
      this.inactivityTimeout = setTimeout(() => {
       
        window.location.href = "https://dashboard.batubhayangkara.com";
      }, timeoutDuration);
    },
    resetRedirectTimeout() {
      clearTimeout(this.inactivityTimeout);
      this.startRedirectTimeout();
    },
  },
  mounted() {
    window.addEventListener("keydown", (ev) => {
      const flipbook = this.$refs.flipbook;
      if (!flipbook) return;
      if (ev.keyCode == 37 && flipbook.canFlipLeft) flipbook.flipLeft();
      if (ev.keyCode == 39 && flipbook.canFlipRight) flipbook.flipRight();
    });
    // Simulate asynchronous pages initialization
    setTimeout(() => {
      this.pages = [
        null,
        "menu/cover/hospi-640.png",
        "menu/Unggulan/bayi-640.png",
        "menu/Unggulan/hyperbaric2-640.png",
        "menu/Unggulan/pirata-640.png",
        "menu/Unggulan/narkoba-640.png",
      ];
      this.pagesHiRes = [
        null,
        "menu/cover/hospi-1920.png",
        "menu/Unggulan/bayi-1920.png",
        "menu/Unggulan/hyperbaric2-1920.png",
        "menu/Unggulan/pirata-1920.png",
        "menu/Unggulan/narkoba-1920.png",
      ];
    }, 1);
    window.addEventListener("hashchange", this.setPageFromHash);
    this.setPageFromHash();
    // Initialize inactivity timeout
    this.startRedirectTimeout();
    window.addEventListener("mousemove", this.resetRedirectTimeout);
    window.addEventListener("keydown", this.resetRedirectTimeout);
  },
  beforeDestroy() {
    // Cleanup inactivity timeout and event listeners
    clearTimeout(this.inactivityTimeout);
    window.removeEventListener("mousemove", this.resetRedirectTimeout);
    window.removeEventListener("keydown", this.resetRedirectTimeout);
  },
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevent scrolling */
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh; /* Use min-height instead of height */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ccc;
  overflow: hidden;
}
a {
  color: inherit;
}
.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-bar .btn-slide {
  font-size: 30px;
  color: #999;
}

.action-bar .btn-slide svg {
  bottom: 0;
}

.action-bar .btn-slide:not(:first-child) {
  margin-left: 10px;
}

.has-mouse .action-bar .btn-slide:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}

.action-bar .btn-slide:active {
  filter: none !important;
}

.action-bar .btn-slide.disabled {
  color: #666;
  pointer-events: none;
}

.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}

.flipbook .viewport {
  width: 90vw !important;
  height: calc(100vh - 50px - 40px) !important;
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

.credit {
  font-size: 12px;
  line-height: 20px;
  margin: 10px;
}
.custom-nav {
  margin-left: 20px;
}
</style>
