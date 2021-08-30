const express= require("express");
const form= require("../controllers/forms.js");
const router = express.Router();

router.post('/', form.createForm);

module.exports=router;
