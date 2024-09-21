const { sign, verify } = require("jsonwebtoken");

const middleware_admin = (req, res, next) => {
  //console.log(res.cookies);
  const accesstoken = req.cookies["admin-token"];
  console.log(accesstoken);
  if (!accesstoken) {
    res.send("invalid token 1 !");
  }

  try {
    const validtoken = verify(accesstoken, "mykey");
    if (validtoken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).send("invalid token 2 !");
  }
};

const middleware_user = (req, res, next) => {
  //console.log(res.cookies);
  const accesstoken = req.cookies["user-token"];
  console.log(accesstoken);
  if (!accesstoken) {
    res.send("invalid token 1 !");
  }

  try {
    const validtoken = verify(accesstoken, "mykey");
    if (validtoken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).send("invalid token 2 !");
  }
};

const createtoken = (user) => {
  const accesstoken = sign({ username: user.username }, "mykey");
  return accesstoken;
};

module.exports = {
  middleware_admin,
  middleware_user,
  createtoken,
};
