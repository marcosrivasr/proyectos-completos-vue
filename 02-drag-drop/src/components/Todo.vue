<script setup>
import { onMounted, ref, reactive } from "vue";
import InputNew from "./InputNew.vue";

const count = ref(0);
let boards = reactive([
  {
    id: crypto.randomUUID(),
    name: "board-1",
    items: [{ id: crypto.randomUUID(), title: "Hola a todos" }],
  },
  {
    id: crypto.randomUUID(),
    name: "board-2",
    items: [{ id: crypto.randomUUID(), title: "Hola a todos 2" }],
  },
]);
function startDrag(evt, boardId, itemId) {
  console.log(boardId, itemId);
  evt.dataTransfer.dropEffect = "move";
  evt.dataTransfer.effectAllowed = "move";
  evt.dataTransfer.setData("item", JSON.stringify({ boardId, itemId }));
}
function onDrop(evt, dest) {
  const { boardId, itemId } = JSON.parse(evt.dataTransfer.getData("item"));
  console.log({ boardId, itemId });
  const board = boards.find((board) => board.id === boardId);
  const item = board.items.find((item) => item.id === itemId);
  board.items = board.items.filter((i) => i.id !== item.id);
  dest.items.push({ ...item });
}

function handleNewItem(text, board) {
  console.log(text.value);
  board.items.push({ id: crypto.randomUUID(), title: text.value });
}

function createNewBoard() {
  const name = prompt("Name of board");
  if (name) {
    const board = {
      id: crypto.randomUUID(),
      name: name,
      items: [],
    };

    boards.push(board);
  }
}
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><a href="#" @click="createNewBoard">Create list</a></li>
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
            <InputNew @on-new-item="(text) => handleNewItem(text, board)" />
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
