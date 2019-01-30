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


      //Ahora nos traemos los modelos
      modeloController.readEveryModelo((modelo,err,length) => {
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

//Aviones
router.post('/create', (req, res) => {
  console.log(req.body);
  if(!!req.body){
    avionController.createAvion(req.body, (err) => {
      if(err){
        res.json({
          success: false,
          err,
          msg: 'FAILED TO CREATE FLIGHT'
        })
      }else{
        res.redirect('/admin');
      }
    })
  }
})

router.post('/delete/:id', (req, res) => {
  console.log("Entro en la funcion");
  if(!!req.params.id){
    avionController.deleteAvion(req.params.id, (err) => {
      if(err){
        res.json({
          success: false,
          err,
          msg: 'FAILED TO DELETE FLIGHT'
        })
      }else{
        res.redirect('/admin');
      }
    })
  } else {
    console.log("Algo esta mal");
  }
});

router.post('/edit/:id', (req, res) => {
  if(!!req.params.id){
    avionController.readAvion(req.params.id, (avionSelec, err) => {
      if(err){
        res.json({
          success: false,
          err,
          msg: 'FAILED TO FETCH ONE FLIGHT'
        })
      }else{

        res.render('auth/editAvion',{avionSelec});
      }
    })
  }
})

router.post('/edit/update/:id', (req, res) => {
  if(!!req.params.id){
    if(!!req.body){
      avionController.updateAvion(req.body, req.params.id, (err) => {
        if(err){
          res.json({
            success: false,
            err,
            msg: 'FAILED TO FETCH ONE FLIGHT'
          })
        }else{
          res.redirect('/admin');
        }
      })
    }
  }
})


//Modelos
router.post('/mod/create', (req, res) => {
  console.log(req.body);
  if(!!req.body){
    modeloController.createModelo(req.body, (err) => {
      if(err){
        res.json({
          success: false,
          err,
          msg: 'FAILED TO CREATE FLIGHT'
        })
      }else{
        res.redirect('/admin');
      }
    })
  }
})

router.post('/edit/mod/:id', (req, res) => {
  if(!!req.params.id){
    modeloController.readModelo(req.params.id, (modeloSelec, err) => {
      if(err){
        res.json({
          success: false,
          err,
          msg: 'FAILED TO FETCH ONE FLIGHT'
        })
      }else{

        res.render('auth/editModelo',{modeloSelec});
      }
    })
  }
})

router.post('/delete/mod/:id', (req, res) => {
  console.log("Entro en la funcion");
  if(!!req.params.id){
    modeloController.deleteModelo(req.params.id, (err) => {
      if(err){
        res.json({
          success: false,
          err,
          msg: 'FAILED TO DELETE FLIGHT'
        })
      }else{
        res.redirect('/admin');
      }
    })
  } else {
    console.log("Algo esta mal");
  }
});

router.post('/edit/mod/update/:id', (req, res) => {
  if(!!req.params.id){
    if(!!req.body){
      modeloController.updateModelo(req.body, req.params.id, (err) => {
        if(err){
          res.json({
            success: false,
            err,
            msg: 'FAILED TO FETCH ONE FLIGHwwT'
          })
        }else{
          res.redirect('/admin');
        }
      })
    }
  }
})
module.exports = router;
