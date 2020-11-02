var storage = firebase.storage(); ///This variable is reference to storage
var db = firebase.firestore(); //This is reference to firestore


//This is new function which you need to write
//For convention keep the firebase prefix present in all functions dealing with fireabse db

function firebaseSaveMessage(messageData){
    
    //Creating a new document on the database and getting it's reference
    // var newDoc = db.collection('messages').doc();

    /*
    
    //This function will set the doc to the messageData passed
    doc.set(messageData).then(function(){
        
        console.log("This function is called when the data is finally saved!")
        //Here you can show a small popup message saying, message stored on back-end
    })

    */
   console.log("You can do it ! I know it :D All the Best")

   //The delete functionality will also follow a similar loop
   //Delete button -> control.js function called -> modifies something locally 
   //-> then calls some function in firebasedb.js
}






/*
These functions are from the old project I have kept them here for reference 


function getImageUrls(type) {
    db.collection("images").doc(type+"urls").get()
    .then(function(doc) {
        var imageArray = [];
        console.log(doc.data()['url']);
        doc.data()['url'].forEach(url => {
          if(url!="")
            imageArray.push(url);
        
        });
        console.log(imageArray);
        displayImages(imageArray,type);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
// getTextData("dates");
function getTextData(type) {
  var textData = [];
  db.collection(type).get()
  .then(querySnapshot => {
    querySnapshot.docs.forEach(doc => {
    textData.push(doc.data());
    console.log(doc.data());
    displayTextData(textData,type);
  });})
}
var saveData = (function () {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  return function (blob, fileName) {
      // var json = JSON.stringify(data),
          // blob = new Blob([json], {type: "octet/stream"}),
          url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
  };
}());


// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
//   $("#test").attr("src",url);
const proxyurl = "https://cors-anywhere.herokuapp.com/";
url = proxyurl + url;
    // var xhr = new XMLHttpRequest();
    //     xhr.responseType = 'blob';
    //     xhr.onload = function(event) {
    //       var blob = xhr.response;
    //       console.log(blob);
    //       console.log("Blob received");
    //       saveData(blob,"/1.png");
    //     };
    //     xhr.open('GET', url);
    //     xhr.send();
    //     // save
      
  urlArray.push(url);
  console.log(url);
}).catch(function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object-not-found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;


    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});

// window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

  // console.log('file system open: ' + fs.name);
  // getSampleFile(fs.root);
// 
// }, onErrorLoadFs) */
