import dataJSON from './data.json' assert {type: 'json'};

const maxHeight = 200;
let chartBartContainer = document.querySelector('.chart__bars-containers');
// let bar = document.querySelectorAll('.chart__bars-containers__bar');
let chartValue = [];
let maxChartValue;

dataJSON.forEach( element => {

	chartValue.push(element.amount);

	chartBartContainer.innerHTML +=  
		`<div class="chart__bars-containers__bar">
            <div class="chart__bars-containers__bar--label"> $${element.amount}  </div>
            <div class="chart__bars-containers__bar--day"> ${element.day} </div>
        </div>`  
});

maxChartValue = Math.max(...chartValue);

let bar = document.querySelectorAll('.chart__bars-containers__bar');
bar = [...bar];


bar.forEach( element => {
	
	let currExpense = parseFloat(element.childNodes[1].innerText.slice(2));
	
	let currHeightChart = (currExpense * maxHeight) / maxChartValue;
	// console.log(currHeightChart);
	element.style.height = `${currHeightChart}px`;

	if(maxHeight == currHeightChart){
        element.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }

	element.addEventListener('mouseover', event=>{
		// console.log(event.target.className);
		if(event.target.className == 'chart__bars-containers__bar'){
			let currChart = event.target.childNodes[1];
			currChart.style.display = "block";
		}
	});


	element.addEventListener('mouseout', event=>{
        if(event.target.className == 'chart__bars-containers__bar'){
            let currChart = event.target.childNodes[1];
            currChart.style.display = 'none'
        }
    });

});