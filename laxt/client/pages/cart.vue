<template>
<div>
	<div class="cart">
			<h2>{{$store.state.regist.user}}さんのカートの中身</h2>
			<p class="link"><nuxt-link to="/product-List">買い物を続ける</nuxt-link></p>
				<div class="products-flex">
					<section v-for="product of products" :key="product.id">
						<ul class="product-cards">
							<li>{{product.name}}</li>
							<li><img src="images/demo.jpg" style="width:100%;"></li>
							<li>{{product.categories}}</li>
							<li>¥{{product.fee}}</li>
							<li>カートから削除</li>
						</ul>
					</section>
				</div>
				<div class="checkout">
					<p>合計金額:8000円</p>
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
    

  

		// app.$axios.get('/sanctum/csrf-cookie').then(response => {

		methods:{
			regist(){
				$store.commit()
			}
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
</style>
