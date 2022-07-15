<script setup>
import { store, pay } from "../store/store";
import { defineProps, ref } from "vue";

const props = defineProps(["id", "numberOfPerson", "totalPerPerson"]);

let paid = ref(false);

function handleChange(e) {
  paid = e.target.checked;
  pay(props.id, paid);
}
</script>

<template>
  <div class="person">
    <div>{{ props.numberOfPerson }}</div>
    <div>{{ props.totalPerPerson.toFixed(2) }}</div>
    <div><input type="checkbox" @change="handleChange" /> Paid</div>
  </div>
</template>

<style scoped>
.person {
  height: 200px;
  border: solid 1px #ccc;
  border-radius: 5px;
  padding: 10px;
}
</style>
