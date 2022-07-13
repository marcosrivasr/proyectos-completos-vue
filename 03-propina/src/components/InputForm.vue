<script setup>
import { ref } from "vue";
import { store, calculate } from "../store/store";

const total = ref(0);
const tip = ref(0);
const people = ref(0);

function handleSubmit(e) {
  store.params.total = total;
  store.params.tip = tip;
  store.params.people = people;
  calculate();
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="total">Total</label>
      <input type="text" v-model="total" required />
    </div>
    <div>
      <label for="tip">Tip %</label>
      <input type="number" v-model="tip" required />
    </div>
    <div>
      <label for="tip">People</label>
      <input type="number" min="1" max="10" v-model="people" required />
    </div>

    <div>
      <input type="submit" value="Calculate" />
    </div>
  </form>
</template>
