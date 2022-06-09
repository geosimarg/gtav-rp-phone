<template src="./index.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhoneBackbuttonComponent from '@/components/phone-backbutton/PhoneBackbuttonComponent.vue';
import globalVariables from '@/variables';
import router from '@/router';

@Component({
  components: {
    PhoneBackbuttonComponent
  }
})
export default class LookView extends Vue {
  myPass = globalVariables.userPin;
  currentPass = '';

  EnterPassCode(code: string): void {
    this.currentPass = this.currentPass.concat(code);
    if (this.currentPass === this.myPass) {
      router.push('/home');
    }
  }
}
</script>

<style lang="sass" scoped src="./style.sass"></style>
