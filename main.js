var name_of_the_student_array = [];

function submit()
{

    var display_student_array = [];
    
    for (var j = 1; j <= 4; j++)
    {

        var name_of_the_student = document.getElementById("nombre_alumno_"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);

    }

    console.log(name_of_the_student_array);
    var lenght_of_name_of_students_array =name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++)
        {
            display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4>");
            console.log(display_student_array);
        }
    console.log(display_student_array);
    document.getElementById("mostrar_nombres_con_comas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join("  ");
    console.log(remove_commas);
    document.getElementById("mostrar_nombres_sin_comas").innerHTML = remove_commas;

    document.getElementById("botón_enviar").style.display = none;
    document.getElementById("botón_ordenar").style.display = inline-block;
        
}

function buscar()
{
    var s= document.getElementById("s1").value;
    var found=0; 
    var m;
    for( m=0; m<name_of_the_student_array.length; m++)
    {
        if(s==name_of_the_student_array[m])
        {
            found=found+1;
        }
    }

    document.getElementById("respuestasBuscar").innerHTML="nombre encontrado" +found+ " veces";
}   