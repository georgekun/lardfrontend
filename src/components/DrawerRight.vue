

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const typesContract = computed(() => store.getters['inputData/getTypesContract']);
</script>

<template>
  <div class="drawer">
      <v-container class="padding-20 border-bottom">
          <v-btn
              class="text-none"
              prepend-icon=""
              width="100%"
              color="blue"
              size="x-large"
              text="Добавить сотрудника">
          </v-btn>
      </v-container>

      <v-container class="padding-20">
          <v-row class="">
            <v-col>
              <h1 class="">Фильтр</h1>
            </v-col>
          </v-row>

          <v-row class="">
            <v-col>
              <p>Гражданство</p>
              <v-select
                  id="select1"
                  label="Select"
                  density="compact"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  variant="solo-filled"
              ></v-select>
            </v-col>

            <v-col>
              <p>Пол</p>
              <v-select
                  id="select1"
                  label="Select"
                  density="compact"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  variant="solo-filled"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <p>Должность</p>
              <v-select
                  id="select1"
                  label="Select"
                  density="compact"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  variant="solo-filled"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="border-bottom" v-if="typesContract">
            <v-col>
              <p>Тип договора</p>
              <v-checkbox
                  v-for = "tp in typesContract"
                  :key = "tp.id"
                  hide-details
                  :label="tp.slug"
                  :value="tp.id"
                  density="compact"
              ></v-checkbox>
            </v-col>
          </v-row>

        <v-row justify="center">
          <v-col><v-btn width="100%" class="text-none" color="green">Применить</v-btn></v-col>
          <v-col><v-btn width="100%" class="text-none" color="grey">Очистить</v-btn></v-col>
        </v-row>
      </v-container>
  </div>
</template>

<style scoped>


</style>