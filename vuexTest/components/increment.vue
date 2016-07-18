<template>
    <div>
        <button @click='increment'>Increment + 1</button>
    </div>
</template>

<script>
    import { incrementCount } from '../vuex/actions'
    export default {
        vuex : {
            actions : {
                increment : incrementCount
            }
        }
    }
</script>
