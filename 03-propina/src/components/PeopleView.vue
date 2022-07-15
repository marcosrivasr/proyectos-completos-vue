<script setup>
import { store, getGrandTotal } from "../store/store";
import Person from "./Person.vue";
import Label from "./Label.vue";
</script>

<template>
  <div v-if="store.people.length === 0">No items</div>
  <div v-if="store.people.length > 0">
    <div>
      <Label title="Total + Tip" :value="getGrandTotal()" />
    </div>
    <div>
      <Label title="Remaining" :value="store.params.remaining" />
    </div>
    <div class="people-container">
      <Person
        v-for="person in store.people"
        :key="person.id"
        :id="person.id"
        :number-of-person="person.numberOfPerson"
        :total-Per-Person="person.totalPerPerson"
      />
    </div>
  </div>
</template>

<style scoped>
.people-container {
  width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
}
</style>
