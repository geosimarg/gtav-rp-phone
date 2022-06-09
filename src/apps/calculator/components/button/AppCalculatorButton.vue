<template src="./index.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppCalculatorButton extends Vue {
    @Prop({ default: false }) public isOperator!: boolean;
    @Prop({ default: false }) public isZero!: boolean;
    @Prop({ default: false }) public isFunc!: boolean;
    @Prop({ default: '' }) public value!: string;

    EmitClick() {
      this.$emit('click', this.value);
    }
}
</script>

<style lang="sass" src="./style.sass"></style>
