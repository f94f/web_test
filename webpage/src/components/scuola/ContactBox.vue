<template>
    <div>
      <form v-if="!submitted" @submit.prevent="submitForm">
        <h3>CONTACT FORM</h3>
        <label>
          <!-- <span>Email</span> -->
          <input type="email" name="email" placeholder="EMail" v-model="email" />
        </label>
        <label>
            <span>TOPIC</span>
            <select id="country" name="country">
            <option value="esto">Esto</option>
            <option value="Aquello">Aquello</option>
            </select>
        </label>
        <label>
          <!-- <span>Message</span> -->
          <textarea name="message" placeholder="Message" v-model="message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div v-if="submitted">
        <p>Thank you for your message! We'll get back to you soon.</p>
      </div>
      <div v-if="error">
        <p>Error: {{ error }}</p>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        email: '',
        message: '',
        submitted: false,
        error: '',
        endpoint: 'https://formcarry.com/s/rsb4tnQbjGR',
      }
    },
    methods: {
      async submitForm() {
        const data = {
          email: this.email,
          message: this.message,
        }
        try {
          const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          if (result.code === 200) {
            this.submitted = true;
          } else {
            this.error = result.message;
          }
        } catch (err) {
          this.error = err.message;
        }
      },
    },
  }
  </script>

  <style>
    form {
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2vw 4vw;
    }
  </style>

