<template>
  <li class="list-group-item my-1 p-1" v-if=" ( msg.types[0] === type || type === '' )">
    <div class="row">
      <div class="col-2 col-md-1 text-center">
        <router-link class="col-6 p-0" :to="'/' + msg.name">
          <div class="img-holder">
              <img :src="msg.image" class="">
          </div>
        </router-link>
      </div>
      <router-link class="col-8 col-md-10 p-0" :to="'/' + msg.name">
        <div class="col-12 text-left">
          <small><b class="card-title">{{msg.name}}</b></small>
          <br>
          <small v-for="(item, index) in msg.types" :key="index" >
            {{item}}
          </small>
        </div>
      </router-link>
      <div class="col-2 col-md-1" style="font-size: 25px;">
        <Heart :pokemon="msg" @isFavorite="emitFavoriteStatus" />
      </div>
    </div>
  </li>
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

<style scoped>
  .list-group-item{
    border-radius: 0!important;
    border: 1px solid rgba(0,0,0,.125) !important;
    background-color:#ececec;
  }

  .img-holder {
    width: 100%;
    height: 60px;
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