<script setup>
import { store, pay } from "../store/store";
import { defineProps, ref } from "vue";

const props = defineProps(["id", "numberOfPerson", "totalPerPerson", "paid"]);

let paid = ref(false);

function handleChange(e) {
  paid = e.target.checked;
  pay(props.id, paid);
}
</script>

<template>
  <div :class="['person', props.paid ? 'person-paid' : 'person-no-paid']">
    <div class="person-number">Person {{ props.numberOfPerson }}</div>
    <div class="person-topay">{{ props.totalPerPerson.toFixed(2) }}</div>
    <div class="paid">
      <input type="checkbox" @change="handleChange" /> Paid
    </div>
  </div>
</template>

<style scoped>
.person {
  height: 200px;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.person-paid {
  border: solid 3px yellowgreen;
}

.person-no-paid {
  border: solid 3px #ccc;
}

.person-number {
  background-color: black;
  padding: 10px;
  color: white;
  text-align: center;
}

.person-topay {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: greenyellow;
}

.paid {
  background-color: rgb(52, 63, 104);
  padding: 10px;
}
</style>
