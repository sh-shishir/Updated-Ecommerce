 document.getElementById('date').innerHTML = new Date().toLocaleDateString();
        setInterval(() =>
             document.getElementById('time').innerHTML = new Date().toLocaleTimeString());
