<template src="./index.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhoneApplicationComponent from '@/components/phone-application/PhoneApplicationComponent.vue';

@Component({
  components: {
    'phone-application-component': PhoneApplicationComponent
  }
})
export default class PhoneView extends Vue {
    applicationsFooter = [{
      icon: 'img/apps/caller/ico.png',
      label: 'Telefone',
      link: '/apps/caller'
    }, {}, {}, {}];

    applicationsHome = [{
      icon: 'img/apps/calculator/ico.png',
      label: 'Calculadora',
      link: '/apps/calculator'
    }, {
      icon: 'img/apps/clock/ico.png',
      label: 'Relógio',
      link: '/apps/clock'
    }
    /*
    {
      icon: '/img/apps/instagram/ico.png',
      label: 'instagram',
      link: '/apps/instagram'
    }, {
      icon: 'img/apps/youtube/ico.png',
      label: 'Youtube',
      link: '/apps/youtube'
    }, {
      icon: 'img/apps/cam/ico.png',
      label: 'Câmera',
      link: '/apps/cam'
    }, {
      icon: 'img/apps/calendar/ico.png',
      label: 'Calendário',
      link: '/apps/calendar'
    }, {
      icon: 'img/apps/photos/ico.png',
      label: 'Fotos',
      link: '/apps/photos'
    }, {
      icon: 'img/apps/contacts/ico.png',
      label: 'Contatos',
      link: '/apps/contacts'
    }, {
      icon: 'img/apps/twitter/ico.png',
      label: 'Twitter',
      link: '/apps/twitter'
    }, {
      icon: 'img/apps/safari/ico.png',
      label: 'Safari',
      link: '/apps/safari'
    }
    */
    ];
}
</script>

<style lang="sass" scoped src="./style.sass"></style>
