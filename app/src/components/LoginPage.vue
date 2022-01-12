<template>
    <div class="login">
        <h1>LOGIN</h1>
        <div>
            <ul><p class="error-message">{{validation.topErrorMessage}}</p></ul>
        </div>
        <form class="form" @submit.prevent="loginUser">
            <div>
                <label for="username">Username</label>
                <input type="text" v-model="input.username"/>
                <p v-if="!input.username" class="error-message">{{validation.error}}</p>
            </div>
            <div>
                <label class="label-des" for="password">Password</label>
                <input type="password" v-model="input.password"/>
                <p v-if="!input.password" class="error-message">{{validation.error}}</p>
            </div>
            <div>
                <button type="button" value="submit" v-on:click="loginUser">Login</button>
            </div>
        </form>
        <div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from './HelloWorld.vue'
import gql from 'graphql-tag'


const GET_ALL_USERS = gql`
    query getUsers {
        users {
            username
        }
    }
`
const LOGIN_USER = gql`
   query User($username: String!, $password: String!) {
        user(username: $username, password: $password){
            username
            password   
        }
    }
`

export default {
  name: 'LoginPage',
  components: {
      HelloWorld
  }, 
  apollo: {
      //getting one single user
      user: {
          query: LOGIN_USER,
          skip() {
              return this.skip
          },
          variables() {
              return {
                  username: this.input.username,
                  password: this.input.password
              }
          },
          result(result){
            const {loading, data } = result
            if(!loading){
                if(data.user == null){
                    this.validation.topErrorMessage = "Incorrect user or password" 
                    this.$apollo.queries.user.skip = true
                } else {
                    // console.log('this.user.username', this.user.username)
                    // console.log('data.user', data.user.username)
                    this.$router.push({
                        name: 'HelloWorld',
                        params: {
                            user: this.user.username,
                            password: this.user.password
                        }
                    })
                }                
            }           
          },
           // Additional options here
          fetchPolicy: 'cache-and-network',    
      },
      // getting a list of users
      users: {
          query: GET_ALL_USERS,
          skip () {
          return this.skip
      }
    }
  },
  data() {
      return {
          // where you initialize your apollo data 
          users: [],
          user: '',
          skip: true,
          input: {
              username: '',
              password: ''
          },
          validation:{
              error: '',
              topErrorMessage: ''
          },
      }
  },
  methods: {
      loginUser() {
          if (this.input.username === '' || this.input.password === '') {
              this.validation.topErrorMessage = "This field can not be empty."
          } else {
              // running query on click
               this.$apollo.queries.user.skip = false        
          }   
      }      
  }
}
</script>

<style scoped>
  .form {
      margin: auto;
      width: 30%;
      padding: 10px;
  }
  .input-div {
      justify-content: flex-start;
  }
  .label-des {
      margin: 5px;
  }

  .error-message {
      color: red;
  }

</style>
