<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
  import { fetchAskList } from '../api/index.js';

  export default {
    data() {
      return {
        users: []
      }
    },
    created() {
      var vm = this;
      fetchAskList()
        .then(response => vm.users = response.data)
        .catch(error => console.log(error))
    },
  }
</script>

<style>

</style>