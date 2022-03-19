let regexpTel = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

let regexpEmail = /^([\w-]+)@([a-z]+)\.([a-z]{2,6})$/;

let regexpSite = /^(http|https)\:\/\/(?:[-\w]+\.)?([-\w]+)\.[a-zA-Z]{2,4}?\/?/;

let regexpPassword = /^(?=.*[!@#$%^&*])(?=.*\w)[\w!@#$%^&*]{6,25}$/;

let regexpIpv4 = /^([0-9]{1,3}[\.]){3}[0-9]{1,3}$/;

let url = /^(http|https)\:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/;
console.log(url.test("https://qwertggy.com"));
console.log(regexpSite.test("https://qwertggy.com"));
function validateURL(textval) {
  var urlregex = new RegExp(
    "^(http|https|ftp)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9-._?,'/\\+&amp;%$#=~])*$"
  );
  return urlregex.test(textval);
}

console.log(validateURL("https://qwertggy.com"));
