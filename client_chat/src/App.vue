
<!--
<template>

  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>
-->
<script>
  import TopMenu from './components/TopMenu'
  import {mapState} from 'vuex'
  export default {
    components: {
      TopMenu
    },
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    },
    created () {
      // console.log('I was created!')
      const userObj = JSON.parse(window.localStorage.getItem('authUser'))
      this.$store.dispatch('setUserObject', userObj)
    }
  }
</script>

<template>
  <div>
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<style lang="sass">
  @import './assets/css/bootstrap.css'
  @import './assets/css/global.scss'
</style>


<!--
<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  created () {
    const postData = {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'eVoW9Us93n5dRXUfPD14uCwdjbZ38Iy4gQnc6tIp',
      username: 'webdev@gmail.com',
      password: 'password',
      scope: ''
    }

    this.$http.post('http://localhost:8000/oauth/token', postData)
      .then(response => {
        console.log(response)
        const header = {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + response.body.access_token
        }
        this.$http.get('http://localhost:8000/api/user', {headers: header})
          .then(response => {
            console.log(response)
          })
      })
  }
}
</script>
-->
<!--
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->
