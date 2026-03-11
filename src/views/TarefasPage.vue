<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonBackButton class="back-button" defaultHref="/home"/>
                <IonTitle>Tarefas</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <IonItem>
                <IonInput v-model="newTask" placeholder="Digite uma tarefa" />
                <IonButton slot="end" @click="addTask" :disabled="!newTask">Adicionar</IonButton>
            </IonItem>

            <div class="task-list">
                <p v-if="tarefas.length === 0" class="empty-state">Nenhuma tarefa cadastrada. Adicione a primeira!</p>

                <IonItem v-for="(tarefa, idx) in tarefas" :key="idx" v-else>
                    <IonLabel>{{ tarefa }}</IonLabel>
                    <IonButton slot="end" fill="clear" color="danger" @click="removeTask(idx)">
                        <IonIcon :icon="trash" />
                    </IonButton>
                </IonItem>
            </div>
        </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonItem, IonInput, IonButton, IonLabel, IonIcon } from '@ionic/vue';
import { ref } from 'vue';
import { trash } from 'ionicons/icons';

const tarefas = ref<string[]>([]);
const newTask = ref('');

function addTask() {
  if (newTask.value.trim()) {
    tarefas.value.push(newTask.value.trim());
    newTask.value = '';
  }
}

function removeTask(idx: number) {
  tarefas.value.splice(idx, 1);
}
</script>

<style scoped>

 .back-button {
  margin-right: 8px;
  padding: 0;
  color: var(--ion-color-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
 }


</style>
