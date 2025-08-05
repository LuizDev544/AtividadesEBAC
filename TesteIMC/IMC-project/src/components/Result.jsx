export default function ResultadoIMC({ resultado }) {
  return (
    <section id="resultado">
      <div className="resultado-container">
        <div className="resultado-imc">
          <h2>Resultado</h2>
          <p id="imcValue">{resultado.mostrarResultado ? resultado.imc : "Seu IMC será exibido aqui."}</p>
        </div>
      </div>
    </section>
  )
}