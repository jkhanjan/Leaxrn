function sendMail(){
    let params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }
  
    emailjs.send("service_eqn1jhp", "template_y3usbba",params).then(alert("Email sent"))
  }