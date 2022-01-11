<template>
  <div>
      <h1>yay user is logged in </h1>
      <div>
        <p>User name: {{user}}</p>
        <p>password: {{password}}</p>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'HelloWorld',
    props: ['user', 'password']
}
</script>

<style>

</style>