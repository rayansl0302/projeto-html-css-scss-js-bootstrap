function balaoalerta() {
  alert("Botão Desativado - Meramente ilustrativo");
}


function voltar() {
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var cpf = document.getElementById("cpf");
  var empresa = document.getElementById("empresa");
  var senha = document.getElementById("senha");


       if (nome && nome.checkValidity() && email && email.checkValidity() && cpf && cpf.checkValidity() && empresa && empresa.checkValidity() && senha && senha.checkValidity()) 
       {
          location.href = "homepage.html";
          
        }
        else{

          alert("Preencha todos os campos");
        }


}

function cadsucesso() {
  var email02 = document.getElementById("email02");
  var senha02 = document.getElementById("senha02");
  localStorage.setItem('EMAIL',email02.value);

       if (email02 && email02.checkValidity() && senha02 && senha02.checkValidity()) 
       {
        location.href = "homepage.html";
        
        }
        else{

          alert("Preencha todos os campos");
        }

          
}

function cadsucesso2() {
  var uname = document.getElementById("uname");
  
        if (uname && uname.checkValidity()) 
       {
        location.href = "index.html";
        }
        else{

          alert("Preencha com seu E-mail");
        }

          
}



