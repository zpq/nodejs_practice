<template lang="html">
    <div id="list">
        <h1>-----{{ sep }}-----</h1>
        <button @click='decrement'>Decrement - 1</button>
    </div>
</template>

<script>
    import { decrementCount } from '../vuex/actions'
    export default {
        data () {
            return {
                sep : 'seperate'
            }
        },
        vuex : {
            // data() {
            //     return {
            //         sep : 'sdada'
            //     }
            // },
            actions : {
                decrement : decrementCount
            }
        }
    }
</script>
