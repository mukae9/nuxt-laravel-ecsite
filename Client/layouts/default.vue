<template>
  <div>
    <transition name="page">
      <nuxt />
    </transition>
  </div>
</template>

<script>
	import Header from "@/components/header.vue"; // headerをインポート
	import Footer from "@/components/footer.vue"; // footerをインポート
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
    transition: opacity 1s;
  }
</style>
