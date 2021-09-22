var randomPic = 1;
var removalHelp = 0;
var src;

var users = [];
// var images = [];
var arrayLength = 1;



document.getElementById('btn').onclick = function() {
    var val = document.getElementById('imagesize').value,
    src = 'https://picsum.photos/' + val + '?random=' + randomPic,
    img = document.createElement('img');
    img.src = src;
    randomPic += 1;
    removalHelp ++
    if (removalHelp <=1){
        document.getElementById('image_container').innerHTML += '<img src="'+img.src+'" id = "image"/>';
        console.log('first stage complete')
    }
    else{
       document.getElementById('image').src = src;


        console.log("this is image " + removalHelp)
    }
    return src;
}

document.getElementById('savePhoto').onclick = function(e) {
    e.preventDefault();
    // let form = document.getElementById('savePhoto');
        let emailAddress = document.getElementById('email').value;

        let addUserDetails = {
            email: document.getElementById('email').value,
            images: [
                document.getElementById('image').src
            ]
        }

        // users.push(addUserDetails)
        // console.log(users[0].email);
        
        for (let i=0; i < arrayLength; i++){
            // console.log(users[i].email);
            console.log(arrayLength);
            if (arrayLength === 1 || emailAddress !== users[i].email){
                users.push(addUserDetails);
                console.log('does not match any in database')
                arrayLength = users.length
                console.log(users)
            }else{
                users[0].images.push(document.getElementById('image').src)
                console.log('matches an email address')
                console.log(users)
                arrayLength = users.length
            }  
            return arrayLength
        }

        // console.log(users[addUserDetails].email)
        // if (emailCheck === false){
        //     userImages.push(addUserDetails);
        //     console.log(emailCheck);
            
        // }else{
        //     alert("added additional images to array")
        //     users.push(document.getElementById('image').src);
        //     console.log(emailCheck);
        // }
        // document.forms[0].reset();
        // userImages.push(addUserDetails);
        // console.log(users);
        // console.log(emailAddress);
        return users;
        
}