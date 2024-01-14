<script setup lang="ts">
import RangeTable from "./components/RangeTable.vue";
import {ref} from "vue";


const horizontalTabs = ["LJ", "HJ", "CO", "BTN"];
const verticalTabs = ["Open"];

const splitterModel = ref(10);
const vTab = ref("Open");
const hTab = ref("LJ");
</script>

<template>
  <div>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <q-tabs v-model="vTab" vertical>
          <q-tab v-for="tab in verticalTabs" :name="tab" :label="tab"></q-tab>
        </q-tabs>
      </template>
      <template v-slot:after>
        <q-tabs v-model="hTab" align="left">
          <q-tab v-for="tab in horizontalTabs" :name="tab" :label="tab"></q-tab>
        </q-tabs>

        <q-tab-panels v-model="hTab">
          <q-tab-panel v-for="tab in horizontalTabs" :name="tab">
            <range-table></range-table>
          </q-tab-panel>

        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<style scoped>

</style>
