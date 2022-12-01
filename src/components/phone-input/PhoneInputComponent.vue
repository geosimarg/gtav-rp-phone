<template src="./index.html"></template>
<style lang="sass" scoped src="./style.sass"></style>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class PhoneInputComponent extends Vue {
    @PropSync('value', { default: '' }) public pubValue!: string;
    @Prop() public placeholder!: string;
    @PropSync('type', { default: 'text' }) public pubType!: string;
}
</script>
