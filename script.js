function verificar() {
  // Obter o ano de nascimento do input
  var anoUsuario = document.getElementById("anoNasc").value;
  anoUsuario = parseInt(anoUsuario);
  // Obter o ano atual
  var agora = new Date();
  var anoAtual = agora.getFullYear();
  var sexo = "";

  // Elementos HTML relevantes
  var msgFim = document.getElementById("msgFim");
  var imagemFinal = document.getElementById("imagemFinal");
  var resultadoFinal = document.getElementById("resultadoFinal");
  var selecSex = document.getElementById("selecSex");

  if (selecSex.value === "sexFemi") {
    var sexo = "uma mulher";
  } else {
    var sexo = "um homem";
  }

  // Verificar se o ano de nascimento é válido
  if (anoUsuario < 1800 || anoUsuario >= anoAtual) {
    alert(
      `Erro: Por favor, insira um ano de nascimento válido. ENTRE (1900 e ${--anoAtual})`
    );
  } else {
    var soma = anoAtual - anoUsuario;

    // Exibir a idade
    msgFim.textContent = `Você é ${sexo} e tem ${soma} anos.`;
    msgFim.style.textAlign = "center";
    msgFim.style.margin = "1rem";
    imagemFinal.style.textAlign = "center";
    resultadoFinal.style.marginTop = "2rem";

    // Determinar a faixa etária e exibir imagem correspondente
    if (soma > 0 && soma <= 1) {
      // Bebê:
      if (selecSex.value === "sexFemi") {
        alert(`Bebê do sexo feminino. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/01-f.png">`;
      } else if (selecSex.value === "sexMasc") {
        alert(`Bebê do sexo masculino. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/01-m.png">`;
      }
    } else if (soma <= 12) {
      // Criança:
      if (selecSex.value === "sexFemi") {
        alert(`Criança do sexo feminino. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/02-f.png">`;
      } else if (selecSex.value === "sexMasc") {
        alert(`Criança do sexo masculino. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/02-m.png">`;
      }
    } else if (soma <= 19) {
      // Adolescente ou Jovem:
      if (selecSex.value === "sexFemi") {
        alert(`Adolescente ou Jovem do sexo feminino. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/03-f.png">`;
      } else if (selecSex.value === "sexMasc") {
        alert(`Adolescente ou Jovem do sexo masculino. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/03-m.png">`;
      }
    } else if (soma <= 59) {
      // Adulto:
      if (selecSex.value === "sexFemi") {
        alert(`Adulto do sexo feminino. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/04-f.png">`;
      } else if (selecSex.value === "sexMasc") {
        alert(`Adulto do sexo masculinoo. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/04-m.png">`;
      }
    } else {
      // Idoso:
      if (selecSex.value === "sexFemi") {
        alert(`Idoso do sexo feminino. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/05-f.png">`;
      } else if (selecSex.value === "sexMasc") {
        alert(`Idoso do sexo masculino. Possui ${soma} anos.`);
        imagemFinal.innerHTML = `<img src="imagem/05-m.png">`;
      }
    }
  }
  // Exibir botão de voltar
  document.getElementById("botaoVoltar").style.display = "block";
  document.getElementById("resultadoFinal").style.display = "block";
}

function voltar() {
  // Redirecionar para a página anterior
  window.location.href = "Exc014.html";
}
