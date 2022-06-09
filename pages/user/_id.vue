<template>
  <div>
    <div>
      Name: {{ data.name }}
    </div>
    <div>
      Age: {{ data.age }}
    </div>
    <div>
      Location: {{ data.location }}
    </div>

    <hr>
    <nuxt-link :to="{ name: 'index'}">
      back
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const res = await $axios.get('http://localhost:8888/api/user/' + params.id)
    const data = res.data

    return {
      data
    }
  }
}
</script>
