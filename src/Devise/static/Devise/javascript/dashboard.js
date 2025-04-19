//Je n'ai pas pu gérer les cas par le fichier static car je n'avais pas la capacité de récupérer des éléments générés par des boucles depuis le template dans mon fichier static. A revoir pour la postérité.

var ctx = document.getElementById("chart");

new Chart(ctx, {
        type: 'line',
        data: {
            labels: days_labels,
            datasets: [{
                    label: currency,
                    data: rates,
                    fill: false,
                    tension: 1,
                    borderColor: 'rgb(255, 128, 128)'
                }]
            }
        });