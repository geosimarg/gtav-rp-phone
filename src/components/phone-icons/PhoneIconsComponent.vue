<template src="./index.html"></template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class PhoneIconsComponent extends Vue {
    @PropSync('whiteIcons', { default: false }) public white!: boolean;
}
</script>

<style lang="sass" scoped src="./style.sass"></style>
