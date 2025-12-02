document.getElementById('myform').addEventListener('submit',function(event) {
            event.preventDefault();

            const fullname = document.getElementById('firstname').value;
            const email = document.getElementById('email').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const age = document.getElementById('age').value;
            const comments = document.getElementById("comment").value;

            
            if (!fullname || !email) {
                alert("full name and email are required.")
                return;
            }

            if (!age || age <20) {
                alert ("you need to be 20.")
                return;
            }
             if (!gender) {
              alert("you must select the gender.")
               return;
             }
              if (!comments || comments.length <100) {
              alert("Please write at least 100 characters in the comments box.");
             return;
              }
            const formData = {
                name: fullname,
                email: email,
                gender : gender,
                age: age,
                comments: comments
            };
            
            console.log(formData);

            const xhr = new XMLHttpRequest();
            xhr.open("GET","sudmit.json",true);
            xhr.setRequestHeader("content-Type","application/json;charset=UTF-8");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert ("form sudmitted successfully");
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    //document.getElementById('myform').reset();
                    document.getElementById('myform').innerHTML = '';
                    document.getElementById('message').innerText = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error sudmitting form.")
                }
                };
                xhr.send(JSON.stringify(formData));
            });

