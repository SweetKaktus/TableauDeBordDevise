var ctx = document.getElementById("chart");

var days_labels = JSON.parse(document.getElementById("days-labels").textContent);
var data = JSON.parse(document.getElementById("chart-data").textContent);

new Chart(ctx, {
        type: 'line',
        data: {
            labels: days_labels,
            datasets: [{
                    label: 'CAD',
                    data: data,
                    fill: false,
                    borderColor: 'rgb(255, 128, 128)'
                }]
            }
        });