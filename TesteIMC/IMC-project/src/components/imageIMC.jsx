export default function SilhuetaIMC({ imc, classificacao, idade, sexo }) {
    const getImagemSilhueta = () => {
        const imcNum = Number.parseFloat(imc)
        if (idade === "crianca") {
            switch (true) {
                case imcNum < 18.5:
                    return sexo === "menino" ? "/imagens/Imagem1.jpg" : "/imagens/imagem7.jpg";
                case imcNum >= 18.6 && imcNum <= 24.9:
                    return sexo === "menino" ? "/imagens/imagem2.jpg" : "/imagens/imagem8.jpg";
                case imcNum >= 25 && imcNum <= 29.9:
                    return sexo === "menino" ? "/imagens/imagem3.jpg" : "/imagens/imagem9.jpg";
                case imcNum >= 30.0 && imcNum <= 34.9:
                    return sexo === "menino" ? "/imagens/imagem4.jpg" : "/imagens/imagem10.jpg";
                case imcNum >= 35 && imcNum <= 39.9:
                    return sexo === "menino" ? "/imagens/imagem5.jpg" : "/imagens/imagem11.jpg";
                default:
                    return sexo === "menino" ? "/imagens/imagem6.jpg" : "/imagens/imagem12.jpg";
            }
        } else {
            switch (true) {
                case imcNum < 18.5:
                    return sexo === "homem" ? "/imagens/Imagem1.jpg": "/imagens/imagem7.jpg";
                case imcNum >= 18.6 && imcNum <= 24.9:
                    return sexo === "homem" ? "/imagens/imagem2.jpg" : "/imagens/imagem8.jpg";
                case imcNum >= 25 && imcNum <= 29.9:
                    return sexo === "homem" ? "/imagens/imagem3.jpg" : "/imagens/imagem9.jpg";
                case imcNum >= 30.0 && imcNum <= 34.9:
                    return sexo === "homem" ? "/imagens/imagem4.jpg" : "/imagens/imagem10.jpg";
                case imcNum >= 35 && imcNum <= 39.9:
                    return sexo === "homem" ? "/imagens/imagem5.jpg" : "/imagens/imagem11.jpg";
                default:
                    return sexo === "homem" ? "/imagens/imagem6.jpg" : "/imagens/imagem12.jpg";
            }
        }
    }

    const faixasIMC = [
    { limite: 18.5, texto: "Abaixo de 18,5" },
    { limite: 24.9, texto: "Entre 18,6 e 24,9" },
    { limite: 29.9, texto: "Entre 25,0 e 29,9" },
    { limite: 34.9, texto: "Entre 30,0 e 34,9" },
    { limite: 39.9, texto: "Entre 35,0 e 39,9" }
];

    const getFaixaIMC = () => {
        const imcNum = parseFloat(imc);
        const faixa = faixasIMC.find(f => imcNum <= f.limite);
        return faixa ? faixa.texto : "Acima de 40,0";
};


    const getDescricao = () => {
        const imcNum = Number.parseFloat(imc)

        if (idade === "crianca") {
            switch (true) {
                case imcNum < 18.5:
                    return "É importante consultar um pediatra para avaliar o desenvolvimento da criança e orientar sobre alimentação adequada.";
                case imcNum >= 18.6 && imcNum <= 24.9:
                    return "Parabéns! A criança está com peso adequado para a idade. Continue incentivando hábitos saudáveis.";
                case imcNum >= 25 && imcNum <= 29.9:
                    return "Atenção ao peso da criança. Consulte um pediatra para orientações sobre alimentação e atividades físicas.";
                case imcNum >= 30.0 && imcNum <= 34.9:
                    return "É importante buscar acompanhamento médico especializado para cuidar da saúde da criança.";
                case imcNum >= 35 && imcNum <= 39.9:
                    return "Procure urgentemente um pediatra para acompanhamento e orientação adequada.";
                default:
                    return "É fundamental buscar acompanhamento médico imediato para cuidar da saúde da criança.";
            }
        } else {
            switch (true) {
                case imcNum < 18.5:
                    return "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. É preciso avaliar.";
                case imcNum >= 18.6 && imcNum <= 24.9:
                    return "Que bom que você está com o peso normal! É o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.";
                case imcNum >= 25 && imcNum <= 29.9:
                    return "Fique atento à alimentação e pratique atividades físicas regularmente para manter a saúde.";
                case imcNum >= 30.0 && imcNum <= 34.9:
                    return "É importante buscar orientação médica para evitar complicações e melhorar a qualidade de vida.";
                case imcNum >= 35 && imcNum <= 39.9:
                    return "Redobre os cuidados com a alimentação e a saúde. Consulte um especialista para orientação adequada.";
                default:
                    return "Procure um profissional de saúde para um acompanhamento adequado e personalizado.";
            }
        }
    }

    if (!imc) return null

    return (
        <div className="silhueta-container">
            <div className="silhueta-visual">
                <img
                    src={getImagemSilhueta()}
                    
                />
            </div>
            <div >
                <p>{getFaixaIMC()}</p>
                <h3>{classificacao}</h3>
                <p>{getDescricao()}</p>
            </div>
        </div>
    )
}