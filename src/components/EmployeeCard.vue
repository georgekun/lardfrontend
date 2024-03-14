<script setup>

</script>

<template>
  <v-container class="user-card padding-20">
    <v-row>
      <v-col class="user_title">
          <span class="name">Иванов Иван Иванович</span>
          <span class="inn">ИНН 1234567890</span>
          <span class="contract">ТД</span>
          <span class="specialization">промышленный альпинист</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="user_info">
        <span><img src="" alt="icon"> TU 1232131</span>
        <span>г. Санкт-Петербург</span>
        <span>Дата рождения: 23.06.2001</span>
        <span>Возраст: 21 год</span>
        <span>Пол: мужской</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
          <span class="status">Истекают документы</span>
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