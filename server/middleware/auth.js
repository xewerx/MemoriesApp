import jwt, { decode } from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; //to check later

        let decodedData;
        
        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'hereMustBeSecret');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;  // google user id
        }

        next();

    } catch (error){
        console.log(error);
    }
}

export default auth;