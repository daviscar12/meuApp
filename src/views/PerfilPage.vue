<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Perfil</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <div v-if="nome">
        <h2>Olá, {{ nome }}</h2>
        <p>Seu perfil está atualizado.</p>
        <IonButton expand="block" color="primary" @click="limparNome">Alterar Nome</IonButton>
      </div>

      <div v-else>
        <h3>Complete seu nome</h3>
        <IonItem>
          <IonInput v-model="nomeLocal" placeholder="Digite seu nome" />
        </IonItem>
        <IonButton class="ion-margin-top" expand="block" @click="salvarNome" :disabled="!nomeLocal.trim()">Salvar</IonButton>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton } from '@ionic/vue'
import { useUsuarioStore } from '../composable/useUsuarioStore'

const usu = useUsuarioStore()
const nome = computed(() => usu.nome.value)
const nomeLocal = ref('')

function salvarNome() {
  if (!nomeLocal.value.trim()) return
  usu.setNome(nomeLocal.value.trim())
  nomeLocal.value = ''
}

function limparNome() {
  usu.setNome('')
}
</script>
