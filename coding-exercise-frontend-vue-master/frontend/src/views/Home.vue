<template>
  <div class="home">
    <Poké msg="Poké mon :) :  ) < 3" />
  </div>
</template>

<script>
// @ is an alias to /src
import Poké from "@/components/Poké.vue";

export default {
  name: "home",
  components: {
    Poké
  }
};
</script>
