$(window).on("load", function() {
    document.addEventListener("deviceready", onDeviceReady, false);
});

var Compare = {
        ID : null,
        GroupName : null,
        SubID : null
}

function onDeviceReady ()
{
    console.log(navigator.notification);
    console.log(navigator.camera);
}


function alertDismissed(){
    return false;
}


//<--------------------------------------- Function to verify leader username and password, if exists will redirect to leader view --------------------------------------->\\
function retrieveLeader(){
    
    var username    = $("#login_username").val();
    var password    = $("#login_password").val();
    
    var url         ="http://10.111.141.105/project/login.php?login_username="+ username +"&login_password="+ password;
    
    $.getJSON(url, function(data){ 
            
            $.each(data,function(index,data){
            
             if(data.valid == "1")
            {
                 $.getJSON("http://10.111.141.105/project/list.php",
                            function(data){ 
                                $.each(data,function(index,data){
                                   if (username == data.user_name){

                                       $('#welcome_leader').html(data.name);   
                                       redirectToLeader(); 
                                   }
                                });
                            });
                 
                 
                 //$('#welcome_leader').html(data.name);
                 //redirectToLeader(); 
                    
            }
             
             else
             {
                 navigator.notification.alert('Please enter valid Username and Password!', alertDismissed, 'Login', 'OK');
             }
           
            });
            //$("#usernameValid").val(username); $("#usernameValid").val(); --anas buat    
        });
}


//<------------------------------------------ Function to verify member username and password, if exists will redirect to member view ------------------------------------>\\

function retrieveMember(){
    
    var username    = $("#login_username").val();
    var password    = $("#login_password").val();
    
    var url         ="http://10.111.141.105/project/login.php?login_username="+ username +"&login_password="+ password;
    
    $.getJSON(url, function(data){ 
            
            $.each(data,function(index,data){
         
             if(data.valid == "1")
            {    
                 $.getJSON("http://10.111.141.105/project/list.php",
                        function(data){ 
                            $.each(data,function(index,data){
                               if (username == data.user_name){
                                   
                                   $('#welcome_member').html(data.name);
                                   redirectToMember(); 
                               }
                            });
                        });
             
                 
                 
                 //$('#welcome_member').html(data.name);
                 //redirectToMember();
            }
             
             else
             {
                 //alert("fail");   
                 navigator.notification.alert('Please enter valid Username and Password!', alertDismissed, 'Login', 'OK');
             }
           
            });           
           
        });
}

//<--------------------------------------------------------------------- Function for register new account -------------------------------------------------------------->\\

function newAcc(){
    
    var new_name        = $("#new_name").val();
    var new_username    = $("#new_username").val();
    var new_password    = $("#new_password").val();
    
    
    
    if( new_name == '' || new_username == '' || new_password == '')
    {   
        navigator.notification.alert("Please recite Bismillah before fill in the form ", alertDismissed,'New Record', 'OK');
    }
    
    else
    {   
        var url         ="http://10.111.141.105/project/validate.php?new_username="+ new_username;
        
        $.getJSON(url, function(data){ 
                
                $.each(data,function(index,data){
             
                 if(data.valid != "1")
                {
                     var acc = $('#newAccount').serialize();
                        acc = acc.replace (/\+/g, '%20');
                        console.log(acc);
                        $.get("http://10.111.141.105/project/newAcc.php", acc,

                                function data() {
                                    $(".result").html(data);
                                    navigator.notification.alert('Your account has been created!', alertDismissed, 'Record', 'OK');
                                    
                                    $("#newAccount")[0].reset();
                                    redirectToLogin();   
                     
                        });
                    
                }
                 
                 else
                 {
                     navigator.notification.alert('The username already exists!', alertDismissed, 'Record', 'OK');
                     $("#newAccount")[0].reset();
                 }
               
                });           
               
            });
        
    }
}

//<--------------------------------------------------------- Function to Store New Project ------------------------------------------------------------------------------->\\

function storeNewProject(){
    var postData = $('#new_project').serialize();
    postData = postData.replace (/\+/g, '%20');
    console.log(postData);
    $.get("http://10.111.140.5/project/insertgroup.php", postData,

        function data() {
            $(".result").html(data);
         
            console.log("Success");
            $("#new_project")[0].reset();
            redirectToLeader();
        });
}

//<-------------------------------------------------------- Function to Retrieve Project Name ---------------------------------------------------------------------------->\\
function retrieveProjectName(){
    var username = $('#login_username').val();
    
    $('#listgroup').empty();
    $.getJSON("http://10.111.141.105/project/viewgroup.php",
        function(data){ 
            $.each(data,function(index,data){
              $('#listgroup').append('<li><a href="#details" data-id="'+data.ID+'">(ID : ' + data.ID + ') <h4>'+data.Subject+'</h4></li>');
            });
            $('#listgroup').listview('refresh');
        });
}

//<-------------------------------------------------------- Function to Display Project Details -------------------------------------------------------------------------->\\

function displayProjectDetails(){
    $('#list').empty();
    $.getJSON('http://10.111.141.105/project/viewgroup.php', function (data) {
        $.each(data, function(index, data){
            if (data.ID == Compare.ID) {
                $('#list').append('<li><h5>'+data.ID+'</h5></li>');
                $('#list').append('<li><h5>'+data.Subject+'</h5></li>');
                $('#list').append('<li>groupName: '+data.GroupName+'</li>');
                //$('#list').append('<li>Leader: '+data.LeaderName+'</li>');
                $('#list').append('<li>LeaderMatric: '+data.LeaderMatric+'</li>');
                $('#list').append('<li>LeaderYear: '+data.LeaderYear+'</li>');
                //('#list').append('<li>Student1Name: '+data.Member1Name+'</li>');
                $('#list').append('<li>Student1Matric: '+data.Member1Matric+'</li>');
                $('#list').append('<li>Student1Year: '+data.Member1Year+'</li>');
                //$('#list').append('<li>Student2Name: '+data.Member2Name+'</li>');
                $('#list').append('<li>Student2Matric: '+data.Member2Matric+'</li>');
                $('#list').append('<li>Student2Year: '+data.Member2Year+'</li>');
                //$('#list').append('<li>Student3Name: '+data.Member3Name+'</li>');
                $('#list').append('<li>Student3Matric: '+data.Member3Matric+'</li>');
                $('#list').append('<li>Student3Year: '+data.Member3Year+'</li>');
                //$('#list').append('<li>Student4Name: '+data.Member4Name+'</li>');
                $('#list').append('<li>Student4Matric: '+data.Member4Matric+'</li>');
                $('#list').append('<li>Student4Year: '+data.Member4Year+'</li>');
                $('#list').append('<li>Tasks: '+data.Task+'</li>');
            }
        });
        $('#list').listview('refresh');
        $('#ID').attr('value',Compare.ID);
    });
}

//<---------------------------------------------------------------  Function to Store Student Rating --------------------------------------------------------------------->\\

function storeRating(){
    var postData = $('#newrating').serialize();
    postData = postData.replace (/\+/g, '%20');
    console.log(postData);
    console.log("Thanks for the rating");
    $.get("http://10.111.141.105/project/insertrating.php", postData,
             
        function data() {
            $(".result").html(data);
            navigator.notification.alert("Thanks for Rating !", alertDismissed, 'Rating', 'OK');
            $("#newrating")[0].reset();
        });
}

//<---------------------------------------------------------------- Function to Retrieve Rating -------------------------------------------------------------------------->\\

function retrieveRating(){
    $('#listrating').empty();
    $.getJSON("http://10.111.141.105/project/viewrating.php",
        function(data){ 
            $.each(data,function(index,data){
              $('#listrating').append('<li><a href="#viewrate" data-id="'+data.username+'"><h4></li>');
            });
            $('#listrating').listview('refresh');
        });
}

//<---------------------------------------------------------------- Function to Display Rating --------------------------------------------------------------------------->\\

function displayRating(){
    $('#createlist').empty();
    $.getJSON('http://10.111.141.105/project/viewrating.php', function (data) {
        $.each(data, function(index, data){
            if (data.ID == Compare.SubID) {
                $('#createlist').append('<li><h5>(ID => ' +data.SubID+ ') [ ' +data.Subject+' ]</h5></li>');            
                //$('#createlist').append('<li> <h7>Subject: '+data.Subject+'</h7></li>');
                $('#createlist').append('<li> Matric Number: '+data.username+'</li>');
                $('#createlist').append('<li> Rating:'+data.rating+'</li>');
                //$('#createlist').append('<li> Rating:'+data.Mem2Rate+'</li>');
                //$('#createlist').append('<li> Name:'+data.Mem3Name+'</li>');
                //$('#createlist').append('<li> Rating:'+data.Mem3Rate+'</li>');
                //$('#createlist').append('<li> Name:'+data.Mem4Name+'</li>');
                //$('#createlist').append('<li> Rating:'+data.Mem4Rate+'</li>');
                          }
        });
        $('#createlist').listview('refresh');
        $('#SubID').attr('value',Compare.SubID);
    });
}



//<--------------------------------------------------------------------- Redirect to Login ------------------------------------------------------------------------------->\\

function redirectToLogin(){
    $.mobile.changePage("#log_in", {transition: "slide", changeHash: false, reloadPage: false});
    
}


//<--------------------------------------------------------------------- Redirect to team Leader view -------------------------------------------------------------------->\\

function redirectToLeader()
{    
        $("#login_form")[0].reset();
        $.mobile.changePage("#leader_page", {transition: "slide", changeHash: false, reloadPage: false});    
}

//<--------------------------------------------------------------------- Redirect to team members view ------------------------------------------------------------------->\\

function redirectToMember()
{
       $("#login_form")[0].reset();
       $.mobile.changePage("#member_page", {transition: "slide", changeHash: false, reloadPage: false});        
}

//<--------------------------------------------------------------------- Login button for leader ------------------------------------------------------------------------->\\

$("#log_leader").click(function(){
    retrieveLeader();
    return false;
});

//<--------------------------------------------------------------------- Login button for team members ------------------------------------------------------------------->\\

$("#log_member").click(function(){
    retrieveMember();
    return false;
});

//<-------------------------------------------------------------------- Submit new account form to database -------------------------------------------------------------->\\

$('#newAccount').submit(function(){
    newAcc();
    return false;
});

//<--------------------------------------------------------------------- Cancel to create account ------------------------------------------------------------------------>\\

$('#cancel').click(function(){
    redirectToLogin();
});

//<------------------------------------------------------------------------ New record button ---------------------------------------------------------------------------->\\

$('#new_project').submit(function(){
    storeNewProject();
    return false;
});


//<------------------------------------------------------------------------- Home button --------------------------------------------------------------------------------->\\

$(document).on('click', '#leader_page', function(){
    retrieveProjectName();
});


//<------------------------------------------------------------- Vertical click from the main listview ------------------------------------------------------------------->\\

$(document).on('vclick', '#listgroup li a', function(){
    Compare.ID = $(this).attr('data-id');
    $.mobile.changePage("#subject_details", { transition: "slide", changeHash:false });
});

//<--------------------------------------------------------------------- Display the details ----------------------------------------------------------------------------->\\

$(document).on('pagebeforeshow', '#subject_details', function(){
    displayProjectDetails();
});

//< ------------------------------------------------------------------ On Submit of the Rating Form ---------------------------------------------------------------------->\\

$('#newrating').submit(function(){
    storeRating();
    return false;
});

//<----------------------------------------------------------------- Button for View Rating ------------------------------------------------------------------------------>\\

$(document).on('click', '#viewrate', function(){
    retrieveRating();
    
});

//<--------------------------------------------------------------- Button for Display Rating ----------------------------------------------------------------------------->\\

$(document).on('pagebeforeshow', '#viewrate', function(){
    displayRating();
});

//<----------------------------------------------------------------------List Rating ------------------------------------------------------------------------------------->\\
$(document).on('vclick', '#listrating li a', function(){
    Compare.SubID = $(this).attr('data-id');
    $.mobile.changePage("#viewrate", { transition: "slide", changeHash:false });
});

//<------------------------------------------------------------------- Meon ---------------------------------------------------------------------------------------------->\\

function getImage() {
    navigator.camera.getPicture(uploadPhoto, function(message) {
        navigator.notification.alert("Access Denied", alertDismissed, 'Error', 'OK');
    }, {
        quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
//<--------------------------------------------------------------------- Snap Photo ------------------------------------------------------------------------------------->\\
}
function snapAPhoto(){
navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
destinationType: Camera.DestinationType.FILE_URI});
}

//<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function onFail(){
alert('onError!' + message);
}

//<------------------------------------------------------------------------ Upload Photo --------------------------------------------------------------------------------->\\

function uploadPhoto(imageURI) {
       var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    console.log(options.fileName);
    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(imageURI, "http://10.111.141.105/project/upload.php", function(result){
        console.log(JSON.stringify(result));
        navigator.notification.alert("The image has been uploaded",alertDismissed,'Upload','Ok');
    }, function(error){
        console.log(JSON.stringify(error));
    }, options);
}

//<-------------------------------------------------------------------- Download File ----------------------------------------------------------------------------------->\\

function download(fileEntry, uri) {

var ft = new FileTransfer();
var fileURL = fileEntry.toURL("http://10.111.141.105/project/download.php");

ft.download(
    uri,
    fileURL,
    function (entry) {
        console.log("Successful download...");
        console.log("download complete: " + entry.toURL());
        readFile(entry);
    },
    function (error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("upload error code" + error.code);
    },
    null, // or, pass false
    {
        //headers: {
        //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        //}
    }
);
}

//<---------------------------------------------------------------- Upload Picture Button ------------------------------------------------------------------------------>\\

$(document).on('click', '#uploadPicture', function(){
getImage();
});
//<---------------------------------------------------------------- Snap Photo Button ---------------------------------------------------------------------------------->\\
$(document).on('click', '#snap-a-photo', function(){
snapAPhoto();
});

//<------------------------------------------------------------------ Download Photo Button ------------------------------------------------------------------------------>\\
$(document).on('click', '#download', function(){
download();
}); 