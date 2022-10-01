const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fahToCel = (fehr) => {
        let Celsius = Math.round((fehr - 32) * 5/9);
        return Celsius;
    }


    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}&#176 Fahrenheit`;   
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}&#176 Celsius`;   
    }
}