<template src="./index.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppCallerBottomButton extends Vue {
  @Prop() public icon!: string;

  EmitClick() {
    //   this.$emit('click', this.value);
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
