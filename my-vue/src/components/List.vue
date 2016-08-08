<template>
	<input v-model="newTodo" @keyup.enter="addNewList" />
	<ol>
		<li v-for="item in items" :class="{'finished' : item.isFinished}" @click="toggle(item)">
			{{ item.label }}
		</li>
	</ol>
	<p @click="newTodo=''">clearInput</p>
	<p> props from parent : {{ toChild }}</p>
</template>

<script>
	export default {
		data() {
			return {
				items : [
					{
						label : "code",
						isFinished : false
					},
					{
						label : "walking",
						isFinished : true
					},
				],
				newTodo : '',
			}
		},
		props : ['toChild'],
		methods: {
			toggle : function(item) {
				item.isFinished = !item.isFinished
			},
			addNewList : function () {
				this.items.push({label : this.newTodo, isFinished : false})
				this.newTodo = '';
			}
		}
	}
</script>

<style scoped>
	ol li {
		/*max-width: 300px;*/
		/*list-style-type: none;*/
	}
	.finished {
		text-decoration: underline;
	}
</style>