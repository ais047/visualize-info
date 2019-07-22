<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div class="contain">
      <div>{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    title: "Bits",
    description: {
      subtitle: "Bits are used to depict the smallest unit of data in a computer.", 
      sub2: "They can be used to be the building blocks of larger data units and formats.",
      sub3: "For example, an IPv4 Address has 32 bits, which is usually depicted in decimal notation, such as 172.016.254.001",
      sub4: "172.016.254.001 can be broken down to it's bit units. 10101100.00010000.11111110.00000001",
      sub5: "If you will notice, 254 is 11111110 when written to 8 bit binary, meaning 255 is the highest possible number for 8 bit binary."
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  margin-left: 10%;
  margin-right: 10%;
}
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
