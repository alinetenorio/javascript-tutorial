function checkAge(age) {
    return new Promise(function (resolve, reject) {
        setInterval( 
            () => {
                if(age >= 18){
                    resolve();
                }else{
                    reject();
                }
            }, 2000);
    });
}

// checkAge(13)
//     .then(function() {
//         console.log("Greater than or equal to 18");
//     })
//     .catch(function() {
//         console.log("Less than 18");
//     });

function getRepos() {
    var user = document.getElementsByTagName('input')[0].value;    
    var ul = document.createElement('ul');
    document.body.appendChild(ul);

    let config = {
        onUploadProgress: () => {
            var li = document.createElement('li');
            var name = document.createTextNode("Loading");
            
            li.appendChild(name);
            ul.appendChild(li);               
        }
      }

    axios.get('https://api.github.com/users/'+user+'/repos', config)
        .then( function(response) {
                                    
            for(var i=0;i<response.data.length;i++){
                var li = document.createElement('li');
                var name = document.createTextNode(response.data[i].name);
                
                li.appendChild(name);
                ul.appendChild(li);                
            }            
        })
        .catch(function(error){
            alert("Vixe"+error);
        });
    
}