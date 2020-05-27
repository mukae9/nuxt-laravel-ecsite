
<template>
	<header>
		<div class="flex">
			<div>
				<h1><nuxt-link to="/">LaxtShop</nuxt-link></h1>
				<p>キャンペーン開催中！</p>
			</div>
            <div class="notice"></div>
			<nav class="auth">
				<ul>
					<li>
						<nuxt-link to="/cart">
							<font-awesome-icon icon="shopping-cart" />
							カート<span class="cart-num">0</span>
						</nuxt-link>
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
	header {
		color: #fefefe;
		padding: 16px 48px;
		background: linear-gradient(135deg, #222f3e,#003582);
	}

	h1 {
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
		outline: none;
		text-decoration: none;
		color: inherit;
	}

	.flex{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.cart-num{
		color:#eb8c10;
		font-weight: bold;
	}

	.notice{
		flex: 3;
	}

	.auth{
		flex: 1;
	}
</style>