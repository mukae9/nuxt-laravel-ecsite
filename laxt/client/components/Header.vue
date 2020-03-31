<template>
		<header>
			<div class="flex">
				<div>
					<h1><nuxt-link to="/">LaxtShop</nuxt-link></h1>
					<p>お届け先情報</p>
				</div>
				<nav style="flex:2">
					<ul>
						<li>
							<nuxt-link to="/">全商品</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/categories/食料品">食料品</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/categories/日用品">日用品</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/categories/アウトドア">アウトドア</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/categories/ホビー">ホビー</nuxt-link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul>
						<li>
							<nuxt-link to="/cart"><font-awesome-icon icon="shopping-cart"  style="font-size: 20px; margin-right:4px;"/>カート<span class="cart-num">{{$store.state.product.cart.length}}</span></nuxt-link>
						</li>
						<li>
							<nuxt-link to="/login">ログイン</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/register">会員登録</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
</template>


<style>
	.product-cards img {
		width:100%;
		height: 200px;
		object-fit: cover;
	}
</style>

<style lang="css" scoped>
header{
	color: #fefefe;
	padding: 16px 48px;
	background: linear-gradient(135deg, #222f3e,#003582);
}
a {
	outline: none;
	text-decoration: none;
	color: inherit;
}

h1{
	font-size: 2em;
	border-bottom: solid 2px #fd9803;
	border-radius: 1px;
}

header a {
	color: #fefefe;
	vertical-align: middle;
}
nav {
    color: #585858;
}
ul {
	display: flex;
}
li {
	list-style-type: none;
	margin-left: 15px;
}
a {
	color: #282828;
}
.flex{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.nav{
	
}

.cart-num{
	color:#eb8c10;
	font-weight: bold;
}

</style>