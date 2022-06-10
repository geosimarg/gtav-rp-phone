<template src="./index.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhoneBackbuttonComponent from '@/components/phone-backbutton/PhoneBackbuttonComponent.vue';
import AppCallerBottomButton from '@/apps/caller/components/caller-bottom-button/AppCallerBottomButton.vue';

@Component@Component({
  components: {
    AppCallerBottomButton,
    PhoneBackbuttonComponent
  }
})
export default class AppCallerBottom extends Vue {
}
</script>

<style lang="sass" src="./style.sass"></style>
