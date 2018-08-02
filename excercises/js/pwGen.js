
function passwordGenerator (length) {
    var t = []
    for (var i = 0; i < length; i++) {
      t.push(Math.floor(Math.random() * (122- 33) + 33))
    }
    return String.fromCharCode(...t)
  }
  
  
  function passwordGenerator(n){
    var password = ''
    var options = 'aAbBcCdDeEfFgGhHjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*'
    for(var i = 0; i < n; i++){
      password += options[Math.floor(Math.random() * options.length)]
    }
    return password
  }
  
  console.log(passwordGenerator(10))