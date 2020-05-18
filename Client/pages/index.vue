<template>
  <div class="items-flex">
		<div v-for="item of items" :key="item.id">
			<nuxt-link to="">
				<ul class="item-cards">
					<li class="title">{{item.name}}</li>
					<li><img :src="item.imgpath" style="width:100%;"></li>
					<li ><span class="star">★★★★★</span>5.0</li>
					<li><nuxt-link to="">{{item.category}}</nuxt-link></li>
					<li>{{item.release}}発売</li>
					<li class="fee">¥{{item.fee.toLocaleString()}}</li>
					<li v-if="item.express">
            <span class="speed">
              <span class="round">●</span>速配対応
            </span>
            明日までにお届け
          </li>
          <li v-else>通常2~3日で配送</li>
				</ul>
			</nuxt-link>
		</div>
	</div>
</template>
<script>
    export default {
        async asyncData({app}){
            const items = await app.$axios.$get('//localhost.test/api/items')
            return {items};
        },
    };
</script>


<style scoped>
.title{
	font-size: 1.2em;
}
.items-flex{
  display: flex;
  flex-wrap: wrap;
  width: 94%;
  margin: 0 auto;
}

li {
	list-style-type: none;
	line-height: 1.8em;
}

.item-cards{
	padding: 24px 8px;
	margin: 4px;
	margin-top:16px;
	width: 18vw;
	font-size: 0.9em;
	border-top: 2px rgb(240, 240, 240) solid;
}

.item-cards img{
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


