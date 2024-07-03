// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()






function add_deal(){

const data = JSON.stringify({
    "firstName": $('input[name=firstName]').val(),
    "lastName": $('input[name=lastName]').val(),
    "phone": $('input[name=phone]').val(),
    "email": $('input[name=email]').val(),
    "jobtype": $('input[name=jobtype]').val(),
    "jobsource": $('input[name=jobsource]').val(), 
    "description": $('textarea[name=description]').val(),
    "address": $('input[name=address]').val(),
    "city": $('input[name=city]').val(),
    "locate": $('select[name=locate]').val(),
    "zipcode": $('input[name=zipcode]').val(),
    "area": $('select[name=area]').val(),
    "start_date": $('input[name=start_date]').val(),
    "start_time": $('input[name=start_time]').val(),
    "end_time": $('input[name=end_time]').val(),
    "testselect": $('select[name=lost_time]').val(),    
    });

let url = "https://developers.pipedrive.com/docs/api/v1/Deals"; 


    console.log(data);    

    fetch("", {
        credentials: "same-origin",
        mode: "same-origin",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: data
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json()
            } else {
                console.log("Status: " + resp.status)
                return Promise.reject("server")
            }
        })
        .then(dataJson => {
            url = JSON.parse(dataJson)
        })
        .catch(err => {
            if (err === "server") return
            console.log(err)
        })

    console.log(`Received: ${url}`) 
}


 

