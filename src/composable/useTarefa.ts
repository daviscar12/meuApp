import { ref, computed, watch } from 'vue';

interface Tarefa {
    id: number;
    texto: string;
    feita: boolean;
}

export function useTarefa() {
    const tarefas = ref<Tarefa[]>([]);
    const busca = ref('')
    const filtroAtivo = ref<'todas' | 'pendentes' | 'feitas'>('todas')

    const tarefasFiltradas = computed(() => {
        const termosBusca = busca.value.toLowerCase();
        return tarefas.value
        .filter(t => t.texto.toLowerCase().includes(termosBusca))
        .filter(t => {
            if (filtroAtivo.value === 'pendentes') return !t.feita;
            if (filtroAtivo.value === 'feitas') return t.feita;
            return true;
        });
    });

    const totalPendentes = computed(() => tarefas.value.filter(t => !t.feita).length);

    function adicionar( texto: string) {
        if (!texto.trim()) return;
        tarefas.value.push({ id: Date.now(), texto, feita: false });
    }

    function remover (id: number) {
        tarefas.value = tarefas.value.filter(t => t.id !== id);
    }

    function concluir(id: number) {
        const tarefa = tarefas.value.find(t => t.id === id);
        if (tarefa) tarefa.feita = !tarefa.feita;
    }

    watch(totalPendentes, (valor) => {
        if (valor === 0 && tarefas.value.length > 0) {
            alert('Parabéns! Você concluiu todas as tarefas!');
        }
    })

    return { tarefas, busca, filtroAtivo, tarefasFiltradas, totalPendentes, adicionar, remover, concluir };
}
