<template>
    <div class="home-page">
        <form name="beer-calculator" @submit.prevent>
            <div class="card beer-card">
                <div class="card-content">
                    <span class="card-title">Qual temperatura você deseja sua cerveja?</span>
                        <div class="input-field col s6">
                            <input id="temperature" type="number" v-model="temperature" class="validate">
                        </div>
                </div>
                <div class="card-action">
                    <button type="submit" class="waves-effect waves-light btn" @click="calculate">Servir Cerveja</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                temperature: 0
            }
        },
        methods: {
            calculate() {
                this.$repository.getBestBeer(this.temperature).then(

                )
            }
        }
    }
</script>

<style lang="scss">
    .home-page {
        display: flex;
        justify-content: center;
    }
    .beer-card {
        max-width: 30vw;
        .card-content {
            min-height: 50vh;
        }
    }
</style>