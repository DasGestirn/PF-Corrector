//FUNÇÕES GERADORAS DO DISPLAY DOS DADOS

export function InsertCorrectedData(el, motor) {
  const dataHTML = `
            <div class="dados dados-corrigidos" id="dados-corrigidos-motor">
              <b>CARACTERÍSTICAS ELÉTRICAS DO SISTEMA:</b>
              <br />
              <span>Módulo da impedância nova: <b> ${motor.zeqNovoMod.toFixed(2)}Ω</b></span>
              <span>Ângulo da impedância nova: <b> ${motor.zeqNovoAng.toFixed(2)}°</b></span>
              <span>Módulo da corrente nova: <b> ${motor.iNovaMod.toFixed(2)}A</b></span>
              <span>Ângulo da corrente nova: <b> ${motor.iNovaAng.toFixed(2)}°</b></span>
              <span>Módulo da potência aparente nova: <b> ${(motor.sNovoMod / 1000).toFixed(2)}kVA</b></span>
              <span>Ângulo da potência aparente nova: <b> ${motor.sNovoAng.toFixed(2)}°</b></span>
              <span>Potência reativa nova: <b> ${(motor.qNovo / 1000).toFixed(2)}kvar</b></span>
            </div>
            <div class="dados dados-corrigidos" id="dados-corrigidos-banco">
              <b>DIMENSIONAMENTO DO BANCO DE CAPACITORES:</b>
              <br />
              <span>Potência reativa do banco: <b> ${(motor.qCap / 1000).toFixed(2)}kvar</b></span>
              <span>Reatância capacitiva do banco: <b> ${motor.xCap.toFixed(2)}Ω</b></span>
              <span>Capacitância do banco: <b> ${(motor.cCap / 1e-6).toFixed(2)}μF</b></span>
            </div>
    `;

  el.insertAdjacentHTML('beforeend', dataHTML);
};

export function InsertOriginalData(el, motor) {

  const dataHTML = `
  <div class="dados dados-originais">
            <b>CARACTERÍSTICAS ELÉTRICAS DO MOTOR:</b>
            <br />
            <span>Escorregamento:<b> ${Math.trunc((motor.s * 100) * 100) / 100}%</b></span>
            <span>Módulo da impedância equivalente: <b>${motor.zeqMod.toFixed(2)}Ω</b></span>
            <span>Ângulo da impedância equivalente: <b>${motor.zeqAng.toFixed(2)}°</b></span>
            <span>Módulo da corrente: <b>${motor.iModulo.toFixed(2)}A</b></span>
            <span>Ângulo da corrente: <b>${motor.iAngulo.toFixed(2)}°</b></span>
            <span>Módulo da potência aparente: <b>${(motor.sModulo / 1000).toFixed(2)}kVA</b></span>
            <span>Ângulo da potência aparente: <b>${motor.sAngulo.toFixed(2)}°</b></span>
            <span>Potência ativa: <b>${(motor.p / 1000).toFixed(2)}kW</b></span>
            <span>Potência reativa: <b>${(motor.q / 1000).toFixed(2)}kvar</b></span>
            <span>Fator de potência: <b>${(motor.fp).toFixed(2)}</b></span>
          </div>
  `

  el.insertAdjacentHTML('beforeend', dataHTML);

}

//FUNÇÕES QUE GERAM OS DADOS PARA A CORREÇÃO SIMPLES

export function InsertSimpleOriginalData(el, motor) {
  const dataHTML = `
  <div class="dados dados-originais">
            <b>CARACTERÍSTICAS ELÉTRICAS DO SISTEMA:</b>
            <br />
            <span>Corrente: <b>${motor.iModulo.toFixed(2)}A</b></span>
            <span>Potência aparente: <b>${(motor.sModulo / 1000).toFixed(2)}kVA</b></span>
            <span>Potência ativa: <b>${(motor.p / 1000).toFixed(2)}kW</b></span>
            <span>Potência reativa: <b>${(motor.q / 1000).toFixed(2)}kvar</b></span>
          </div>
  `

  el.insertAdjacentHTML('beforeend', dataHTML);
}

export function InsertSimpleCorrectedData(el, motor) {
  const dataHTML = `
            <div class="dados dados-corrigidos" id="dados-corrigidos-motor">
              <b>NOVAS CARACTERÍSTICAS ELÉTRICAS DO SISTEMA:</b>
              <br />
              <span>Corrente nova: <b> ${motor.iNovaMod.toFixed(2)}A</b></span>
              <span>Potência aparente nova: <b> ${(motor.sNovoMod / 1000).toFixed(2)}kVA</b></span>
              <span>Potência reativa nova: <b> ${(motor.qNovo / 1000).toFixed(2)}kvar</b></span>
            </div>
            <div class="dados dados-corrigidos" id="dados-corrigidos-banco">
              <b>DIMENSIONAMENTO DO BANCO DE CAPACITORES:</b>
              <br />
              <span>Potência reativa do banco: <b> ${(motor.qCap / 1000).toFixed(2)}kvar</b></span>
              <span>Reatância capacitiva do banco: <b>-${motor.xCap.toFixed(2)}Ω</b></span>
              <span>Capacitância do banco: <b> ${(motor.cCap / 1e-6).toFixed(2)}μF</b></span>
            </div>
    `;

  el.insertAdjacentHTML('beforeend', dataHTML);
};