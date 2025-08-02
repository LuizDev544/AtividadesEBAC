<script setup>
    const props = defineProps(['calcularResultado', 'estado']);
</script>

<template>
    <div class="card-body">
        <div class="row mb-3 mt-5">
            <div class="col-md-4">
                <label for="caixa1" class="mb-3">Digite o Primeiro Numero</label>
                <input class="form-control" type="number" :value="props.estado.num1" @input="evento => props.estado.num1 = Number(evento.target.value)" id="caixa1" required>
            </div>
            <div class="col-md-4">
                <h5 class="mb-3">Operadores</h5>
                <select class="form-select text-center" :value="props.estado.operacao" @change="evento => props.estado.operacao = evento.target.value">
                    <option value="--">Selecione o operador</option>
                    <option value="somar">(+)</option>
                    <option value="diminuir">(-)</option>
                    <option value="dividir">(/)</option>
                    <option value="multiplicar">(*)</option>
                </select>
            </div>

            <div class="col-md-4">
                <label for="caixa2" class="mb-3">Digite o Segundo Numero</label>
                <input class="form-control" type="number" :value="props.estado.num2" @input="evento => props.estado.num2 = Number(evento.target.value) " id="caixa2" required>
            </div>
        </div>
        <div class="text-center mt-5">
            <p v-if="props.estado.erro" class="text-danger fw-bold">{{ props.estado.erro }}</p>
            <h4>O Resultado de {{ estado.num1 }} com {{ estado.num2 }} foi igual a: {{props.calcularResultado}}</h4>
        </div>          
    </div>
</template>

<style scoped>
    h5{
        text-align: center;
    }
    .card-body {
        background-color: #ddd;
    }
</style>