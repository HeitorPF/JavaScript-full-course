function convertLength(length, from, to) {

  if(from === 'miles') {
    if(to === 'km') {
      length = length * 1.6
    }
  }
  else if(from === 'km') {
    if(to === 'miles') {
      length = length / 1.6
    }
  }

  console.log(`${length} ${to}`)
}

convertLength(80, 'km', 'km')