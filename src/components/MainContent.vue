
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const tags = computed(() => store.getters['inputData/getTags']);
</script>

<template>
  <div class="main-content drawer">
    <v-container class="padding-20 border-bottom ">
      <v-row>
        <v-col>
          <v-text-field placeholder="Поиск сотрудника"
                        density="compact" :disabled="false"
                        :loading="false"></v-text-field>

          <p class="text-grey-lighten-1">Например: Иван Иванов</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="padding-20">
        <v-row>
          <v-col>
            <h1>Список сотрудников</h1>
          </v-col>
        </v-row>
        <v-row justify="start">
            <v-col>
              <div class="button-group flex" v-if="tags">
                <v-btn
                    class="text-none" :color="tags[0].color"
                    rounded="xl">
                  <span class="text-white">{{ tags[0].title }}</span>
                </v-btn>
                <div v-for="btn in tags.slice(1)" :key="btn.id">
                  <v-btn
                      class="text-none" :color="btn.color" rounded="xl" variant="tonal">
                    {{ btn.title }}
                  </v-btn>
                </div>
              </div>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>