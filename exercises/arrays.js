//3A
var meses = [
 "Enero",
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto",
    "Septiembre",
    "Octubre", 
    "Noviembre", 
    "Diciembre"];

console.log(meses[4],meses[10]);

//3B

var meses1 = [
    "Enero",
       "Febrero", 
       "Marzo", 
       "Abril", 
       "Mayo", 
       "Junio", 
       "Julio", 
       "Agosto",
       "Septiembre",
       "Octubre", 
       "Noviembre", 
       "Diciembre"];

       meses1.sort();

       console.log("Array de meses ordenado alfabéticamente:", meses1);

       //3C
       var meses2 =[
       "Enero",
       "Febrero", 
       "Marzo", 
       "Abril", 
       "Mayo", 
       "Junio", 
       "Julio", 
       "Agosto",
       "Septiembre",
       "Octubre", 
       "Noviembre", 
       "Diciembre"];

       meses2.unshift("Inicio");
       meses2.push("Fin");

       console.log("Array de meses con elementos agregados:", meses2);
       
       //3D

       var meses3 =[
        "Enero",
        "Febrero", 
        "Marzo", 
        "Abril", 
        "Mayo", 
        "Junio", 
        "Julio", 
        "Agosto",
        "Septiembre",
        "Octubre", 
        "Noviembre", 
        "Diciembre"];

        var ElementoI = meses3.shift();
        var ElementoF = meses3.pop();
        console.log("Array de meses sin elementos iniciales y finales:", meses3);
        console.log("Elemento inicial eliminado:", ElementoI);
        console.log("Elemento final eliminado:", ElementoF);


        //3E

        var meses4 =[
            "Enero",
            "Febrero", 
            "Marzo", 
            "Abril", 
            "Mayo", 
            "Junio", 
            "Julio", 
            "Agosto",
            "Septiembre",
            "Octubre", 
            "Noviembre", 
            "Diciembre"];

            meses4.reverse();

            console.log("Array de meses invertido:", meses4)

            //3F

            var meses5 =[
                "Enero",
                "Febrero", 
                "Marzo", 
                "Abril", 
                "Mayo", 
                "Junio", 
                "Julio", 
                "Agosto",
                "Septiembre",
                "Octubre", 
                "Noviembre", 
                "Diciembre"];

            var guion = meses5.join("-");

            console.log("Array de meses unidos en un único string:", guion);

            //3G

            var meses6 =[
                "Enero",
                "Febrero", 
                "Marzo", 
                "Abril", 
                "Mayo", 
                "Junio", 
                "Julio", 
                "Agosto",
                "Septiembre",
                "Octubre", 
                "Noviembre", 
                "Diciembre"];
                
                var copiaMeses = meses6.slice(4, 11);

                console.log("Copia del array de meses:", copiaMeses);


