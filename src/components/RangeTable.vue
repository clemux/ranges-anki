<script setup lang="ts">
import {ref} from "vue";

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

const cellText = (row: number, col: number) => {
  const r1 = 13 - Math.min(row, col);
  const r2 = 13 - Math.max(row, col);
  return ranks[r1] + ranks[r2] + ["s", "", "o"][Math.sign(row - col) + 1];
};

const cellIndex = (row: number, col: number) => {
  return 13 * (row - 1) + col - 1;
}

const cellValue = (row: number, col: number) => {
  return ranges.value[cellIndex(row, col)];
}

const ranges = ref(Array.from({length: 13*13}, () => 0));

const update = (row: number, col: number) => {
  const idx = cellIndex(row, col);
  ranges.value[idx] = 1;
}

</script>

<template>
  <table>
    <tr v-for="row in 13">
      <td
          v-for="col in 13"
          :style="{
            'background-color': cellValue(row, col) > 0 ? 'lightblue' : 'aliceblue'
          }"
          @click="update(row, col)"
      >
        {{ cellText(row, col)}}
      </td>
    </tr>
  </table>
</template>

<style scoped>
td {
  border: 1px;
  border-spacing: 3px;
  background-color: aliceblue;
  color: #0f0f0f;
  text-align: center;
}

</style>