var randomPic = 1;
var removalHelp = 0;
var src;

var users = [];
// var images = [];
var arrayLength = 1;
var arrayPresent = 0;



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

        console.log(arrayPresent)
        // users.push(addUserDetails)
        // console.log(users[0].email);
        
        for (let i=0; i < arrayLength; i++){
            // console.log(users[i].email);
            console.log(arrayLength);
            if (arrayPresent === 0 || emailAddress !== users[i].email){
                users.push(addUserDetails); // creates the users account
                console.log('does not match any in database')
                arrayLength = users.length
                console.log(users)
                arrayPresent = 1
                console.log(arrayPresent)
                return arrayPresent
            }else if(users[i].email === emailAddress){
                users[i].images.push(document.getElementById('image').src) //pushes src to image to create a new image
                console.log('matches an email address')
                console.log(users)
                arrayLength = users.length
                console.log(arrayPresent)
                return arrayLength
                break;
            } 
            
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