<template src="./index.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {

  }
})
export default class AppContactsGroupsLetters extends Vue {
  @Prop() public contacts!: Record<string, unknown>[];

  contactsGroupsletters = [{
    label: 'A',
    contacts: [{}]
  }, {
    label: 'B',
    contacts: [{}]
  }, {
    label: 'c',
    contacts: [{}]
  }];

  GetContacts(): void {
    this.contacts.forEach((c) => {
      for (const i in this.contactsGroupsletters) {
        if (!this.contactsGroupsletters[i].contacts[0] === Object().empty) {
          this.contactsGroupsletters[i].contacts.pop();
        }
        if (this.contactsGroupsletters[i].label.toLowerCase() === (c.name as string).charAt(0).toLowerCase()) {
          this.contactsGroupsletters[i].contacts.push(c);
          break;
        }
      }
    });
    console.log(this.contactsGroupsletters);
  }

  constructor() {
    super();
    setTimeout(() => {
      this.GetContacts();
    }, 0);
  }

  OpenContact(c: any): void {
    console.log(c);
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
