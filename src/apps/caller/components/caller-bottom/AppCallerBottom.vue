<template src="./index.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PhoneBackbuttonComponent from '@/components/phone-backbutton/PhoneBackbuttonComponent.vue';
import AppCallerBottomButton from '@/apps/caller/components/caller-bottom-button/AppCallerBottomButton.vue';

@Component@Component({
  components: {
    AppCallerBottomButton,
    PhoneBackbuttonComponent
  }
})
export default class AppCallerBottom extends Vue {
  @Prop({ default: '' }) public active!: string;

  GetActive() {
    console.log(this.active);
  }

  constructor() {
    super();
    this.GetActive();
  }

  updated() {
    this.GetActive();
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
