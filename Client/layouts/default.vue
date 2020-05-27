<template>
  <div>
    <Header /> 
    <transition name="page">
      <nuxt />
    </transition>
    <Footer /> 
  </div>
</template>

<script>
	import Header from "@/components/TheHeader.vue"; // headerをインポート
	import Footer from "@/components/TheFooter.vue"; // footerをインポート
	export default {
		components: {
			Header,
			Footer
		}
	};
</script>
<style>
  .page-enter {
    opacity: 0;
  }
  .page-enter-active {
    transition: opacity 0.5s;
  }
  .font-awesome {
	  font-size: 20px; 
	  margin-right:8px;
  }
</style>