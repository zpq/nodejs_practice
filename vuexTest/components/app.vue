<template>
    <div>
        <display></display>
        <increment></incremnet>
    </div>
</template>

<script>
    import Display from './display.vue'
    import Increment from './increment.vue'
    import store from '../vuex/store'

    export default {
        components : {
            display : Display,
            increment : Increment,
        },
        store : store
    }
</script>
