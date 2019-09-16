<template>
    <div class="page home-page">
        <form name="beer-calculator" @submit.prevent>
            <div class="card beer-card" v-if="!result">
                <div class="card-content">
                    <span class="card-title">Qual temperatura você deseja sua cerveja?</span>
                    <div class="input-field col s6">
                        <input id="temperature" type="number" step="0.01" v-model="temperature" required="true" class="validate">
                    </div>
                </div>
                <div class="card-action">
                    <button type="submit" class="waves-effect waves-light btn" @click="calculate">Servir Cerveja</button>
                </div>
            </div>
        </form>
        <div class="card result-card" v-if="result">
            <div class="card-content">
                <span class="card-title">Aqui está a melhor cerveja para {{temperature}} graus:</span>
                <span class="result">{{result}}</span>
            </div>
            <div class="card-action">
                <a class="return-link" href @click.prevent="result = null">Voltar</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                temperature: 0,
                result: "",
                error: null
            }
        },
        methods: {
            calculate() {
                if (!this.formIsValid()) {
                    return
                }

                this.$repository.getBestBeer(this.temperature)
                    .then(
                        (success) => {
                            this.result = success.data.beer_style;
                        }
                    )
                    .catch(
                        () => {
                            alert("Ocorreu um erro ao processar sua solicitação.")
                        }
                    )
            },
            formIsValid() {
                return this.$el.querySelector('form input.invalid') === null
            }
        }
    }
</script>

<style lang="scss">
    .page {
        display: flex;
        justify-content: center;
        .card {
            max-width: 30vw;
            .card-content {
                min-height: 50vh;
            }
            .result {
                font-weight: 600;
                font-size: 2rem;
            }
        }
    }
</style>