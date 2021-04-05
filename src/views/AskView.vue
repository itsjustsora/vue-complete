<template>
  <div>
    <list-item></list-item>
  </div>
</template> 

<script>
import ListItem from '../components/ListItem.vue';
  // import { mapState, mapGetters } from 'vuex';

  export default {
    components: {
      ListItem,
    }
    // computed: {
    //   ...mapGetters ([ 
    //     'fetchedAsk' 
    //   ]),

    //   // #2
    //   // ...mapState({
    //   //  fetchedAsk: state => state.ask
    //   // }),

    //   // #1
    //   // ask() {
    //   //  return this.$store.state.ask;
    //   // } 
    // },
    // created() {
    //   this.$store.dispatch('FETCH_ASK');
    //   // fetchAskList()
    //   //   .then(response => this.ask = response.data)
    //   //   .catch(error => console.log(error))
    // },
  }
</script>
