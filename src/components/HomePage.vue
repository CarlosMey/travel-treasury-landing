<template>
  <div class="container-fluid m-0 p-0">

      <div id="home-page" class="full-height  p-4">
          <div class="container pt-3">

              <div class="row pb-5">
                  <div class="col-lg-6 pt-4 my-auto">
                      <div class="text-center mb-3 d-block c-lg-none">
                          <h1 class="display-3">{{title}}</h1>
                          <h3>Find the World</h3>
                      </div>
                    <img id="iphone-img" src="../assets/telefono 2.0.png" class="img-fluig" >
                  </div>
                  <div class="col-lg-6 my-auto pt-4">
                      <div class="text-center mb-3 d-block c-lg-none">
                          <h1 class="display-3">{{title}}</h1>
                          <h3>Find the World</h3>
                      </div>
                      <div style="padding-top: 1rem" class="border p-3 p-md-5 bg-white rounded shadow py-5">
                        <h2>Coming  Soon</h2>
                        <form @submit.prevent="addEmail(email)">
                            <div class="form-group">
                                <label for="emailSignup">Reserve your account now</label>
                                <input v-model="email" id="emailSignup" type="email" placeholder="Enter Email" class="form-control">
                                <small id="emailSignup" class="form-text text-muted">We will never share your email address</small>
                                <br>
                                <button  type="submit" style="background-color:#259e3f;" class="btn btn-success">Join waiting List</button>
                            </div>
                        </form>
                      </div>

                    <div id="available" class="p-2" >
                        <h4 class="text-center mb-2 mt-3 text-light">Avaiable On</h4>
                        <div class="row">
                            <div class="col my-auto">
                                <img src="../assets/download-google.jpg" class="float-right img-fluid app_store_img">
                            </div>
                            <div class="col my-auto">
                                <img src="../assets/download-apple.png" class="float-right img-fluid app_store_img">
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>

      <div id="about" class="bg-light p-3 p-mb-5">
          <div class="row">

              <div class="col-lg">
                  <img src="..//assets/icons/telefono-icono.png" height="120" class="m-4">
                  <h5 class="ml-md-4 mr-md-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro, tenetur quia nam suscipit molestias.
                  </h5>
              </div>

              <div class="col-lg">
                  <img src="..//assets/icons/moneda-icono.png" height="120" class="m-4">
                  <h5 class="ml-md-4 mr-md-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro, tenetur quia nam suscipit molestias.
                  </h5>
              </div>

              <div class="col-lg">
                  <img src="..//assets/icons/pasaporte-icono.jpg" height="120" class="m-4">
                  <h5 class="ml-md-4 mr-md-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro, tenetur quia nam suscipit molestias.
                  </h5>
              </div>

          </div>
      </div>

      <div id="contact" class="bg-info p-4">
          <div class="row justify-content-center">
              <div class="col-lg-4">
                  <h2>Have Any Questions</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, earum.</p>

                  <form action="">
                      <div class="form-group text-left">
                          <input type="email" class="form-control" placeholder="Enter Your Email">
                          <textarea class="form-control mt-3" placeholder="Enter Your Message" rows="5"></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary">Send Message</button>
                  </form>
              </div>
          </div>
      </div>

      <div id="footer" class="bg-primary p-4">
          <footer class="text-light p-4">
              <a href="https://www.youtube.com/watch?v=6hMgjy_Y-48&ab_channel=LaArmer%C3%ADa" target="_blank" class="text-warning">Build This App</a>
              <a href="#" class="text-warning" >Privacy Policy</a>
              <br>
              <small>&copy; 2022, TravelTreasury.app</small>
          </footer>
      </div>

  </div>
</template>

<script>
// import { Auth } from '@/firebase/auth.js'
export default {
    data(){ 
        return {
            title: "Travel Treasure",
            email: "",
            meessage:"",
        }
    },
    methods:{
        async addEmail(email){

            var noticeMessage = "Your account has been reserved"
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name:"Client", email:this.email, phone:"", message:this.message, subject:"Email de formulario" })
            };
            const response = await fetch("http://localhost:3000/send-email", requestOptions);
            const data = await response.json();
            //console.log(data);

            Swal.fire('Se ha enviado el mensaje correctamente')
            

        


            // await Auth.createUserWithEmailAndPassword(email, 'password').catch(function(error){
            //     if("error.code != auth/email-already-in-use"){
            //         noticeMessage = error.message;
            //     }
            // });
            // this.meessage = noticeMessage;
            // this.email = '';
        },
        rendomPassword(length){
            var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
            var password = "";
            for(var x = 0; x < length; x++){
                var i = Math.floor(Math.random() * chars.length);
                password += chars.charAt(i);
            }
            return password;
        }
    }

    


}
</script>

<style scoped>

#home-page {
    background-color: #2f98cc;
    background: url('../assets/paisaje.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

#about{
    min-height: 40vh;
}

#iphone-img {
    max-height: 80vh;
}

#contact {
    background-color: #6542e2;
}

.app_store_img{
    max-height: 80px;
}


</style>