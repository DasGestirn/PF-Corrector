'use strict';

//IMPORTAÇÃO DE CLASSES E FUNÇÕES DOS MÓDULOS

import { Motor } from "./motor.js";
import { Z } from "./z.js";
import { InsertCorrectedData, InsertOriginalData } from "./data.js";
import { insertGraph } from "./graphs.js";

//INICIALIZAÇÃO DO MOTOR

let motorApp
let motorTeste
let hasRun = false

//ELEMENTOS DO SITE PARA VALIDAÇÃO DO FORMULÁRIO E PROCESSAMENTO DOS DADOS

const form = document.getElementById('app-form');
const menu = document.getElementById('menu');
const dataArea = document.getElementById('data_area');
const graphArea = document.getElementById('graph_area');
const ligInput = document.getElementById('ligacao');
const vInput = document.getElementById('tensao_de_linha');
const fInput = document.getElementById('frequencia');
const polosInput = document.getElementById('polos');
const nrInput = document.getElementById('rotacao');
const r1Input = document.getElementById('r1');
const r2Input = document.getElementById('r2');
const x1Input = document.getElementById('x1');
const x2Input = document.getElementById('x2');
const rcInput = document.getElementById('rc');
const xmInput = document.getElementById('xm');
const fpNovoInput = document.getElementById('fp_novo');

//VALIDAÇÃO DO FORMULÁRIO E AQUISIÇÃO DE DADOS

form.addEventListener('submit', function (e) {

  e.preventDefault();

  //AQUISIÇÃO DOS VALORES NUMÉRICOS DOS INPUTS DO USUÁRIO

  //lig será "true" caso a ligação seja feita em estrela (y) e "false" se estiver em delta (Δ)

  const lig = Boolean(Number(ligInput.value));
  const vl = Number(vInput.value);
  const f = Number(fInput.value);
  const polos = Number(polosInput.value);
  const nr = Number(nrInput.value);
  const fpNovo = Number(fpNovoInput.value);
  const r1 = Number(r1Input.value);
  const r2 = Number(r2Input.value);
  const x1 = Number(x1Input.value);
  const x2 = Number(x2Input.value);
  const rc = Number(rcInput.value);
  const xm = Number(xmInput.value);

  //DETERMINAÇÃO DAS IMPEDÂNCIAS Z1 E Z2 ATRAVÉS DA CLASSE Z

  const z1 = new Z(r1, x1)
  const z2 = new Z(r2, x2);
  const zXm = new Z(0, xm);
  const zRc = new Z(rc, 0);

  //MONTAGEM DO MOTOR DIGITAL

  motorTeste = new Motor(lig, vl, f, polos, nr, fpNovo, z1, z2, zXm, zRc);

  if (motorTeste.fpNovo < motorTeste.fp.toFixed(2)) {

    window.alert(`Fator de potência desejado é menor que o da máquina (${motorTeste.fp.toFixed(2)})!`);

    return
  };

  motorApp = new Motor(lig, vl, f, polos, nr, fpNovo, z1, z2, zXm, zRc);

  hasRun = true;

  graphArea.classList.add('hidden');
  dataArea.replaceChildren();
  dataArea.classList.remove('hidden');
  InsertOriginalData(dataArea, motorApp);

});

menu.addEventListener('click', function (e) {

  if (hasRun === false) return

  if (e.target.classList.contains('menu_items')) {

    if (e.target.classList.contains('dados-btn')) {

      graphArea.classList.add('hidden');
      dataArea.replaceChildren();
      dataArea.classList.remove('hidden');

      e.target.classList.contains('dados-originais') ? InsertOriginalData(dataArea, motorApp) : InsertCorrectedData(dataArea, motorApp);

    } else if (e.target.classList.contains('chart-btn')) {

      dataArea.classList.add('hidden');
      graphArea.classList.remove('hidden');

      insertGraph(graphArea, motorApp, e.target.classList.contains('chart-ic'));

    }
  }

});