 google.charts.load('current', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(drawGID); 
	function drawGID()
		{
				var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1aNaanZtuiLRPfobuLDb8bvxsEcNyzC114PW70GW8nwk&sheet=AT');
				query.setQuery('SELECT A,B,C ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1aNaanZtuiLRPfobuLDb8bvxsEcNyzC114PW70GW8nwk&sheet=ATP');
				query1.setQuery('SELECT A,B,C ');
				query1.send(handleQueryResponse2);
				var query2 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1aNaanZtuiLRPfobuLDb8bvxsEcNyzC114PW70GW8nwk&sheet=ATSP');
				query2.setQuery('SELECT A,B');
				query2.send(handleQueryResponse3);
				var query3 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1aNaanZtuiLRPfobuLDb8bvxsEcNyzC114PW70GW8nwk&sheet=ATPSP');
				query3.setQuery('SELECT A,B');
				query3.send(handleQueryResponse4);
			
		}				
function handleQueryResponse(response) 
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
						title : 'Count based on status',
						
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
					backgroundColor: { fill:'transparent' },
					
				};
				var materialChart = new google.charts.Bar(document.getElementById('Status_Chart'));
				materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  
		}
   
		
			function handleQueryResponse2(response) 
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
						title: 'Count based on priority',
						
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
		function handleQueryResponse3(response) 
		{
				if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = 
				{
					
					is3D: true,
					backgroundColor: {
					fill:'transparent',
					
					},
					//legendTextStyle: { color: '#FFF' },
					//titleTextStyle: { color: '#FFF' },
				}
			var chart = new google.visualization.PieChart(document.getElementById('AllPie_Chart'));
			chart.draw(data, options);
  
		}
	 
		
		function handleQueryResponse4(response) 
		{
				if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = 
				{
					
					is3D: true,
					backgroundColor: { fill:'transparent' },
	
					//legendTextStyle: { color: '#FFF' },
					//titleTextStyle: { color: '#FFF' },
				}
			var chart = new google.visualization.PieChart(document.getElementById('ProdaptPie_Chart'));
			chart.draw(data, options);
  
		}