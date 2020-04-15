function ajax() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/alinetenorio');
    xhr.send(null);

    xhr.onreadystatechange = function() {
        //4: when the response is received
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.responseText));
        }
    }
}

//ajax();

var myPromise = function() {
    //resolve: function we use when response is successful
    //reject: function when is not successful
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/ainetenorio');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }else {
                    reject("Error in request");
                }
            }
        }
    });
}


// myPromise()
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.warn(error)
//     });

axios.get('https://api.github.com/users/alinetenorio')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error)
    });