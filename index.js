// checks for full string match
function matchExact(r, text) {
  const match = text.match(r);
  return match && text === match[0];
}

// core function
function telephoneCheck(str) {

  // regex check for number formats
  const regexCheck = /1? ?(\([0-9]{3}\)|[0-9]{3}) ?-?[0-9]{3} ?-?[0-9]{4}/;

  // return true if exact match, false otherwise
  if ((matchExact(regexCheck, str))) {
    return true;
  } else {
    return false;
  }
  
}

telephoneCheck("555-555-5555");