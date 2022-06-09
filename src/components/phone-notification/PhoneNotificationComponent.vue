<template src="./index.html"></template>

<script lang="ts">
import { Component, PropSync, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class PhoneNotificationComponent extends Vue {
  @PropSync('notify') private notfy!: Record<string, unknown>;
  opened = false;
  @Watch('notfy')
  onChildChanged(val: Record<string, unknown>) {
    if (val.message) {
      this.opened = true;
    } else {
      this.opened = false;
    }
  }
}
</script>

<style lang="sass" scoped src="./style.sass"></style>
