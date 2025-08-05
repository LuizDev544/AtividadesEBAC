import { useState } from "react"
import Header from "./components/Header"
import FormularioIMC from "./components/Form"
import ResultadoIMC from "./components/Result"
import ClassificacaoIMC from "./components/Classification"
import "./styles/index.css"

export default function App() {
  const [resultado, setResultado] = useState({
    imc: "",
    titulo: "",
    descricao: "",
    mostrarResultado: false,
    idade: "",
    sexo: "",
  })

  const calcularIMC = (peso, altura, idade, sexo) => {
    const pesoNum = Number.parseFloat(peso)
    const alturaNum = Number.parseFloat(altura)

    if (pesoNum === 0 || alturaNum === 0 || !peso || !altura) {
      alert("Por favor, insira um valor válido")
      return
    }

    const imc = pesoNum / Math.pow(alturaNum, 2)
    let titulo = ""
    let descricao = ""

    switch (true) {
      case imc < 18.5:
        titulo = "Abaixo do peso";
        descricao = "Abaixo do normal. Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.";
        break;

      case imc >= 18.6 && imc <= 24.9:
        titulo = "Normal";
        descricao = "Que bom que você está com o peso normal! Continue mantendo um estilo de vida saudável.";
        break;

      case imc >= 25 && imc <= 29.9:
        titulo = "Sobrepeso";
        descricao = "Fique atento à alimentação e pratique atividades físicas regularmente.";
        break;

      case imc >= 30.0 && imc <= 34.9:
        titulo = "Obesidade grau I";
        descricao = "É importante buscar orientação médica para evitar complicações.";
        break;

      case imc >= 35 && imc <= 39.9:
        titulo = "Obesidade grau II";
        descricao = "Redobre os cuidados com a alimentação e a saúde. Consulte um especialista.";
        break;

      default:
        titulo = "Obesidade grau III";
        descricao = "Procure um profissional de saúde para um acompanhamento adequado.";
}


    setResultado({
      imc: imc.toFixed(2),
      titulo,
      descricao,
      mostrarResultado: true,
      idade,
      sexo,
    })
  }

  return (
    <div className="calculadora-imc">
      <Header />
      <FormularioIMC onCalcular={calcularIMC} />
      <ResultadoIMC resultado={resultado} />
      <ClassificacaoIMC resultado={resultado} />
    </div>
  )
}