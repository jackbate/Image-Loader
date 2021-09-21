var randomPic = 1;
var removalHelp = 0;
var src;


var userImages = [];



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

document.getElementById('savePhoto').onclick = function() {
    let emailAddress = document.getElementById('email').value;

    let addUserDetails = {
        email: document.getElementById('email').value,
        savedImage: document.getElementById('image').src
    }
    let emailCheck = userImages.includes(document.getElementById('email').value)
    if (emailCheck == false){
        userImages.push(addUserDetails);
        console.log(emailCheck);
    }else{
        alert("added additional images to array")
        console.log(emailCheck);
    }
    // document.forms[0].reset();
    // userImages.push(addUserDetails);
    console.log(userImages);
}   