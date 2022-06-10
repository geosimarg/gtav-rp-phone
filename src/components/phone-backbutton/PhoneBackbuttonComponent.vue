<template src="./index.html"></template>

<script lang="ts">
import router from '@/router';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PhoneBackbuttonComponent extends Vue {
  @Prop({ default: true }) public white!: boolean;
  GoToHome(): void {
    router.back();
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
