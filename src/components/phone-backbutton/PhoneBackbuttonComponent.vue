<template src="./index.html"></template>

<script lang="ts">
import router from '@/router';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PhoneBackbuttonComponent extends Vue {
  GoToHome(): void {
    router.back();
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
