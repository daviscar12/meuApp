<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1>Bem-vindo ao Meu App</h1>
        <p>Este é um aplicativo simples para gerenciar suas tarefas. Clique no botão abaixo para ver a lista de tarefas.</p>
        <ion-button expand="block" @click="goToTarefas">Ver Tarefas</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToTarefas() {
  router.push('/Tarefas');
}
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container h1 {
  font-size: 24px;
  margin-bottom: 8px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0 0 16px 0;
}

#container ion-button {
  max-width: 200px;
  margin: 0 auto;
}

#container a {
  text-decoration: none;
}
</style>
