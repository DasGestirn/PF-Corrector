import Chart from 'chart.js/auto'

let currentChart = null

export function insertGraph(el, motor, isIC) {

    if (currentChart) {
        currentChart.destroy();
    }

    const data = isIC ? ([
        { variable: 'Corrente Original', value: motor.iModulo.toFixed(2) },
        { variable: 'Corrente Corrigida', value: motor.iNovaMod.toFixed(2) }
    ]) : ([
        { variable: 'Potência A. Original', value: (motor.sModulo / 1000).toFixed(2) },
        { variable: 'Potência A. Corrigida', value: (motor.sNovoMod / 1000).toFixed(2) }
    ])


    currentChart = new Chart(

        el, {
        type: 'bar',
        data: {
            labels: data.map(row => row.variable),
            datasets: [
                {
                    label: isIC ? ('Valor da corrente em A') : ('Valor da potência aparente em kVA'),
                    data: data.map(row => row.value),
                    backgroundColor: isIC ? ([
                        'rgba(228, 0, 0, 0.6)',
                        'rgba(255, 205, 86, 0.6)'
                    ]) : ([
                        'rgba(0, 192, 0, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                    ]),
                    borderColor: isIC ? ([
                        'rgba(228, 0, 0, 1)',
                        'rgba(255, 205, 86, 1)'
                    ]) : ([
                        'rgba(0, 192, 0, 1)',
                        'rgba(54, 162, 235, 1)',
                    ])
                }
            ]
        },
        options: {
            responsive: true,
        }
    }

    )

};