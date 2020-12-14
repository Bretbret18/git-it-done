var getUserRepos = function(facebook) {
 // format the github api url
 var apiUrl = "https://api.github.com/users/" + facebook + "/repos";

 // make a request to the url
 fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
       console.log(data);
    });
 });
};

console.log("outside");


getUserRepos("facebook");
