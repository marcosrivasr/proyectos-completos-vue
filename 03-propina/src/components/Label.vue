<script setup>
import { defineProps } from "vue";

const props = defineProps(["title", "value"]);
</script>

<template>
  <div>
    <span>{{ props.title }}</span>
    <span>
      {{
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(props.value)
      }}
    </span>
  </div>
</template>

<style scoped></style>
