const express= require('express');
const FormModel= require('../model/FormStructure.js');
const mongoose= require('mongoose');
const app= express();

const router= express.Router();

const createForm =  async (req, res) => {
    console.log(req.body);
    const newform = new FormModel(request.body)
    try {
        await newform.save();
res.status(201).json(newform);
} catch(error) {
        res.status(400).json({ message : error.message});
    }
}

module.exports.createForm= createForm;