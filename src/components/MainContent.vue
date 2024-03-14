<script setup>
const filterButtons = [
  {id:0, color:"#B0BCC7", label:"Весь список"},
  {id:1, color:"#E2BD06", label:"Проблемные"},
  {id:2, color:"#E52E2E", label:"Критические"},
  {id:3, color:"#00B6ED", label:"Есть замечания"},
  {id:4, color:"#00AE5B", label:"Выполнено"},
]
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
              <div class="button-group flex">
                <v-btn
                    class="text-none" :color="filterButtons[0].color"
                    rounded="xl">
                  <span class="text-white">{{ filterButtons[0].label }}</span>
                </v-btn>
                <div v-for="btn in filterButtons.slice(1)" :key="btn.id">
                  <v-btn
                      class="text-none" :color="btn.color" rounded="xl" variant="tonal">
                    {{ btn.label }}
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