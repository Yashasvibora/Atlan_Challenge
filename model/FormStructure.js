const mongoose=  require('mongoose');
const { isEmail }= require('validator');


// ownerSchema denotes the owner of the form, i.e. person, organization, company, etc
var ownerSchema= mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    //forItems contains the components of the form which will be created by the owner
    formItems: [
        {
            formID: {
                type: mongoose.Schema.Types.ObjectId, //a unique ID given to every form
                required: true,
                unique: true
            },
            formName: {
                type: String,
                required: true
            },
            //Every form will contain questions which will be added by the owner
            Questions: [
                {
                    Title: {
                        type: String,
                        required: true
                    },
                    Description: {
                        type: String
                    },
                    Keyword: {
                        type: String
                    },
                    Mandatory: {
                        type: Boolean,
                        required: true
                    },
                    Characters_Allowed: {
                        type: Number,
                    },
                    Options: {
                        type: Array,
                        default: [] 
                    },
                }
            ],

            //ResponseInfo denotes the response which will be given by the customer and his/her information

            ResponseInfo: [
                {
                    //It contains information about the person filling the form

                    customerID: {
                        type: mongoose.Schema.Types.ObjectId, //unique ID to every person who fills the form
                        required: true,
                        unique: true
                    },
                    customerName: {
                        type: String,
                        required: true,
                    },
                    customerContact: {
                        type: Number,
                        required: true,
                        unique: true
                    }, 
                    customerEmail: {
                        type: String,
                        validate: [isEmail, 'Invalid Email'],
                        required: true,
                        unique: true
                    },
            
                    //Each customer will have unique answers attached to his ID so there will be no duplication of data
                    Answers: [
                        {
                            descriptive_answer:{
                                type: String,
                                required: true
                            },
                            mcq:{
                                type: Array,
                                default: []
                            }
                        }
                    ]
                    
                }
            ]
            
        }
    ]
})

const FormModel= mongoose.model('FormModel', ownerSchema)
module.exports= FormModel