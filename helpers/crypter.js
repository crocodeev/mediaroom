const bcrypt = require('bcrypt')

const password = process.argv[2]

bcrypt.hash(password, 12, (err, hash) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log(hash)
})