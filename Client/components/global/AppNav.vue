<template>
  <div class="flex justify-between mb-10">
    <ul class="flex items-center">
      <li class="mr-4">
        <a href="#" class="text-gray-800 font-medium">
          Home
        </a>
      </li>
    </ul>
    <ul class="flex items-center">
      <li class="mr-4">
        <a href="#" class="text-gray-800 font-medium">
          {{this.$auth.user}}
        </a>
      </li>
      <li>
        <a href="#" class="text-gray-800 font-medium">
          Sign out
        </a>
      </li>
      <li class="mr-4">
        <nuxt-link
          :to="{ name: 'auth-signin' }"
          class="text-gray-800 font-medium"
        >
          Sign in
        </nuxt-link>
      </li>
      <li>
        <a href="#" class="font-medium text-gray-800">
          Sign up
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
