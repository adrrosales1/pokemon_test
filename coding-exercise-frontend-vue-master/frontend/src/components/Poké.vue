<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>pokemon = pocket monsters:*)</p>

    <h3>gotta catch 'em all</h3>
    <ul>
      <li>
        hi
      </li>

      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Poké",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
