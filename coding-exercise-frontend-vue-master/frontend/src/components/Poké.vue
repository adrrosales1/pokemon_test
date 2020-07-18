<template>
  <div class="hello col-sm-6 col-md-4 col-lg-3 my-1 px-1" v-if=" ( msg.types[0] === type || type === '' )" >
      <div class="card">
        <router-link :to="'/' + msg.name">
          <div class="img-holder">
              <img :src="msg.image" class="">
          </div>
        </router-link>
        <div class="card-body text-left" style="padding: 10px 20px 10px 30px;">
          <div class="row py-1">
            <div class="col-10 p-0">
                <router-link :to="'/' + msg.name">
                  <b class="card-title" style="font-size: 18px">{{msg.name}}</b><br/>
                  <span v-for="(item, index) in msg.types" :key="index" > {{item}} </span>
                </router-link>
            </div>
            <div class="col-2 p-0" style="font-size: 25px;">
              <Heart :pokemon="msg" @isFavorite="emitFavoriteStatus" />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Heart from './Heart.vue';
import router from '@/router'

export default {
  name: "Poké",
  components: {
    Heart
  },
  props: {
    msg: Object,
    type: String,
  },
  methods: {
    emitFavoriteStatus($event, $event2){
      this.$emit('isFavorite', $event, $event2);
    }
  }
};
</script>

<style>
  .card-body{
    background-color:#ececec;
  }

  .hello{
    font-size: 12px;
  }

  .card{
    border-radius: 0!important;
  }

  .btn-submit{
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  .btn-submit:focus{
    outline: transparent 1px;
  }

  .img-holder {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
  }
  .img-holder img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
  }
</style>