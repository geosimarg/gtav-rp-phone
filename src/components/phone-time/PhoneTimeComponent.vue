<template src="./index.html"></template>

<script lang="ts">
import globalVariables from '@/variables';
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class PhoneTimeComponent extends Vue {
  @PropSync('whiteIcons', { default: false }) public white!: boolean;
  @Prop({ default: false }) public hideClock!: boolean;
  time = '00:00';

  GetToday(): Date {
    return globalVariables.today;
  }

  ClockStart(): void {
    this.time = this.GetToday().toLocaleTimeString('pt-br', { hour12: false, timeStyle: 'short' });
    setTimeout(() => {
      this.ClockStart();
    }, 1000);
  }

  constructor() {
    super();
    this.ClockStart();
  }
}
</script>

<style lang="sass" scoped src="./style.sass"></style>
