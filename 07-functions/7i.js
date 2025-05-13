function printInvalidUnit(invalidUnit) {
  console.log(`invalid unit: ${invalidUnit}`)
}

function convertLength(length, from, to) {

  if(from === 'miles') {
    if(to === 'km') {
      length = length * 1.6
    }
    else if(to === 'ft') {
      length = length * 5280
    }
    else {
      return printInvalidUnit(to)
    }
  }
  else if(from === 'km') {
    if(to === 'miles') {
      length = length / 1.6
    }
    else if(to === 'ft') {
      length = length * 3281
    }
    else {
      return printInvalidUnit(to)
    }
  }
  else if(from === 'ft') {
    if(to === 'miles') {
      length = length / 5280
    }
    else if(to === 'km') {
      length = length / 3281
    }
  }
  else {
    return printInvalidUnit(from)
  }

  console.log(`${length} ${to}`)
}

convertLength(5, 'miles', 'ft')