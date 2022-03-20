let regexpTel = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

let regexpEmail = /^[\w-]+@[a-z]+\.[a-z]{2,6}$/;

let regexpSite = /^https?\:\/\/(?:[-\w]+\.)?[-\w]+\.[a-zA-Z]{2,4}?\/?/;

let regexpPassword = /^(?=.*[!@#$%^&*])(?=.*\w)[\w!@#$%^&*]{6,25}$/;

let regexpIpv4 =
  /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
