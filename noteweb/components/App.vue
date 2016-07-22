<template lang="html">
    <div class="">
        <side-bar></side-bar>
        <notes-list></notes-list>
        <editor></editor>
    </div>
</template>

<script>
    import SideBar from './SideBar.vue'
    import NotesList from './NotesList.vue'
    import Editor from './Editor.vue'

    export default {
        components: {
            SideBar,
            NotesList,
            Editor,
        }
    }
</script>

<style lang="css">
</style>
