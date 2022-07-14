<script setup>
import { defineProps } from "vue";

const props = defineProps(["item", "collapsed"]);
</script>

<template>
  <a href="#" @click.prevent="props.item.onClick">
    <div class="item">
      <div class="icon">
        <font-awesome-icon :icon="['fa-solid', props.item.icon]" size="2x" />
      </div>
      <div class="title" v-if="!collapsed">
        {{ props.item.title }}
      </div>
    </div>
  </a>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
  display: block;
}
a:hover {
  background-color: white;
  color: black;
}
.item {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.item .icon {
  width: 80px;
  display: flex;
  justify-content: center;
}
</style>
