<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card custom_card" v-if="pokemonByName">
                        <img :src="pokemonByName.image"
                            class="card-img-top" alt="...">
                        <div class="card-body text-left">
                        </div>

                        <div class="box">
                        <div class="container box">
                            <div class="row">
                                <div class="col-8 text-left">
                                    <h4 class="name_pokemon">{{ pokemonByName.name }}</h4>
                                    <span class="mr-1 types_atrr" v-for="type in pokemonByName.types" :key="type.id">{{ type }}</span>
                                </div>
                                <div class="col-4 text-right">
                                    <Heart :pokemon="pokemonByName" />
                                </div>
                            </div>
                        </div>

                        <div class="container box mt-3">
                            <div class="row">
                                <div class="col-8">
                                    <div class="progress bar">
                                        <div class="progress-bar purple_bar" role="progressbar" style="width: 100%"
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-4 attr_left_text">
                                    <span class="type_atr">CP:</span> {{ pokemonByName.maxCP}}
                                </div>
                                <div class="col-8">
                                    <div class="progress bar">
                                        <div class="progress-bar green_bar" role="progressbar" style="width: 100%"
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                 <div class="col-4 attr_left_text">
                                    <span class="type_atr">HP:</span> {{ pokemonByName.maxHP}}
                                </div>
                            </div>
                        </div>

                        <div class="container box  mt-3">
                            <div class="row" v-if="pokemonByName && pokemonByName.weight">
                                <div class="col-6 text-center">
                                    <p class="title_atrr">Weight</p>
                                    <p class="data_atrr">{{ pokemonByName.weight.minimum }} - {{ pokemonByName.weight.maximum }}</p>
                                </div>
                                <div class="col-6 text-center">
                                    <p class="title_atrr">Height</p>
                                    <p class="data_atrr">{{ pokemonByName.height.minimum }} - {{ pokemonByName.height.maximum }}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="container  mt-3">
                            <div class="row">
                                <p class="title_atrr float-left mb-3">Evolutions</p>
                            </div>
                            <div class="row">
                                <div class="card" style="width:10rem" v-for="evolution in pokemonByName.evolutions" :key="evolution.id">
                                    <img :src="evolution.image" class="card-img-top" alt="...">     
                                    <p>{{evolution.name}}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import gql from "graphql-tag";
import router from '@/router'
import Heart from '../components/Heart.vue';

export default {
    components: {
      Heart
    },
    props: {
      data: []
    },
    data(){
        return{
          dataExist:'',
          pokemonName: null,
        }
    },
    
    // Apollo-specific options
    apollo: {
      // Query with parameters
      pokemonByName: {
        // gql query
        query: gql`query pokemonByName($name: String!) {
          pokemonByName(name: $name){
            id
            image
            number
            name
            types
            maxCP
            maxHP
            isFavorite
            evolutions{
              id
              name
              number
              image
            }
            weight{minimum maximum}
            height{minimum maximum},
          }
        }`,
        // Reactive variables
        variables() {
          return{
            name: this.$route.params.name,
          }
        },
      },
    },
}
</script>

<style>
    .img_pokemon {
        width: 100%;
        height: auto;
    }
    .purple_bar {
        background: #9F9FFF;
    }

    .green_bar {
        background: #71C1A1;
    }

    .name_pokemon {
        font-weight: bold;
        margin-bottom: -8px;
    }
    .title_atrr{
        font-weight: bold;
    }
    .data_atrr{
        font-size: 0.8rem;
        margin-top: -16px;
    }
    .attr_left_text{
        text-align: left;
    }
    .type_atr{
        font-weight: bold;
    }
    .types_atrr{
        font-size: 0.8rem;
        margin-top: -20px;
    }
    .box{
        background-color: #ececec;
    }
    .custom_card{
        width:30%; margin:0 auto;
    }
    @media (max-width: 800px) {
        .custom_card {
            width: 90%;
        }
    }
</style>