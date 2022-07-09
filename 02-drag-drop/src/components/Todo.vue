<script setup>
import { reactive, ref } from "vue";

const count = ref(0);
const boards = ref([
  {
    id: crypto.randomUUID(),
    name: "board-1",
    newValue: "",
    items: [{ id: crypto.randomUUID(), title: "Hola a todos" }],
  },
  {
    id: crypto.randomUUID(),
    name: "board-2",
    newValue: "",
    items: [{ id: crypto.randomUUID(), title: "Hola a todos 2" }],
  },
]);

function increment() {
  count.value++;
}

function startDrag(evt, boardId, itemId) {
  console.log(boardId, itemId);
  evt.dataTransfer.dropEffect = "move";
  evt.dataTransfer.effectAllowed = "move";
  evt.dataTransfer.setData("item", JSON.stringify({ boardId, itemId }));
}
function onDrop(evt, dest) {
  const { boardId, itemId } = JSON.parse(evt.dataTransfer.getData("item"));
  console.log({ boardId, itemId });
  const board = boards.value.find((board) => board.id === boardId);
  const item = board.items.find((item) => item.id === itemId);
  dest.items.push({ ...item });
  board.items = board.items.filter((i) => i.id !== item.id);
}

function handleChange(evt, board) {
  const value = evt.target.value;

  board.newValue = value;
}

function handleKeyDown(evt, board) {
  if (evt.key === "Enter") {
    const value = board.newValue;
    console.log(board.newValue);
    board.items.push({ id: crypto.randomUUID(), title: value });
  }
}
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><a href="#">Create list</a></li>
      </ul>
    </nav>

    <div class="boards-container">
      <div class="boards">
        <div
          class="board"
          @drop="onDrop($event, board)"
          @dragover.prevent
          @dragenter.prevent
          v-for="board in boards"
          :key="board.id"
        >
          {{ board.name }}
          <div class="input">
            <input
              type="text"
              @input="handleChange($event, board)"
              @keydown="handleKeyDown($event, board)"
            />
          </div>
          <div
            class="item drag-el"
            draggable="true"
            @dragstart="startDrag($event, board.id, item.id)"
            v-for="item in board.items"
            :key="item.id"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}

.boards {
  display: flex;
  gap: 10px;
}

.board {
  background: #ccc;
  padding: 10px;
}
</style>
