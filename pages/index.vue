<template>
  <div>
    <h1>
      Example of generate dynamic static page with nuxt.
    </h1>
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="`user_${user.uid}`">
        <nuxt-link :to="{ name: 'user-id', params: { id: user.uid }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <h2>Static Files</h2>
    <div>
      <img src="/images/image1.jpg">
    </div>
    <h2>Other Page</h2>
    <div>
      <nuxt-link :to="{ name: 'about' }">
        About
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const res = await $axios.get('http://localhost:8888/api/users')
    const users = res.data

    return {
      users
    }
  }
}
</script>
