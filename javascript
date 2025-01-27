<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javarscript</title>
    
</head>
<body>  
    
</body>
<script>
    var numero1 = parseInt(prompt("digite numero: "))
    //numero inteiro
    var numero2 = parseFloat(prompt("digite outro numero com virgula: "))
    //numero flotoante/decimal
    var calculo = numero1 + numero2
    //alert(calculo)
    document.write(calculo)

    var nota1 = parseInt(prompt("digite primerio numero de 0 a 10: "))
    var nota2 = parseInt(prompt("digite segunda nota de 0 a 10: "))
    var nota3 = parseInt(prompt("digite terceira notas de 0 a 10; "))

    var media = (nota1 + nota2 + nota3) / 3
    
    alert(media)
    document.write(media)
</script>
</html>
