var ctx = document.getElementById("chart");
new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5],
            datasets: [{
                    label: 'CAD',
                    data: [25, 38, 75, 42, 26],
                    fill: false,
                    borderColor: 'rgb(255, 128, 128)'
                }]
            }
        });