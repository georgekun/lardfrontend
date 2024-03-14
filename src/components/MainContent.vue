
<script setup>
import EmployeeCard from "@/components/EmployeeCard.vue";
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const store = useStore();
const tags = computed(() => store.getters['inputData/getTags']);

const isLoading=ref(false)
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

        <employee-card v-for="i in 3" :key="i"></employee-card>

        <v-row justify="center" class="mt-5 mb-3">
          <v-col cols="3" >
            <v-btn
              @click="isLoading=!isLoading"
              class="text-none"
              variant="outlined"
              size="large"
              color="#2A358C">

              <template #prepend>
                <img :class="{'rotate' : isLoading}"
                     src="@/assets/loader.svg"
                     width="16px" alt="loader"/>
              </template>
              Показать еще
            </v-btn>
          </v-col>
        </v-row>

    </v-container>
  </div>
</template>

<style scoped>
.rotate {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>