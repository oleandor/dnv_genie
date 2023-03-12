        $(document).ready(function() {
          

            // Initialise Plugin
            var options1 = {
                additionalFilterTriggers: [$('#onlyanalysis'), $('#onlycapacity'),$('#onlycompartments'), 
					$('#onlyenvironment'), $('#onlyexchange'), $('#onlyguidinggeometry'),$('#onlyloads'),
					$('#onlyproperties'), $('#onlyreports'), $('#onlysets'), $('#onlystructure'),
					$('#onlyunits'), $('#onlyother'), $('#quickfind')],
                clearFiltersControls: [$('#cleanfilters')],
                matchingRow: function(state, tr, textTokens) {					
                    if (!state || !state.id) { return true; }
					var child = tr.children('td:eq(0)');
					if (!child) return true;
					var val =  child.text();					
					switch (state.id) {
						case 'onlyanalysis': return state.value !== true || val === 'Analysis';
						case 'onlycapacity': return state.value !== true || val === 'Capacity Checks';
						case 'onlycompartments': return state.value !== true || val === 'Compartments';
						case 'onlyenvironment': return state.value !== true || val === 'Environment';
						case 'onlyexchange': return state.value !== true || val === 'Exchange';
						case 'onlyguidinggeometry': return state.value !== true || val === 'Guiding Geometry';
						case 'onlyloads': return state.value !== true || val === 'Loads';
						case 'onlyproperties': return state.value !== true || val === 'Properties';
						case 'onlyreports': return state.value !== true || val === 'Reports';
						case 'onlysets': return state.value !== true || val === 'Sets';
						case 'onlystructure': return state.value !== true || val === 'Structure';
						case 'onlyunits': return state.value !== true || val === 'Units';
						case 'onlyother': return state.value !== true || val === 'Other';
						default: return true;
					}
                }
            };

            $('#demotable1').tableFilter(options1);
			
			var grid2 = $('#demotable2');
			var options2 = {                
                filteringRows: function(filterStates) {										
					grid2.addClass('filtering');
                },
				filteredRows: function(filterStates) {      															
					grid2.removeClass('filtering');					
					setRowCountOnGrid2();
                }
            };			
			function setRowCountOnGrid2() {
				var rowcount = grid2.find('tbody tr:not(:hidden)').length;
				$('#rowcount').text('(Rows ' + rowcount + ')');										
			}
			
			grid2.tableFilter(options2); // No additional filters			
			setRowCountOnGrid2();
        });