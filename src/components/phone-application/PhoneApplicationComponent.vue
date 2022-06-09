<template src="./index.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import router from '@/router';

@Component
export default class PhoneApplicationComponent extends Vue {
  @Prop() public app!: Record<string, unknown>;
  $props = ['appslot'];
  _appslot = '';

  GotoApp(link: string): void {
    router.push(link);
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
