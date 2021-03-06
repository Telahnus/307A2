
// handles the click event for link 1, sends the query
function getKey() {
  getRequest(
      'handshake.php', // URL for the PHP file
       drawOutput,  // handle successful request
       drawError    // handle error
  );
  return false;
}  
// handles drawing an error message
function drawError () {
    var container = document.getElementById('output');
    container.innerHTML = 'Bummer: there was an error!';
}
// handles the response, adds the html
function drawOutput(responseText) {
    var container = document.getElementById('output');
    container.innerHTML = responseText;
}
// helper function for cross-browser request object
function getRequest(url, success, error) {
    var req = false;
    req = new XMLHttpRequest();

    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req .readyState == 4){
            return req.status === 200 ? 
                success(req.responseText) : error(req.status)
            ;
        }
    }
    var myuser = document.getElementById('username').value;
    url+="?user="+myuser;
    req.open("GET", url, false);
    req.send(null);
    var key = req.responseText;
    //key = 50;
    if (key>0){
      cipher(key);
    }
    
    //var container = document.getElementById('output');
    //container.innerHTML = key;
}

function cipher(key){
    var container = document.getElementById('output');
    var user = document.getElementById('username').value;
    var pwd = document.getElementById('password').value;
    container.innerHTML = "RAWR I DID IT!! USER: "+user+" PWD: "+pwd+" KEY: "+key;

    
}