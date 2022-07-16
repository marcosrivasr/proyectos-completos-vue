<script setup>
import { defineProps } from "vue";

const props = defineProps(["title", "value"]);
</script>

<template>
  <div>
    <span class="title">{{ props.title }}</span>
    <span class="value">
      {{
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(props.value)
      }}
    </span>
  </div>
</template>

<style scoped>
.title {
  font-weight: bolder;
}

.value {
  color: rgb(84, 222, 96);
}
</style>
