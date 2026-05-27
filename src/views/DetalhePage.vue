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
      <div v-if="tarefa">
        <h2>{{ tarefa.texto }}</h2>
        <p>Status: <strong>{{ tarefa.feita ? 'Concluída' : 'Pendente' }}</strong></p>

        <IonButton expand="block" color="success" @click="alternarConcluir(tarefa.id)">
          {{ tarefa.feita ? 'Reabrir tarefa' : 'Concluir tarefa' }}
        </IonButton>
      </div>

      <div v-else>
        <p>Não foi possível localizar a tarefa.</p>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTarefa } from '../composable/useTarefa'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton
} from '@ionic/vue'

const route = useRoute()
const { tarefas, concluir } = useTarefa()

const tarefaId = computed(() => Number(route.params.id))
const tarefa = computed(() => tarefas.value.find(t => t.id === tarefaId.value))

function alternarConcluir(id: number) {
  concluir(id)
}
</script>
