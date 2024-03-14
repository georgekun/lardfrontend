<script setup>
import { ref,onMounted, defineProps } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});

const store = useStore();
const user = ref(null);

onMounted(async () => {
  user.value = await store.dispatch('employee/findEmployeeById', props.id);
});

</script>

<template>
  <v-container class="user-card padding-20" v-if="user">
    <v-row>
      <v-col class="user_title">
          <span class="name">{{ user.full_name }}</span>
          <span class="inn">ИНН {{user.inn}}</span>
          <span class="contract">{{user.type_contract.slug}}</span>
          <span class="specialization">{{user.position.title}}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="user_info">
        <span><img :src="user.country.icon" alt="icon"> {{ user.country.slug }} 1232131</span>
        <span>г. {{user.address}}</span>
        <span>Дата рождения: {{user.date_birth}}</span>
        <span>Возраст: {{user.age}}</span>
        <span>Пол: {{ user.gender.title }}</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
          <span class="status"
                :style="{'background-color':user.status.tag.color}"
       >{{user.status.description}}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .user-card{
    background-color: #E7F3FF;
    margin-top:20px;
    padding:25px;
    border-radius:4px;
  }
  .user_title span{
    margin-right:12px;
  }

  .specialization{
    font-size: 14px;
    line-height: 16.8px;
    font-weight: 400;
    color:#041423;
    //font-family:Montserrat;
  }
   .name{
    //font-family:Montserrat;
    font-weight:600;
    font-size:18px;
    line-height: 21.6px;
    color:#2A358C;
  }
  .inn{
    background-color: white;
    border-radius:4px;
    padding: 4px 8px 4px 8px;
  }

  .contract{
    background-color:#00AE5B;
    color:white;
    padding:4px;
    border-radius:4px;
  }

  .user_info span{
    font-weight: 400;
    font-size: 14px;
    line-height: 18.2px;
    color:#041423;
  }
  .user_info span:after{
    content:"|";
    margin:0 13px;
    opacity:0.3;
  }
  .user_info span:last-child:after{
    content: '';
  }

  .status{
    height: 28px;
    color:white;
    background-color: #E52E2E;
    border-radius:4px;
    padding:4px 8px;
  }
</style>