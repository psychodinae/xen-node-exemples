const XenNode = require("xen-node");
const FfCookieLoader = require("./ff_cookie_loader.js");

// exemple to get firefox cookie to login on ignboards forum because 
// this site not use standard xenforo login system.

const url = "https://www.ignboards.com";
const ign = new XenNode(url);

FfCookieLoader((ck) => {
  ign.checkLogin(ck)
    .then((resp) => console.log("logged:", resp))
    .then(() => ign.react("3", "525722349"))
    .catch((err) => console.log(err));
});
