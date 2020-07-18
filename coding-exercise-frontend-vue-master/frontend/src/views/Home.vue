<template>
  <div class="home container">
    
    <div id="nav" class="container mt-3">
      <div class="row p-0" role="group">
        <div class="col-6 p-0">
          <button
            @click="view = 'all'"
            type="button"
            class="btn btn-outline-success btn-block"
            :class="[ view == 'all' ? 'active':'' ]"
          >
            Home
          </button>
        </div>
        <div class="col-6 p-0">
          <button
            @click="view = 'favorites'"
            type="button"
            class="btn btn-outline-success btn-block"
            :class="[ view == 'favorites' ? 'active':'' ]">
            Favorites
          </button>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-6 px-1">
        <form>
          <input v-model="SearchWord" type="text" class="form-control form-control-sm" placeholder="Search">
        </form>
      </div>
      <div class="col-4 px-1">
        <select class="form-control form-control-sm" id="exampleFormControlSelect1" v-model="type">
          <option value="" selected disabled>Type</option>
          <option value="">All</option>
          <option value="Grass">Grass</option>
          <option value="Poison">Poison</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Bug">Bug</option>
        </select>
      </div>
      <div class="col-2 px-1">
        <i @click="display = 'grid'" class="fa fa-th" aria-hidden="true"></i> |
        <i @click="display = 'list'" class="fa fa-th-list" aria-hidden="true"></i>
      </div>
    </div>
    <div v-if="display === 'grid'" class="row">
      <PokeGrid v-for="item in filteredList" :key="item.id" :msg="item" :type="type" @isFavorite="changeFavoriteStatus"/>
    </div>
    <div v-if="display === 'list'" class="row">
      <div class="col-12 px-1">
        <ul class="list-group">
          <PokeList v-for="item in filteredList" :key="item.id" :msg="item" :type="type" @isFavorite="changeFavoriteStatus"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import PokeGrid from "@/components/Poké.vue";
import PokeList from "@/components/PokéList.vue";
import gql from "graphql-tag";

export default {
  name: "home",
  components: {
    PokeGrid,
    PokeList
  },
  data(){
    return {
      view: 'all',            // Determines if all pokemons will be visible, or just the favorites
      display : 'grid',       // Determines how the pokemos will be displayed
      masterArrayPokemon:[],
      SearchWord:'',
      type:'',
      favorite: false
    }
  },
  apollo:{
    pokemons: gql`
    query {
      pokemons(query: { limit: 1000 }) {
        edges {
          id
          number
          name
          types
          image
          isFavorite
        }
      }
    }
    `
  },
  mounted(){
    
    setTimeout( ()=>{
      this.masterArrayPokemon = this.pokemons.edges;
    },500);

  },
  computed: {
   
   filteredList() {
      let result =  this.masterArrayPokemon.filter(poke => {
        return poke.name.toLowerCase().includes(this.SearchWord.toLowerCase());
      })
      result = this.view == "favorites" ? result.filter( p => p.isFavorite == true) : result;
      return result;
    }
  },

  methods: {
    changeFavoriteStatus(status, id){
      let pokemon = this.masterArrayPokemon.find( p => p.id == id);
      pokemon.isFavorite = status;
    }
  }
};
</script>

<style lang="scss">

#nav {
  padding: 30px;
  a {
    &.active {
      color: #42b983;
    }
  }
}

</style>