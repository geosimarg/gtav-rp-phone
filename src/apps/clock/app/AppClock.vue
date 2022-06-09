<template src="./index.html"></template>

<script lang="ts">
import globalVariables from '@/variables';
import { Component, Vue } from 'vue-property-decorator';
import AppClockItem from '@/apps/clock/components/clockItem/AppClockItem.vue';
import PhoneBackbuttonComponent from '@/components/phone-backbutton/PhoneBackbuttonComponent.vue';

@Component({
  components: {
    AppClockItem,
    PhoneBackbuttonComponent
  }
})
export default class AppClock extends Vue {
  clocks = globalVariables.clocks;
  today = globalVariables.today;

  StartClock(): void {
    this.today = globalVariables.today;
  }

  constructor() {
    super();
    this.StartClock();
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
