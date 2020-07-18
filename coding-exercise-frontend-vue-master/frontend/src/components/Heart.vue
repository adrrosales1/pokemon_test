<template>
  <div>
    <ApolloMutation
      v-if="!pokemon.isFavorite"
      :mutation="gql => gql` mutation favoritePokemon ($input: ID!){ favoritePokemon(id: $input) { id }} `"
      :variables="{ input: pokemon.id }"
      @done="$emit('isFavorite', true, pokemon.id)"
    >
      <template slot-scope="{ mutate }">
        <form ref="form" v-on:submit.prevent="mutate()">
          <button class="btn-submit" type="submit">
            <i class="fa fa-heart-o hear-color" aria-hidden="true"></i>
          </button>
        </form>
      </template>
    </ApolloMutation>

    <ApolloMutation
      v-if="pokemon.isFavorite" 
      :mutation="gql => gql` mutation unFavoritePokemon ($input: ID!){ unFavoritePokemon(id: $input) { id } } `"
      :variables="{ input: pokemon.id }"
      @done="$emit('isFavorite', false, pokemon.id)"
    >
      <template slot-scope="{ mutate }">
        <form ref="form" v-on:submit.prevent="mutate()">
          <button class="btn-submit" type="submit">
            <i class="fa fa-heart hear-color" aria-hidden="true"></i>
          </button>
        </form>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {type: Object, required: true},
  },
}
</script>

<style scoped>

.hear-color {
  color: red;
}

</style>