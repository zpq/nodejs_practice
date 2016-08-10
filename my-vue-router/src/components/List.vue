<template>
	<h1>List</h1>
	<table>
		<tr>
			<td>序号</td><td>名称</td><td>价格</td><td>操作</td>
		</tr>
		<tr v-for="list in lists" >
			<td>{{list.id}}</td>
			<td>{{list.name}}</td>
			<td>{{list.price}}</td>
			<td>
				<a v-link="{name : 'detail', params: { id : list.id }}">查看详情</a>
			</td>
		</tr>
	</table>
	<button @click="goIndex">返回首页</button>
</template>

<script>
	
export default {
	data () {
		return {
			lists : [
				{id : "00001", name : "阿里巴巴", price : '$122.90'},
				{id : "00002", name : "百度", price : '$82.12'},
				{id : "00003", name : "腾讯", price : '$120.62'}
			]
		}
	},
	ready() {
		var stockLists = JSON.parse(localStorage.getItem('stockLists'));
		if (!stockLists || stockLists.length == 0) {
			localStorage.setItem('stockLists', JSON.stringify(this.lists));
		}
	},
	methods : {
		goIndex () {
			this.$route.router.go({name : "index"});
		}
	}
}

</script>