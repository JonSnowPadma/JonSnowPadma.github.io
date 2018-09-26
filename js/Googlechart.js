google.charts.load('current', {packages: ['corechart', 'bar']});
function change()
 {
    var listbox = document.getElementById("chart");
    var selIndex = listbox.selectedIndex;
    var selValue = listbox.options[selIndex].value;
    var selText = listbox.options[selIndex].text;
    console.log(selValue);
	google.charts.setOnLoadCallback(drawGID);
	
	//*****************Google chart drawer****************
	function drawGID()
	{
		if (selValue == 'All Countries')
			{
				var status = "https://spreadsheets.google.com/tq?key=1aNaanZtuiLRPfobuLDb8bvxsEcNyzC114PW70GW8nwk&sheet=Status";
				var priority = "https://spreadsheets.google.com/tq?key=1aNaanZtuiLRPfobuLDb8bvxsEcNyzC114PW70GW8nwk&sheet=Priority";
				var sp="https://spreadsheets.google.com/tq?key=1aNaanZtuiLRPfobuLDb8bvxsEcNyzC114PW70GW8nwk&sheet=SP";
				var psp="https://spreadsheets.google.com/tq?key=1aNaanZtuiLRPfobuLDb8bvxsEcNyzC114PW70GW8nwk&sheet=PSP";
			}
		
		var query = new google.visualization.Query(status);
		query.setQuery('SELECT A,B,C');
		query.send(statusBar);
				
		var query1 = new google.visualization.Query(priority);
		query1.setQuery('SELECT A,B,C ');
		query1.send(priorityBar);
				
		var query2 = new google.visualization.Query(sp);
		query2.setQuery('SELECT A,B');
		query2.send(overallPie);
				
		var query3 = new google.visualization.Query(psp);
		query3.setQuery('SELECT A,B');
		query3.send(prodaptPie);
	}
	
	
	
	//*********Chart designs********
	
	//Defect count based on Status - BAR chart
	function statusBar(response) 
	{
		if (response.isError()) 
			{
				alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
				return;
			}
		var data = response.getDataTable();
		var materialOptions = 
			{
				chart: 
				{
					title: 'Defect count based on Status',
					subtitle: 'Sprint - 173', 
				},
				hAxis: 
				{	
					title: 'Status',
					minValue: 0,
				},
				vAxis: 
				{
					title: 'Defect'	,
						
				},
				backgroundColor: 
				{ 
					fill:'transparent' 
				},
					
			};
		var materialChart = new google.charts.Bar(document.getElementById('Status_Chart'));
		materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
	}
		
	//Defect count based on Priority - BAR chart
	function priorityBar(response) 
	{
		if (response.isError()) 
			{
				alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
				return;
			}
		var data = response.getDataTable();
		var materialOptions = 
			{
				chart: 
					{
						title: 'Defect count based on Priority',
						subtitle: 'Sprint - 173', 
						
					},
		
				hAxis: 
					{
						title: 'Priority',
						minValue: 0,
						
					},
				vAxis: 
					{
						title: 'Defect'	,
					},
	
					backgroundColor:
					{ 
					fill:'transparent',
					//stroke: '#00001a',
					//strokeWidth: 2					
					},

			};
		var materialChart = new google.charts.Bar(document.getElementById('Priority_chart'));
		materialChart.draw(data,  google.charts.Bar.convertOptions(materialOptions));
  
	}
	
	//ToDo/Reopened VS Priority - overall-PIECHART
		
	function overallPie(response) 
		{
			if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
			var data = response.getDataTable();
			var options = 
				{
					title: 'ToDo/Reopened VS Priority - overall',
					//is3D: true,
					backgroundColor: 
					{
						fill:'transparent',
					},
					//legendTextStyle: { color: '#FFF' },
					//titleTextStyle: { color: '#FFF' },
				}

			var chart = new google.visualization.PieChart(document.getElementById('AllPie_Chart'));
			chart.draw(data, options);
  
		}
	 
		//ToDo/Reopened VS Priority - Podapt - PIECHART
		function prodaptPie(response) 
		{
			if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
			var data = response.getDataTable();
			var options = 
				{
					title: 'ToDo/Reopened VS Priority - Prodapt',
					//is3D: true,
					backgroundColor: { fill:'transparent' },
					//legendTextStyle: { color: '#FFF' },
					//titleTextStyle: { color: '#FFF' },

				}
			var chart = new google.visualization.PieChart(document.getElementById('ProdaptPie_Chart'));
			chart.draw(data, options);
  
		}
	 
	}