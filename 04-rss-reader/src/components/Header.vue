<script setup>
import { ref } from "vue";
import { useStore } from "../store/store";

const store = useStore();

const url = ref("");

function handleSubmit() {
  console.log(url);
  if (!!url.value) {
    store.registerNewSource(url.value);
  }
}
</script>

<template>
  <div class="header">
    <form @submit.prevent="handleSubmit">
      <input class="input" required type="url" v-model="url" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<style scoped>
.header {
  background: black;
  grid-area: header;
  justify-self: stretch;

  display: flex;
  justify-content: center;

  padding: 10px;
}

form {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
}
.input {
  border: none;
  width: 400px;
}
button {
  border: none;
  background-color: #1283a9;
  color: white;
  padding: 5px 10px;
}
</style>
