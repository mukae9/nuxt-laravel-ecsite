<template>
<div>
	<div class="cart">
			<h2>{{$store.state.regist.user}}さんのカートの中身</h2>
			<p class="link"><nuxt-link to="/">買い物を続ける</nuxt-link></p>
			
				<div class="products-flex">
					<section v-for="product of $store.state.product.cart" :key="product.id">
						<ul class="product-cards">
							<li class="title">{{product.name}}</li>
							<li><img :src="product.imgpath" style="width:100%;"></li>
							<li class="fee">¥{{product.fee.toLocaleString()}}</li>
							<li v-if="product.express"><span class="speed"><span class="round">●</span>速配対応</span>明日までにお届け</li>
							<li v-else>通常2~3日で配送</li>
							<li class="cartdelete" v-on:click="cartDelete(product.id)">カートから削除する</li>
						</ul>
					</section>
				</div>
				<div class="checkout">
					<p>合計金額:{{$store.getters['product/totalPrice'].toLocaleString()}}円</p>
					<button type="button" v-on:click="$store.dispatch('regist/createUserAction',user)">レジに進む</button>
				</div>
			
	</div>
</div>
</template>
<script>
	export default {
		async asyncData({app}){
			const products = await app.$axios.$get('http://localhost/api/product-all')
			return {products};
		},
		methods:{
			cartDelete(id){
				this.$toast.show('カートから削除しました')
				this.$store.commit('product/cartDelete',id)
            },
		}
	};

</script>

<style scoped>

.checkout{
	text-align: center;
	width: 33%;
	background-color: rgb(245, 245, 245);
	padding: 16px;
	margin: 12px auto;
	border-radius: 8px;

}
.cart{
	margin: 48px auto;
	color: #585858;
}

.link{
	text-align: center;
	padding: 16px;
	font-size: 0.9em;
}

.cart h2 {
	text-align: center;
	padding: 8px;
	font-size: 1.4em;
	
}

.cart p {
	margin: 0px;
}

input[type="text"],input[type="email"],input[type="password"]{
	width: 100%;
	margin-bottom: 24px;
	color: #585858;
}

button{
	margin-top:8px;
	width: 120px;
}

button:hover{
	opacity: 0.8;
}

.products-flex{
  display: flex;
  flex-wrap: wrap;
  width: 96%;
  margin: 0 auto;
}

li {
	list-style-type: none;
}

.product-cards{
	padding: 24px 8px;
	margin: 4px;
	margin-top:16px;
	width: 18vw;
	font-size: 0.9em;
}

.product-cards img{
	padding: 4px 0px;
}

.speed{
	color:#fefefe;
	background-color: #3491c1;
	padding: 4px;
	margin-right: 4px;
	font-weight: bold;
	border-radius: 4px;

}

.round{
	color:#f8b801
}

.fee{
	color:#b22805;
	font-weight: bold;
	font-size: 1.4em;
}

.cartdelete{
	margin-top: 8px;
	text-decoration: underline;
	cursor: pointer;

}
.cartdelete:hover{
	opacity: 0.8;
	cursor: pointer;
}
</style>
