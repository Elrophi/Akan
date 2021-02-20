var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
var mNames = ['Kwasi', 'Kwando', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var fNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];



function getData(){
    event.preventDefault();
    var date = document.getElementById('date').value;
    var gender1 = document.getElementById('gender1').value;
    var gender2 = document.getElementById('gender2').value;

    //getdate and pick day
    let fdate = new Date(date).toDateString();
     var mdate = fdate.split(' ')[0];
    document.getElementById('result').innerHTML = mdate;


    if(mdate == days[0] && gender2){
        console.log(mNames[0]);
         var name = mNames[0];
         document.getElementById("result1").innerHTML= name;
    }else if (mdate == days[1] && gender2){
        console.log(mNames[1]);
        var name1 = mNames[1];
         document.getElementById("result1").innerHTML= name1;
    }else if (mdate == days[2] && gender2){
        console.log(mNames[2]);
        var name2 = mNames[2];
        document.getElementById("result1").innerHTML=name2;
    }else if (mdate == days[3] && gender2){
        console.log(mNames[3]);
        var name3 = mNames[3];
        document.getElementById('result1').innerHTML=name3;
    }else if (mdate == days[4] && gender2){
        console.log(mNames[4]);
        var name4 =mNames[4];
        document.getElementById('result1').innerHTML=name4;
    }else if (mdate == days[5] && gender2){
        console.log(mNames[5]);
        var name5 =mNames[5];
        document.getElementById('result').innerHTML=name5;
    }else if (mdate == days[6] && gender2){
        console.log(mNames[6]);
        var name6 =mNames[6];
        document.getElementById('result1').innerHTML=name6;
    }
      if(mdate == days[0] && gender1){
        console.log(fNames[0]);
        var fname = fNames[0];
        document.getElementById("result1").innerHTML= fname;
    }else if (mdate == days[1] && gender1){
        console.log(fNames[1]);
        var fname1 = fNames[1];
        document.getElementById("result1").innerHTML= fname1;
    }else if (mdate == days[2] && gender1){
        console.log(fNames[2]);
        var fname2 = fNames[2];
        document.getElementById("result1").innerHTML= fname2;
    }else if (mdate == days[3] && gender1){
        console.log(fNames[3]);
        var fname3 = fNames[3];
        document.getElementById("result1").innerHTML= fname3;
    }else if (mdate == days[4] && gender1){
        console.log(fNames[4]);
        var fname4 = fNames[4];
        document.getElementById("result1").innerHTML= fname4;
    }else if (mdate == days[5] && gender1){
        console.log(fNames[5]);
        var fname5 = fNames[5];
        document.getElementById("result1").innerHTML= fname5;
    }else if (mdate == days[6] && gender1){
        console.log(fNames[6]);
        var fname6 = fNames[6];
        document.getElementById("result1").innerHTML= fname6;
    }
 }

