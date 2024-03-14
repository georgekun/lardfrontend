<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const typesContract = computed(() => store.getters['inputData/getTypesContract']);
const genders = computed(() => store.getters['inputData/getGenders']);
const country = computed(() => store.getters['inputData/getCountry']);
const positions = computed(() => store.getters['inputData/getPositions']);


</script>

<template>
  <div class="drawer">
      <v-container class="padding-20 border-bottom">
          <v-btn
              class="text-none"
              width="100%"
              color="blue"
              size="x-large"
              text="Добавить сотрудника">
            <template #prepend>
              <img src="@/assets/man.svg" alt="man" width="18px">
            </template>
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
                  hide-details
                  id="select1"
                  density="compact"
                  :items="country"
                  item-value="id"
                  item-name="title"
                  variant="solo-filled"
              ></v-select>
            </v-col>

            <v-col>
              <p>Пол</p>
              <v-select
                  hide-details
                  id="select2"
                  density="compact"
                  :items="genders"
                  item-value="id"
                  item-name="slug"
                  variant="solo-filled"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <p>Должность</p>
              <v-select
                  hide-details
                  id="select1"
                  density="compact"
                  :items="positions"
                  item-value="id"
                  item-name="name"
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
.drawer{
  min-height: auto;
}

</style>