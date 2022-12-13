import * as yup from 'yup';

export default function (req,res,next) {
    let schema = yup.object().shape({
        name: yup.string().required(),
        age: yup.number().required().positive().integer(),
        email: yup.string().email(),
        password: yup.string()
      });
      
      // check validity
      schema
        .isValid({
          name: 'jimmy',
          age: 24,
        })
        .then(function (valid) {
            if(valid){
              console.log(valid);
                next();
            }
        });
    
}

