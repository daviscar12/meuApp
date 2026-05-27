import { ref } from 'vue'

const nome = ref('')

export function useUsuarioStore() {
  function setNome(valor: string) {
    nome.value = valor
  }

  return { nome, setNome }
}
