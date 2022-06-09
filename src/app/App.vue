<template src="./index.html"></template>

<style lang="scss" src="./style.scss"></style>

<script lang="ts">
import globalVariables from '@/variables';
import { Component, Vue } from 'vue-property-decorator';
import PhoneFrameComponent from '@/components/phone-frame/PhoneFrameComponent.vue';
import PhoneTimeComponent from '@/components/phone-time/PhoneTimeComponent.vue';
import PhoneContainerComponent from '@/components/phone-container/PhoneContainerComponent.vue';
import PhoneIconsComponent from '@/components/phone-icons/PhoneIconsComponent.vue';
import PhoneNotificationComponent from '@/components/phone-notification/PhoneNotificationComponent.vue';
import router from '@/router';

@Component({
  components: {
    PhoneFrameComponent,
    PhoneContainerComponent,
    PhoneTimeComponent,
    PhoneIconsComponent,
    PhoneNotificationComponent
  }
})
export default class App extends Vue {
  notification = {};
  showingNotification = false;
  whiteIcons = true;
  hideClock = true;
  today: Date = new Date();

  ShowNotification(
    title: string,
    message: string,
    app: string,
    icon: string
  ): void {
    if (!this.showingNotification) {
      this.notification = {
        icon,
        app,
        title,
        message
      };
    } else {
      this.notification = {};
    }

    this.showingNotification = !this.showingNotification;
  }

  WhiteIcons(): void {
    this.SetWhiteIcons(!this.whiteIcons);
  }

  SetWhiteIcons(white: boolean): void {
    this.whiteIcons = white;
  }

  SetHideClock(hide: boolean): void {
    this.hideClock = hide;
  }

  ClockStart() {
    setInterval(() => {
      globalVariables.today = new Date();
    }, 1000);
  }

  constructor() {
    super();
    this.ClockStart();
    router.beforeEach((to, from, next) => {
      this.SetWhiteIcons(to.meta!.whiteIcons);
      this.SetHideClock(to.meta!.hideClock);
      next();
    });
  }
}
</script>
