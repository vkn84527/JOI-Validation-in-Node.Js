const Joi = require('joi')

function validateUser(user)
{
	const JoiSchema = Joi.object({
	
		username: Joi.string().min(5).max(30).required(),
					
		email: Joi.string().email().trim().min(5).max(50).required(),
				
		date_of_birth: Joi.date().optional(),
						
		account_status: Joi.string().valid('activated')
						.valid('unactivated')
						.optional(),
		phone : Joi.string().min(10).required()
	}).options({ abortEarly: false });
    /* 
    if abortEarly is set to false  then displayed all multiple errors 
    else :-  will stop as soon as the first error come  
    */

	return JoiSchema.validate(user)
}

const user = {
	username: 'vikas',
	email: 'vkn84527@gmail.com',
	date_of_birth: '1999-10-10',
	account_status: 'activated',
	phone: '1234567890'
}

response = validateUser(user)

if(response.error)
{
	console.log(response.error.details)
}
else
{
	console.log("Validated Data")
}


