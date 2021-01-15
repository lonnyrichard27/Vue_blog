<template>
  <div class="welcome container">
      <div class="card">
          <div class="card-content center-align">
              <h2 class="purple-text">Welcome</h2>
              <form @submit.prevent="enterChat">
                  <label for="name">Enter your name</label>
                  <input type="text" name="name" v-model="name" id="">
                  <p v-if="feedback" class="red-text">{{ feedback }}</p>
                  <button class="btn purple">Enter Chat</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name: null,
            feedback: null
        }
    },
    methods: {
        enterChat(){
            // if a value is entered in the name field run the if block
            if (this.name) {
                this.$router.push({ name: 'Chat', params: { name: this.name} })
            } else {
                // else display the feedback
                this.feedback = 'You must a name to join'
            }
        }
    }
}
</script>

<style scoped>
.welcome{
    max-width: 400px;
    margin-top: 100px;
}
.welcome h2{
    font-size: 3em;
}
.welcome button {
    margin: 30px auto;
}
</style>