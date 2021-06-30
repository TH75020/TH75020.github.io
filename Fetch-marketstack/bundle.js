(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

    const getChartUsers = async function (){
        try { 
    const $Url = 'http://api.marketstack.com/v1/eod?access_key=0870e752553e00b69d42a6a1e5f4a207&symbols=AAPL'     
    let response = await fetch($Url)
          if(response !== 200 || response !== 201) {  
         let data3 = await response.json()
         
      const ficheData = document.getElementById('myChart')
      let TabOpen = []
      let TabClose = []
      let TabVolume = []
       data3.data.forEach((element => {
        let open =`${element.open}`
        let close = `${element.close}`
        let volume = `${element.volume}`
        const dataChart1 = TabOpen.push(open)
        const dataChart2 = TabClose.push(close)
        TabVolume.push(volume)
    
    })); 
    console.log(data3.data)
    
    const config = {
      type: 'bar',
      data: data3,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      },
    };
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: TabVolume,
            datasets: [{
                label: 'open',
                data: TabOpen,
                backgroundColor: 
                    'rgba(255, 99, 132, 0.2)',
                borderColor: 
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1},
                {label: 'close',
                data: TabClose,
                backgroundColor: 
                    'rgba(75, 192, 192, 0.2)',
                borderColor: 
                    'rgb(54, 162, 235)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    const config2 = {
      type: 'radar',
      data: TabVolume,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Radar Chart'
          }
        }
      },
    };
    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
      type :'radar',
       data : {
        labels: TabVolume,
        datasets: [{
          label: 'open',
          data: TabOpen,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {label: 'close',
        data: TabClose,
        backgroundColor: 
            'rgba(75, 192, 192, 0.2)',
        borderColor: 
            'rgb(54, 162, 235)',
        borderWidth: 1
    }
      ]
      }
    }).setTimeout(function(){document.getElementById("myError").textContent = "Erreur sur l'API"},10000)
         }else {
             console.error('Retour du serveur :', response.status);       
     }
     }catch(e){
         console.log(e)
     }
     }
     getChartUsers()
    
     
    },{}]},{},[1]);
    