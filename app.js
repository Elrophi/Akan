var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
var mNames = ['Kwasi', 'Kwando', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var fNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];



function getData(){
    event.preventDefault();
    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    // var gender2 = document.getElementById('gender2').value;
    console.log(gender)
    if(date == "" && gender != 0 || gender != 1){
        alert("please select the date and gender")
    }else
        alert("you are all set!")

    //getdate and pick day
    let fdate = new Date(date).toDateString();
     var mdate = fdate.split(' ')[0];
    document.getElementById('result').innerHTML = mdate;


    if(mdate == days[0] && gender == 2){
        console.log(mNames[0]);
         var name = mNames[0];
         document.getElementById("result1").innerHTML= name;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[1] && gender == 2){
        console.log(mNames[1]);
        var name1 = mNames[1];
         document.getElementById("result1").innerHTML= name1;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[2] && gender == 2){
        console.log(mNames[2]);
        var name2 = mNames[2];
        document.getElementById("result1").innerHTML=name2;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[3] && gender == 2){
        console.log(mNames[3]);
        var name3 = mNames[3];
        document.getElementById('result1').innerHTML=name3;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[4] && gender == 2){
        console.log(mNames[4]);
        var name4 =mNames[4];
        document.getElementById('result1').innerHTML=name4;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[5] && gender == 2){
        console.log(mNames[5]);
        var name5 =mNames[5];
        document.getElementById('result1').innerHTML=name5;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[6] && gender == 2){
        console.log(mNames[6]);
        var name6 =mNames[6];
        document.getElementById('result1').innerHTML=name6;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }
      if(mdate == days[0] && gender == 1){
        console.log(fNames[0]);
        var fname = fNames[0];
        document.getElementById("result1").innerHTML= fname;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[1] && gender == 1){
        console.log(fNames[1]);
        var fname1 = fNames[1];
        document.getElementById("result1").innerHTML= fname1;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[2] && gender == 1){
        console.log(fNames[2]);
        var fname2 = fNames[2];
        document.getElementById("result1").innerHTML= fname2;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[3] && gender == 1){
        console.log(fNames[3]);
        var fname3 = fNames[3];
        document.getElementById("result1").innerHTML= fname3;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[4] && gender == 1){
        console.log(fNames[4]);
        var fname4 = fNames[4];
        document.getElementById("result1").innerHTML= fname4;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[5] && gender == 1){
        console.log(fNames[5]);
        var fname5 = fNames[5];
        document.getElementById("result1").innerHTML= fname5;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }else if (mdate == days[6] && gender == 1){
        console.log(fNames[6]);
        var fname6 = fNames[6];
        document.getElementById("result1").innerHTML= fname6;
         document.getElementById('date').value = '';
         document.getElementById('gender').value = '';
    }

 }

