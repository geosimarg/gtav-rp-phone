<template src="./index.html"></template>

<script lang="ts">
import router from '@/router';
import { Component, Vue } from 'vue-property-decorator';
import globalVariables from '@/variables';

@Component
export default class Screen0View extends Vue {
  clock = '00:00';
  date = 'hoje, esse mes esse ano';
  mouseDowned = false;
  y = 0;
  mouseY = 0;
  startY = 0;

  ClockStart(): void {
    const vm = this;
    setInterval(() => {
      const today = new Date();
      vm.clock = today.toLocaleTimeString('pt-br', { hour12: false, timeStyle: 'short' });
      vm.date = today.toLocaleDateString('pt-br', { month: 'long', weekday: 'long', day: 'numeric' });
    }, 1000);
  }

  WatchMousePosition(): void {
    if (this.startY === 0) {
      this.startY = this.mouseY;
    }
    this.y = this.startY - this.mouseY;

    if (this.y > 0) {
      document.getElementById('zero-display')?.style.setProperty('top', (-this.y).toString().concat('px'));
    }

    console.log({ startY: this.startY, mouseY: this.mouseY, currentY: this.y });
  }

  StopWatchMousePosition(): void {
    this.startY = 0;
    if (this.y > 134) {
      if (globalVariables.userPin !== '') {
        router.push('/look');
      } else {
        router.push('/home');
      }
    }
    document.getElementById('zero-display')?.style.setProperty('top', '0px');
  }

  onMouseDown(): void {
    this.mouseDowned = true;
    this.WatchMousePosition();
  }

  onMouseUp(): void {
    this.StopWatchMousePosition();
    this.mouseDowned = false;
  }

  SetMouseY(y: number): void {
    this.mouseY = y;
  }

  GetMouseY(): number {
    return this.mouseY;
  }

  GetMouseStatus(): boolean {
    return this.mouseDowned;
  }

  constructor() {
    super();
    this.ClockStart();
    document.addEventListener('mousemove', event => {
      this.SetMouseY(event.clientY);
      if (this.GetMouseStatus()) {
        this.WatchMousePosition();
      }
    });

    document.addEventListener('mouseup', event => {
      if (this.GetMouseStatus()) {
        this.onMouseUp();
      }
    });
  }
}
</script>

<style lang="sass" scoped src="./style.sass"></style>
