<template>
    <div>
        <h3>Count is {{ CountValue }}</h3>
    </div>
</template>


<script>

    import {getCount} from '../vuex/getters'
    export default {
        vuex : {
            getters : {
                CountValue : getCount
            }
        }
    }
</script>
