<script>
export default {
  data() {
    return {
      currentValue: "",
      tags: [],
    };
  },

  methods: {
    handleKeyDown(e) {
      if (this.currentValue !== "" && e.key === "Enter") {
        if (!this.tags.some((t) => t === this.currentValue.toLowerCase())) {
          this.tags.push(this.currentValue);
          this.currentValue = "";
          return;
        }
      }

      if (this.currentValue === "" && e.key === "Backspace") {
        this.tags.pop();
        return;
      }
    },
    deleteTag(text) {
      this.tags = this.tags.filter((item) => item !== text);
    },
  },

  monted() {
    console.log("Componente creado correctamente");
  },
};
</script>

<template>
  <div class="inputTag">
    <div class="tags">
      <div class="tag" v-for="(tag, index) in tags" :key="index">
        {{ tag }} <button @click="deleteTag(tag)">X</button>
      </div>
    </div>
    <input type="text" v-model="currentValue" @keydown="handleKeyDown" />
  </div>
</template>

<style scoped>
.inputTag {
  display: inline-flex;
  border: solid 1px black;
  min-height: 43px;
}

.tags {
  display: flex;
  gap: 3px;
  padding: 5px;
}

.tags .tag {
  display: flex;
  padding: 5px;
  border: solid 1px #ccc;
  border-radius: 3px;
  gap: 5px;
  align-items: center;
}

.inputTag input {
  border: none;
  outline: none;
  padding: 0 5px;
}

.inputTag button {
  background-color: transparent;
  border: none;
  border-radius: 3px;
}
.inputTag button:hover {
  background-color: #ccc;
}
</style>
