<template src="./index.html"></template>

<script lang="ts">
import globalVariables from '@/variables';
import { Component, Vue } from 'vue-property-decorator';

import AppCallerButton from '@/apps/caller/components/caller-button/AppCallerButton.vue';
import AppCallerBottom from '@/apps/caller/components/caller-bottom/AppCallerBottom.vue';

@Component({
  components: {
    AppCallerButton,
    AppCallerBottom
  }
})
export default class AppCaller extends Vue {
  currentNumber = '';
  displayNumber = '';

  Format(): void {
    this.displayNumber = this.currentNumber;
    if (this.currentNumber.length > 3 && this.currentNumber.length < 9) {
      this.displayNumber = this.currentNumber.slice(0, 4).concat('-', this.currentNumber.slice(4, this.currentNumber.length));
    } else if (this.currentNumber.length === 9) {
      this.displayNumber = this.currentNumber.slice(0, 1).concat(' ', this.currentNumber.slice(1, 5), '-', this.currentNumber.slice(5, this.currentNumber.length));
    } else if (this.currentNumber.length > 9 && this.currentNumber.length < 12) {
      this.displayNumber = '('.concat(this.currentNumber.slice(0, 2), ') ', this.currentNumber.slice(2, 3), ' ', this.currentNumber.slice(3, 7), '-', this.currentNumber.slice(7, 11));
    }
  }

  PutNum(n: string): void {
    this.currentNumber = this.currentNumber.concat(n);
    this.Format();
  }

  RemoveNum(): void {
    this.currentNumber = this.currentNumber.slice(0, -1);
    this.Format();
  }

  DoCall(): void {
    console.log(this.currentNumber);
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
