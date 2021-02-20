var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat' ];
var mNames = ['Kwasi', 'Kwando', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var fNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


function getData(){
    event.preventDefault();
    var date = document.getElementById('date').value;
    let gender1 = document.getElementById('gender1').value;
    let gender2 = document.getElementById('gender2').value;

    //getdate and pick day
    let fdate = new Date(date).toDateString();
     var mdate = fdate.split(' ')[0];
    document.getElementById('result').innerHTML = mdate;

    if(mdate == days[0] && gender2){
        console.log(mNames[0]);
        // alert(mNames[0]);
    }else if (mdate == days[1] && gender2){
        console.log(mNames[1]);
    }else if (mdate == days[2] && gender2){
        console.log(mNames[2]);
    }else if (mdate == days[3] && gender2){
        console.log(mNames[3]);
    }else if (mdate == days[4] && gender2){
        console.log(mNames[4]);
    }else if (mdate == days[5] && gender2){
        console.log(mNames[5]);
    }else if (mdate == days[6] && gender2){
        console.log(mNames[6]);
    }else if (mdate == days[7] && gender2){
        console.log(mNames[7]);
    }



    if(mdate == days[0] && gender1){
        console.log(fNames[0]);
    }else if (mdate == days[1] && gender1){
        console.log(fNames[1]);
    }else if (mdate == days[2] && gender1){
        console.log(fNames[2]);
    }else if (mdate == days[3] && gender1){
        console.log(fNames[3]);
    }else if (mdate == days[4] && gender1){
        console.log(fNames[4]);
    }else if (mdate == days[5] && gender1){
        console.log(fNames[5]);
    }else if (mdate == days[6] && gender1){
        console.log(fNames[6]);
    }else if (mdate == days[7] && gender1){
        console.log(fNames[7]);
    }
}

