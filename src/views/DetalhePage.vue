<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/tabs/tarefas" />
        </IonButtons>
        <IonTitle>Detalhes da Tarefa</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <p>Visualizando a tarefa com ID: <strong>{{ tarefaId }}</strong></p>
      <p>Implemente aqui os detalhes específicos da tarefa.</p>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton
} from '@ionic/vue'

const route = useRoute()
const tarefaId = route.params.id
</script>
