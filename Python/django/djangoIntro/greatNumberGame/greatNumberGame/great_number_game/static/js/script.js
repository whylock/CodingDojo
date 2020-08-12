console.log('connected')
var textarea = document.getElementById("log");
setInterval(function(){textarea.value('Earned ' + {{ request.session.['gold'] }} + "from the farm"), 1000)}
