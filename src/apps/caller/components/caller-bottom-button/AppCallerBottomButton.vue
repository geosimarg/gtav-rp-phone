<template src="./index.html"></template>

<script lang="ts">
import router from '@/router';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppCallerBottomButton extends Vue {
  @Prop() public icon!: string;
  @Prop({ default: false }) public active!: boolean;
  @Prop({ default: '' }) public target!: string;

  GoToTarget() {
    router.push(this.target);
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
