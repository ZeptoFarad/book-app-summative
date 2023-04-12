<template>
  <div class="sign-up-page-wrapper">
    <h1>Welcome to Peekabook! Ready to sign up?</h1>
    <div class="div-row-flex">
      <div class="sign-up-form">
        <h2 class="sign-up-title">Sign Up</h2>
        <h4 v-if="inputError" class="errormessage">{{ message }}</h4>
        <div class="input-form">
          <div class="input_box">
            <label
              :class="{ error: usernameError, correct: usernameCorrect }"
              for="username"
              >Username</label
            >
            <input
              :class="{ error: usernameError, correct: usernameCorrect }"
              id="username"
              type="text"
              placeholder="Username"
              :value="usernameInput"
              @input="usernameInput = $event.target.value"
            />
          </div>

          <div class="input_box">
            <label
              :class="{ error: firstnameError, correct: firstnameCorrect }"
              for="first_name"
              >First Name</label
            >
            <input
              :class="{ error: firstnameError, correct: firstnameCorrect }"
              id="first_name"
              type="text"
              placeholder="First name"
              :value="firstnameInput"
              @input="firstnameInput = $event.target.value"
            />
          </div>

          <div class="input_box">
            <label
              :class="{ error: lastnameError, correct: lastnameCorrect }"
              for="last_name"
              >Last Name</label
            >
            <input
              :class="{ error: lastnameError, correct: lastnameCorrect }"
              id="last_name"
              type="text"
              placeholder="Last Name"
              :value="lastnameInput"
              @input="lastnameInput = $event.target.value"
            />
          </div>

          <div class="input_box">
            <label
              :class="{ error: emailError, correct: emailCorrect }"
              for="email"
              >Email</label
            >
            <input
              :class="{ error: emailError, correct: emailCorrect }"
              id="email"
              type="text"
              :value="emailInput"
              @input="emailInput = $event.target.value"
              placeholder="Email"
            />
          </div>

          <div class="input_box">
            <label
              :class="{ error: passwordError, correct: passwordCorrect }"
              for="password"
              >Password</label
            >
            <input
              :class="{ error: passwordError, correct: passwordCorrect }"
              id="password"
              type="text"
              placeholder="Password"
              :value="passwordInput"
              @input="passwordInput = $event.target.value"
            />
          </div>

          <div class="input_box">
            <label
              :class="{ error: passwordError, correct: passwordCorrect }"
              for="confirm_pass"
              >Confirm Password</label
            >
            <input
              :class="{ error: passwordError, correct: passwordCorrect }"
              id="confirm_pass"
              type="text"
              placeholder="Confirm Password"
              :value="confirmInput"
              @input="confirmInput = $event.target.value"
            />
          </div>
        </div>
        <button class="tertiary_button" @click="createAccount">
          Create your account
        </button>
      </div>

      <div class="sign-up-benefit-wrapper">
        <div class="sign-up-img-wrapper">
          <img
            src="../assets/images/sign-up-img.jpeg"
            alt=""
            class="sign-up-img"
          />
        </div>
        <div class="benefit-paragraph">
          <h2 class="h2-title">Enjoy the benefits</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            consequuntur eaque ex aliquam autem totam, iste maxime repudiandae,
            accusamus fugiat non suscipit delectus ipsum praesentium. Nobis
            numquam temporibus corporis modi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.errormessage {
  color: red;
  white-space: pre-line;
  text-align: center;
}
.div-row-flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1400px;
  padding-bottom: 30px;
  margin: auto;
}
h1 {
  padding: 50px 9%;
  font-size: clamp(40px, 4vw, 64px);
}
.sign-up-title {
  padding-bottom: 30px;
}
.sign-up-page-wrapper {
  color: var(--book_brown);
}
.sign-up-form {
  width: clamp(400px, 40vw, 550px);
  padding: 50px;
  background-color: var(--book_wheat);
  height: 78vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-form {
  width: clamp(310px, 50vw, 400px);
}

.sign-up-benefit-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.sign-up-img-wrapper {
  max-width: 35vw;
  width: 26vw;
  height: 40vh;
}

.sign-up-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.benefit-paragraph {
  max-width: 27vw;
}
.h2-title {
  padding: 15px 0;
}

@media (max-width: 900px) {
  .sign-up-benefit-wrapper {
    display: none;
  }

  .sign-up-form {
    border-radius: 0;
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      usernameInput: "",
      firstnameInput: "",
      lastnameInput: "",
      emailInput: "",
      passwordInput: "",
      confirmInput: "",
      usernameError: false,
      firstnameError: false,
      lastnameError: false,
      emailError: false,
      passwordError: false,
      usernameCorrect: false,
      firstnameCorrect: false,
      lastnameCorrect: false,
      emailCorrect: false,
      passwordCorrect: false,
      inputError: false,
      message: "",
      returnpage: "",
      checker: "",
      formbody: {},
      mydata: {}
    };
  },
  methods: {
    createAccount() {
      this.message = "";
      // Input Validation for the password and confirm password input
      if (this.passwordInput != this.confirmInput) {
        this.passwordError = true;
        this.message += '"Passwords do not match" \n';
        this.inputError = true;
      }
      if (!this.passwordInput.length || !this.confirmInput.length) {
        this.passwordError = true;
        this.message += '"You must supply a password and confirmation" \n';
        this.inputError = true;
      } else {
        this.passwordCorrect = true;
      }
      if (!this.emailInput.length) {
        this.message += '"You must input a email" \n';
        this.inputError = true;
        this.emailError = true;
      } else {
        this.emailCorrect = true;
      }
      if (!this.lastnameInput.length) {
        this.message += '"You must input a last name" \n';
        this.inputError = true;
        this.lastnameError = true;
      } else {
        this.lastnameCorrect = true;
      }
      if (!this.firstnameInput.length) {
        this.message += '"You must provide a first name" \n';
        this.inputError = true;
        this.firstnameError = true;
      } else this.firstnameCorrect = true;
      if (!this.usernameInput.length) {
        this.message += '"You must provide a user name" \n';
        this.inputError = true;
        this.usernameError = true;
      } else this.usernameCorrect = true;
      if (
        this.usernameCorrect &&
        this.firstnameCorrect &&
        this.lastnameCorrect &&
        this.emailCorrect &&
        this.passwordCorrect
      ) {
        // Post to backend and check if account email exists
        this.formbody = JSON.stringify({
          user: {
            firstname: this.firstnameInput,
            lastname: this.lastnameInput,
            email: this.emailInput
          },
          security: {
            username: this.usernameInput,
            password: this.passwordInput
          }
        });
        ///////////////////////////////////////////////////////
        let data;

        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: this.formbody
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.Reply);
            if (data.Reply == "Success") {
              console.log("User Created Successfully");
              // Belen add router here //
              localStorage.setItem('userID', data.id)
              this.$router.push('/test')
              console.log(data.id);
            }
            if (data.Reply == "Failed") {
              console.log("Adding User Failed");
              this.inputError = true;
              this.message =
                "User Email Already Exists \n Please login or use a different Email";
            }
          });
      }
    }
  }
};
</script>
