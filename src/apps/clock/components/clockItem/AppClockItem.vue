<template src="./index.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppClockButton extends Vue {
    @Prop() public clock!: Record<string, unknown>;
    dayPeriod = '';
    time = '00:00';

    GetToday(): Date {
      return (this.clock!.time as Date);
    }

    FixToday(date: Date): Date {
      return new Date(date.setHours(date.getHours() + Number(this.clock!.time)));
    }

    ClockStart(): void {
      const today = this.FixToday(new Date());
      const m = today.getMinutes();
      this.time = (today.getHours() - 12).toString().concat(':', (m < 10 ? '0'.concat(m.toString()) : m.toString()));
      this.dayPeriod = today.getHours() > 12 ? 'PM' : 'AM';
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

<style lang="sass" src="./style.sass"></style>
