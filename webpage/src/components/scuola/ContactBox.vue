<template>
    <div class="container">
      <form v-if="!submitted" @submit.prevent="submitForm">
        <h3>CONTACTANOS!</h3>
        <label>
          <input type="email" name="email" placeholder="EMail" v-model="email" />
        </label>
        <label>
            <select id="topic" name="topic">
              <option id="hiddenOption" value="" hidden>Elegir Topic</option>
              <option value="esto">Esto</option>
              <option value="Aquello">Aquello</option>
            </select>
        </label>
        <label>
          <textarea id="messageArea" name="message" placeholder="Message" v-model="message"></textarea>
        </label>
        <button id="submitButton" type="submit">Submit</button>
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
    .container {
      height: 350px;
      border-radius: 5px;
      background-color: #f2f2f2;
      padding: 20px;
    }
    input[type=email], select, textarea {
      width: 100%; /* Full width */
      padding: 10px; /* Some padding */ 
      border: 1px solid #ccc; /* Gray border */
      border-radius: 4px; /* Rounded borders */
      box-sizing: border-box; /* Make sure that padding and width stays in place */
      margin-top: 0px; /* Add a top margin */
      margin-bottom: 6px; /* Bottom margin */
      resize: horizontal /* Allow the user to vertically resize the textarea (not horizontally) */
    }
    textarea {
      height: 150px;
    }
    button {
      /* color: red; */
      background-color: #04AA6D;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
    #submitButton {
      color: white;
    }
    /* #submitButton:hover {
      color: black;
    } */
    select {
      color: gray;
    }
    option {
      color: black;
    }

  </style>

