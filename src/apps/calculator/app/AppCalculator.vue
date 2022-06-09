<template src="./index.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppCalculatorButton from '@/apps/calculator/components/button/AppCalculatorButton.vue';
import PhoneBackbuttonComponent from '@/components/phone-backbutton/PhoneBackbuttonComponent.vue';

@Component({
  components: {
    AppCalculatorButton,
    PhoneBackbuttonComponent
  }
})
export default class AppCalculator extends Vue {
  valueCurrent = '0';
  valueLast: string|null = null;
  operator: void|null = null;
  calc: ((n1: number, n2: number) => string)|undefined;
  operatorSelected = false;

  ClearCalc(): void {
    this.valueCurrent = '';
  }

  ChangeOperator(): void {
    this.valueCurrent = this.valueCurrent.charAt(0) === '-' ? this.valueCurrent.slice(1) : `-${this.valueCurrent}`;
  }

  Percentage(): void {
    this.valueCurrent = `${parseFloat(this.valueCurrent) / 100}`;
  }

  PutNumber(num: string): void {
    if (this.valueCurrent === '0') {
      this.valueCurrent = '';
    }

    if (this.operatorSelected) {
      this.valueCurrent = '';
      this.operatorSelected = false;
    }

    this.valueCurrent = `${this.valueCurrent}${num}`;
  }

  PutDot(): void {
    if (this.valueCurrent.indexOf(',') === -1) {
      this.PutNumber(',');
    }
  }

  SetValue(): void {
    this.valueLast = this.valueCurrent;
    this.operatorSelected = true;
  }

  Result(): void {
    this.valueCurrent = this.calc!(
      parseFloat(this.valueLast!.replace(',', '.') ?? ''),
      parseFloat(this.valueCurrent.replace(',', '.') ?? '')
    );
    this.valueLast = null;
  }

  SetOperator(o: string): void {
    this.calc = (n1: number, n2: number) => {
      let n = 0;
      switch (o) {
        case '+': n = n1 + n2;
          break;
        case '-': n = n1 - n2;
          break;
        case '÷':
        case '/': n = n1 / n2;
          break;
        case 'x':
        case '*': n = n1 * n2;
          break;
      }
      return n.toString().replace('.', ',');
    };
    this.SetValue();
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
