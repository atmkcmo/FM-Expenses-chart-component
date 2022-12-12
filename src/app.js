const chartData = [
	{ day: "mon", amount: 17.45 },
	{ day: "tue", amount: 34.91 },
	{ day: "wed", amount: 52.36 },
	{ day: "thu", amount: 31.07 },
	{ day: "fri", amount: 23.39 },
	{ day: "sat", amount: 43.28 },
	{ day: "sun", amount: 25.48 },
];

const chartWrapper = document.querySelector(".card-chart");
const date = new Date();
const day = date.getDay();

chartData.forEach(function (set, i) {
	
    // main bar chart
	const barChart = document.createElement("div");
	barChart.classList.add("chart-bar");
	barChart.title = `${set.amount}`;
	

	// bar chart name
	const barChartName = document.createElement("div");
	barChartName.classList.add("chart-name");
	barChartName.innerHTML = `${set.day}`;

	// bar chart name
	const barChartToolTip = document.createElement("div");
	barChartToolTip.classList.add("chart-tooltip");
	barChartToolTip.innerHTML = `$${set.amount}`;

	barChart.appendChild(barChartName);
	barChart.appendChild(barChartToolTip);

	if (i + 1 == day) {
		barChart.classList.add("chart-bar--active");
	}
	
	barChart.style.height = `${set.amount * 3}px`;

	chartWrapper.appendChild(barChart);
	
	barChart.addEventListener("mouseover", function handleMouseOver(e) {
		const a = barChart.querySelector('.chart-tooltip');
		a.classList.add("chart-tooltip--visable");
        setTimeout( function(){
            a.classList.add("chart-tooltip--open");
        }, 20);
	});

	barChart.addEventListener("mouseout", function handleMouseOver(e) {
		const a = barChart.querySelector('.chart-tooltip');
        a.classList.remove("chart-tooltip--visable");
        setTimeout( function(){
            a.classList.remove("chart-tooltip--open");
        }, 20);
	});

});

var barChartToolTipEl = document.querySelector(".chart-tooltip");
var chartBar = document.querySelector(".chart-bar");

