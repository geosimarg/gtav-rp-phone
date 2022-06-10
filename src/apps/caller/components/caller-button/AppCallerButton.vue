<template src="./index.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppCallerButton extends Vue {
    @Prop({ default: false }) public isOperator!: boolean;
    @Prop({ default: false }) public inversed!: boolean;
    @Prop({ default: false }) public isFunc!: boolean;
    @Prop({ default: '' }) public value!: string;
    @Prop({ default: false }) public invisible!: boolean;
    @Prop({ default: '' }) public icon!: string;

    EmitClick() {
      this.$emit('click', this.value);
    }
}
</script>

<style lang="sass" src="./style.sass"></style>
