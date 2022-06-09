<template src="./index.html"></template>

<style lang="scss" src="./style.scss"></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhoneFrameComponent from '@/components/phone-frame/PhoneFrameComponent.vue';
import PhoneTimeComponent from '@/components/phone-time/PhoneTimeComponent.vue';
import PhoneContainerComponent from '@/components/phone-container/PhoneContainerComponent.vue';
import PhoneIconsComponent from '@/components/phone-icons/PhoneIconsComponent.vue';
import PhoneNotificationComponent from '@/components/phone-notification/PhoneNotificationComponent.vue';

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
  whiteIcons = false;

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
    this.whiteIcons = !this.whiteIcons;
  }
}
</script>
