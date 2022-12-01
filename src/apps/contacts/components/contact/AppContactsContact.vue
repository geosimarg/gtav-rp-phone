<template src="./index.html"></template>

<script lang="ts">
import globalVariables from '@/variables';
import functions from '@/functions';
import { Component, Prop, Vue } from 'vue-property-decorator';

import AppCallerButton from '@/apps/caller/components/caller-button/AppCallerButton.vue';
import AppCallerBottom from '@/apps/caller/components/caller-bottom/AppCallerBottom.vue';
import PhoneInputComponent from '@/components/phone-input/PhoneInputComponent.vue';
import AppContactsPlayerCard from '@/apps/contacts/components/player-card/AppContactsPlayerCard.vue';
import AppContactsGroupsLetters from '@/apps/contacts/components/contacts-groups-letters/AppContactsGroupsLetters.vue';

@Component({
  components: {
    AppCallerButton,
    AppCallerBottom,
    PhoneInputComponent,
    AppContactsPlayerCard,
    AppContactsGroupsLetters
  }
})
export default class AppContactsContact extends Vue {
  public userName!: string|undefined;
  public userAvatar!: string|undefined;
  public userNumber!: string|undefined;

  userId = -1;

  DoCall(): void {
    console.log(this.userNumber);
  }

  constructor() {
    super();
    this.userId = Number(this.$route.params.userid);

    const user = globalVariables.contacts.find(c => c.id === this.userId);

    this.userName = user?.name;
    this.userAvatar = user?.avatar || 'https://placekitten.com/64/64';
    this.userNumber = functions.FormatNumber(user?.number);
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
