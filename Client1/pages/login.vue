<template>
  <div>
    <div>
      <h1>
        ログイン画面
      </h1>
      <p>{{message}}</p>
      <p>トップへ</p>
    </div>
  </div>
</template>

<script>
	export default {
    async asyncData({app}){
        const message = await app.$axios.$get('http://localhost.test/api/test')
        return {message};
    },
  };
</script>