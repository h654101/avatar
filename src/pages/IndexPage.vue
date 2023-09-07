<template>
  <q-page class="column items-center justify-center">
    <div
      v-html="svgCode"
      class="text-center text-h6 text-grey q-mb-lg"
      style="width: 250px"
    ></div>
    <div>
      <q-input
        v-model="id"
        placeholder="اكتب اسمك هنا بالعربي"
        dir="rtl"
        class="text-center text-h4 q-mt-lg"
        outlined
      />
      <!-- <template v-if="id" v-slot:append>
          <q-icon
            name="cancel"
            @click.stop.prevent="id = ''"
            class="cursor-pointer"
          />
        </template>
      </q-input> -->
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import multiavatar from "@multiavatar/multiavatar";
import { getAlpha } from "../stores/_ar";

const id = ref("");
const svgCode = computed(() => {
  const txt = multiavatar(getAlpha(id.value));
  if (!id.value || !txt) return "اسمك على شكل صورة";
  return txt;
});
</script>

<style>
.text-center input {
  text-align: center;
}
</style>
