<template>
    <div>
        <Display></display>
        <Increment></Increment>
        <Decrement></Decrement>
    </div>
</template>

<script>
    import Display from './display.vue'
    import Increment from './increment.vue'
    import Decrement from './decrement.vue'
    import store from '../vuex/store'

    export default {
        components : {
            Display : Display,
            Increment : Increment,
            Decrement : Decrement,
        },
        store : store
    }
</script>
