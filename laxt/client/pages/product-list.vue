<template>
<div>
  	<div class="products-flex">
		<div v-for="product of products" :key="product.id">
			<nuxt-link v-bind:to="{name:'products-id',params:{id:product.id}}">
				<ul class="product-cards">
					
					<li class="title">{{product.name}}</li>
					<li><img :src="product.imgpath" style="width:100%;"></li>
					<li ><span class="star">★★★★★</span>(120)</li>
					<li><nuxt-link to="/link01">{{product.categories}}</nuxt-link></li>
					<li>2020/2/19発売</li>
					<li class="fee">¥{{product.fee.toLocaleString()}}</li>
					<li></li>
				</ul>
			</nuxt-link>
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
    
  };
  
</script>

<style scoped>
.title{
	font-size: 1.2em;
}
.products-flex{
  display: flex;
  flex-wrap: wrap;
  width: 96%;
  margin: 0 auto;
}

li {
	list-style-type: none;
	line-height: 1.8em;
}

.product-cards{
	padding: 24px 8px;
	margin: 4px;
	margin-top:16px;
	width: 18vw;
	font-size: 0.9em;
	border-top: 2px rgb(240, 240, 240) solid;
}

.product-cards img{
	padding: 4px 0px;
}

.star{
	color:#f8b801
}

.round{
	color:#f8b801
}

.fee{
	color:#b22805;
	font-weight: bold;
	font-size: 1.4em;
	line-height: 2em;
}
.speed{
	color:#fefefe;
	background-color: #3491c1;
	padding: 4px;
	margin-right: 4px;
	font-weight: bold;
	border-radius: 4px;

}
a {
  outline: none;
  text-decoration: none;
  color: inherit;
}

</style>
