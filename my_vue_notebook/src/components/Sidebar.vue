<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h1 class="text-center">elapsed time</h1>
        </div>
        <div class="panel-body">
            <div class="text-center">
                {{ time }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            time() {
                return this.$store.state.totalTime
            }
        }
    }
</script>