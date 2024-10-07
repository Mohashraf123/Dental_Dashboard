var ctx = document.getElementById('mychart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Maxillo-Facial surgery', 'Fixed prosthodontics', 'Removable prosthodontics', 'Operative', 'Endodontic'],
        datasets: [{
            label: '# of Votes',
            data: [30, 40, 10, 20, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
    }
});

var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Maxillo-Facial surgery', 'Fixed prosthodontics', 'Removable prosthodontics', 'Operative', 'Endodontic'],
        datasets: [{
            label: 'number of pateints',
            data: [30, 40, 10, 20, 15],
            backgroundColor: [
                'rgba(255, 99, 132,1)',
                'rgba(54, 162, 235,1)',
                'rgba(255, 206, 86,1)',
                'rgba(75, 192, 192,1)',
                'rgba(153, 102, 255,1)',
                'rgba(255, 159, 64,1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
    }
});