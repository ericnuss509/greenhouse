const jwt = require("jsonwebtoken");

// middleware function that rests between the request and response
module.exports = {
    authenticate(req, res, next) {
        jwt.verify(
            req.cookies.usertoken,
            process.env.JWT_SECRET,
            (err, payload) => {
                if (err) {
                    res.status(401).json({
                        verified: false
                    });
                    console.log(err);
                } else {
                    next();
                }
            }
        );
    },
};




// const jwt = require("jsonwebtoken");


// module.exports.secret = secret;

// module.exports.authenticate = (req, res, next) => {
//     jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
//         if (err) {
//             res.status(401).json({ verified: false });
//         } else {
//             next();
//         }
//     });
// }