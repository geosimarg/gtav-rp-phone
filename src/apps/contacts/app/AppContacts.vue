<template src="./index.html"></template>

<script lang="ts">
import globalVariables from '@/variables';
import { Component, Vue } from 'vue-property-decorator';

import AppCallerButton from '@/apps/caller/components/caller-button/AppCallerButton.vue';
import AppCallerBottom from '@/apps/caller/components/caller-bottom/AppCallerBottom.vue';
import PhoneInputComponent from '@/components/phone-input/PhoneInputComponent.vue';
import AppContactsPlayerCard from '@/apps/contacts/components/player-card/AppContactsPlayerCard.vue';
import AppContactsGroupsLetters from '@/apps/contacts/components/contacts-groups-letters/AppContactsGroupsLetters.vue';
import AppContactsContact from '@/apps/contacts/components/contact/AppContactsContact.vue';

@Component({
  components: {
    AppCallerButton,
    AppCallerBottom,
    PhoneInputComponent,
    AppContactsPlayerCard,
    AppContactsGroupsLetters,
    AppContactsContact
  }
})
export default class AppContacts extends Vue {
  currentNumber = '';
  playerName = 'Ramy Soeg';
  contactsList = globalVariables.contacts;
}
</script>

<style lang="sass" src="./style.sass"></style>
