<template>
    <div>
        <Display></display>
        <Increment></Increment>
        <de-crement></de-crement>
    </div>
</template>

<script>
    import Display from './display.vue'
    import Increment from './increment.vue'
    import Decrement from './decrement.vue'
    import store from '../vuex/store'

    export default {
        components : {
            display : Display,
            increment : Increment,
            deCrement : Decrement,
        },
        store : store
    }
</script>
