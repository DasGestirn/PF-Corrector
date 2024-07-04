'use strict';

//IMPORTAÇÃO DE CLASSES E FUNÇÕES DOS MÓDULOS

import { MotorSimple } from "./motorsimple.js";
import { InsertSimpleOriginalData, InsertSimpleCorrectedData } from "./data.js";
import { insertGraph } from "./graphs.js";

//INICIALIZAÇÃO DO MOTOR

let motorSimpleApp
let motorSimpleTeste
let hasRun = false

//ELEMENTOS DO SITE PARA VALIDAÇÃO DO FORMULÁRIO E PROCESSAMENTO DOS DADOS

const form = document.getElementById('app-form');
const menu = document.getElementById('menu');
const dataArea = document.getElementById('data_area');
const graphArea = document.getElementById('graph_area');
const vInput = document.getElementById('tensao_de_linha');
const sInput = document.getElementById('potencia_aparente');
const fInput = document.getElementById('frequencia');
const fpNovoInput = document.getElementById('fp_novo');
const fpMedInput = document.getElementById('fp_medido')

//VALIDAÇÃO DO FORMULÁRIO E AQUISIÇÃO DE DADOS

form.addEventListener('submit', function (e) {

    e.preventDefault();

    //AQUISIÇÃO DOS VALORES NUMÉRICOS DOS INPUTS DO USUÁRIO

    const vl = Number(vInput.value);
    const s = Number(sInput.value);
    const f = Number(fInput.value);
    const fpNovo = Number(fpNovoInput.value);
    const fpMed = Number(fpMedInput.value);

    //MONTAGEM DO MOTOR DIGITAL

    motorSimpleTeste = new MotorSimple(vl, s, f, fpNovo, fpMed);

    if (motorSimpleTeste.fpNovo < motorSimpleTeste.fpMed) {

        window.alert(`Fator de potência desejado é menor que o da máquina!`);

        return
    };

    motorSimpleApp = new MotorSimple(vl, s, f, fpNovo, fpMed);

    hasRun = true;

    graphArea.classList.add('hidden');
    dataArea.replaceChildren();
    dataArea.classList.remove('hidden');
    InsertSimpleOriginalData(dataArea, motorSimpleApp);
});

menu.addEventListener('click', function (e) {

    if (hasRun === false) return

    if (e.target.classList.contains('menu_items')) {

        if (e.target.classList.contains('dados-btn')) {

            graphArea.classList.add('hidden');
            dataArea.replaceChildren();
            dataArea.classList.remove('hidden');
            e.target.classList.contains('dados-originais') ? InsertSimpleOriginalData(dataArea, motorSimpleApp) : InsertSimpleCorrectedData(dataArea, motorSimpleApp);
        } else if (e.target.classList.contains('chart-btn')) {

            dataArea.classList.add('hidden');
            graphArea.classList.remove('hidden');

            insertGraph(graphArea, motorSimpleApp, e.target.classList.contains('chart-ic'));

        }
    }

});