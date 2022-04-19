function showData(){
    // input DOM
   let name =  document.getElementById("name").value
   let email =  document.getElementById("email").value
   let phoneNumber =  document.getElementById("phoneNumber").value
   let subject =  document.getElementById("subject").value
   let message =  document.getElementById("message").value
    // Set value
   document.getElementById("name").value = ""
   document.getElementById("email").value = ""
   document.getElementById("phoneNumber").value = ""
   document.getElementById("subject").value = ""
   document.getElementById("message").value = ""

    // Validation
    if ((name, email, phoneNumber, subject, message == '')) {
        return alert('All form inputs must be filled in to proceed');
      }
      console.log('Semua input formulir harus diisi untuk melanjutkan');
    
      let emailReceiver = 'arymuslichudin@gmail.com';
    
      let a = document.createElement('a');
      a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${subject}, ${message}`;
      a.click();
    }