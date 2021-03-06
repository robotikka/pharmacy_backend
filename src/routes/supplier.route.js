var express=require('express');
var router=express.Router();

var supplier = require('../controllers/supplier.controller');
// var Supplier=require('../models/supplier.model');


router.get('/viewall' , (req, res) => {
    supplier.getAllSuppliers().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})



router.post('/new', (req, res) => {
    supplier.addSupplier(req.body).then((response) => {
        console.log(response)
        res.status(response.status).send(response);
    }).catch(err => {
        console.log(err)
        res.status(err.status).send(err)
    });
});


router.get('/view/:id' , (req, res) => {
    supplier.getOneSupplier(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

router.put('/update/:id',(req,res,next)=>{
    supplier.updateSupplier(req.params.id,req.body).then((response)=>{
        console.log(response);
        res.status(response.status).send(response);
    }).catch(err=>{
        console.log(err)
        res.status(err.status).send(err)
    })
});

router.put('/delete/:id',(req,res,next)=>{
    supplier.deleteSupplier(req.params.id).then((response)=>{
        console.log(response);
        res.status(response.status).send(response);
    }).catch(err=>{
        console.log(err)
        res.status(err.status).send(err)
    })
});

module.exports=router;