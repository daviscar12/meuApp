<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Lista de Tarefas</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">

      
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Nova Tarefa</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonInput
            label="Nome da tarefa"
            label-placement="floating"
            v-model="novaTarefa"
            :clear-input="true"
            placeholder="Ex: Estudar Vue.js"
            :error-text="erroTarefa"
            :class="{ 'ion-invalid ion-touched': erroTarefa }"
          />

          <IonButton
            expand="block"
            fill="solid"
            color="primary"
            class="ion-margin-top"
            @click="adicionarTarefa"
          >
            <IonIcon :icon="addOutline" slot="start" />
            Adicionar
          </IonButton>
        </IonCardContent>
      </IonCard>

      
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Minhas Tarefas ({{ tarefas.length }})</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <p v-if="!tarefas.length" class="ion-text-center ion-padding">
            Nenhuma tarefa cadastrada.
          </p>

          <IonList v-else>
            <IonItem button @click="irParaDetalhe(t.id)" v-for="t in tarefas" :key="t.id">
              <IonIcon slot="start" :icon="checkmarkCircleOutline" />
              <IonLabel>{{ t.texto }}</IonLabel>

              <IonButton
                slot="end"
                fill="clear"
                color="danger"
                @click.stop="remover(t.id)"
              >
                <IonIcon :icon="trashOutline" />
              </IonButton>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>

    </IonContent>
  </IonPage>
</template>

<script setup lang='ts'>
import { useTarefa } from '../composable/useTarefa.ts'
import { ref, computed } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  useIonRouter
} from '@ionic/vue'

import {
  addOutline,
  trashOutline,
  checkmarkCircleOutline
} from 'ionicons/icons'

const { tarefas, adicionar, remover } = useTarefa()
const ionRouter = useIonRouter()

const novaTarefa = ref('')

const erroTarefa = computed(() =>
  !novaTarefa.value.trim() ? 'Campo obrigatório' : ''
)

function adicionarTarefa() {
  if (!novaTarefa.value.trim()) return
  adicionar(novaTarefa.value.trim())
  novaTarefa.value = ''
}

function irParaDetalhe(id: number) {
  ionRouter.push(`/tabs/tarefas/${id}`)
}
</script>