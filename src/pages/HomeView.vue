<script setup>
import DrawerRight from "@/components/DrawerRight.vue";
import MainContent from "@/components/MainContent.vue";
</script>

<template>
  <div class="home">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="8">
          <MainContent></MainContent>
        </v-col>
        <v-col cols="4">
          <drawer-right></drawer-right>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<style scoped>
  .home{
    padding:20px 20px;
    background-color: #F7F8F9;
    min-height:100vh;
  }
</style>