<template src="./index.html"></template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class PhoneTimeComponent extends Vue {
  @PropSync('whiteIcons', { default: false }) public white!: boolean;
  @Prop({ default: false }) public hideClock!: boolean;
  time = '00:00';

  ClockStart() {
    const vm = this;
    setInterval(() => {
      const today = new Date();
      vm.time = today.toLocaleTimeString('pt-br', { hour12: false, timeStyle: 'short' });
    }, 1000);
  }

  constructor() {
    super();
    this.ClockStart();
  }
}
</script>

<style lang="sass" scoped src="./style.sass"></style>
