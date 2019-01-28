const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const avionController = require("../controllers/avionController");
const modeloController = require("../controllers/modeloController");

router.get("/admin", (req, res) => {
  avionController.readEveryAvion((avion,err,length) => {
    if(err){
      console.log("Nope");
    }else{
      console.log("---------------------------------------------------------------" + avion);

      modeloController.readModelo((modelo,err,length) => {
        if(err){
          console.log("No entró");
        }else{
          console.log("---------------------------------------------------------------" + modelo);
          res.render('auth/admin', { title: 'Vuelos Guacamayas', modelo, avion });
        }
      })

    }
  })

  

});

router.get("signin", (req, res) => {
  res.render("auth/signin", { title: "Iniciar Sesion" });
});
router.post("signin", authController.signin);
router.get("signup", (req, res) => {
  res.render("auth/signup", { title: "Registrarse" });
});
router.post("signup", userController.signup, authController.signin);

module.exports = router;
