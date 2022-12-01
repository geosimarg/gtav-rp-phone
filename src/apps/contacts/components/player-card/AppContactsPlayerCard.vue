<template src="./index.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppContactsPlayerCard extends Vue {
  @Prop() public playerName!: string;
}
</script>

<style lang="sass" src="./style.sass"></style>
