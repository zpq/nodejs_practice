<template>
	<h1>detail</h1>
	<h3>id : {{item.id}}</h3>
	<h3>名称 : {{item.name}}</h3>
	<h3>价格 : {{item.price}}</h3>
</template>

<script>
export default  {
	ready () {
		var stockLists = JSON.parse(localStorage.getItem('stockLists'));
		for (let i = 0; i < stockLists.length; i++) {
			if (stockLists[i].id == this.$route.params.id) {
				this.item = stockLists[i];
				break;
			}
		}
	},
	data() {
		return {
			item : {}
		}
	},
}
</script>