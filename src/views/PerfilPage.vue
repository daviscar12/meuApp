<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Perfil</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <h2>Bem-vindo ao perfil</h2>
      <p>Esta rota exige <strong>requerNome</strong> no meta, conforme solicitado.</p>
      <p>Você pode adicionar informações do usuário aqui.</p>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
</script>
