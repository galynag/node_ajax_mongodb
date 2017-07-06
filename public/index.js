/**
 * Created by Galina on 06.07.2017.
 */
$(document).ready(function () {
        $.ajax({
            type: "POST",
            url: "/files",
            data: JSON.stringify({folder: './test4'}),
            dataType: "json",
            contentType: "files/json",
            success: function(data){
                console.log('data',data);
                let files = [];
                for (let i=0; i < data.length; i++){

                        files.push(data[i]);

                }

                $('#numberIs').text('234q3245');
            },
        });


    // fileList('./test4');

    $('#f1').submit((e) => {
        e.preventDefault();
        let registerForm = document.forms["registerForm"];
        let userName = registerForm.elements["userName"].value;
        let userAge = registerForm.elements["userAge"].value;
        $.ajax({
            type: "POST",
            url: "/user",
            data: JSON.stringify({userName: userName, userAge: userAge}),
            dataType: "json",
            contentType: "application/json",
            success: function(data){
                console.log(data);
            },
        });
    });
    $('#f2').submit((e)=> {
        e.preventDefault();
        let resultNumber = document.forms["resultNumber"];
        let numberWas = resultNumber.elements["numberWas"].value;
        console.log('numberWas',numberWas);
        $.ajax({
            type: "POST",
            url: "/number",
            data: JSON.stringify({numberWas: numberWas}),
            dataType: "json",
            contentType: "application/json",
            success: function(data){
                console.log(data);
                $('#numberIs').val(data.numberIs);
            },
        });
    })
})