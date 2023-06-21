const $input = document.querySelector('#input')
const $diezPorcinto = document.querySelector('#diez')
const $quincePorcinto = document.querySelector('#quince')
const $veintePorcinto = document.querySelector('#veinte')
const $veinticincoPorcinto = document.querySelector('#veinticinco')
const $propina = document.querySelector('#propina')
const $div = document.querySelector('#result')
const $rango = document.querySelector('#rango')
const $parrafo = document.querySelector('#parrafo')
const $rectMoney = document.querySelector('#rect-money')
let valueRango = $rango.valueAsNumber

// function calcularPorcentaje(porcentaje) {
//     const value = Number($input.value)
//     const propina = value * porcentaje
//     $div.classList.remove('inactive')

//     $propina.textContent = `$${Math.trunc(propina)}`
// }

$rango.addEventListener('input', () => {
    valueRango = $rango.valueAsNumber
    $parrafo.textContent = `${valueRango} %`;
    const value = Number($input.value)
    const propina = value * valueRango / 100

    $rectMoney.setAttribute('fill', obtenerColor(valueRango))
    // $parrafo.style.color = obtenerColor(valueRango)
    
    $propina.textContent = `$${Math.trunc(propina)}`
})

function obtenerColor(rango) {
    if (rango == 5) {
        return '#F09945'
    } else if (rango == 10) {
        return '#E0D74C'
    } else if (rango == 15 || rango == 20) {
        return '#A7FA52'
    } else if (rango == 50) {
        return '#368F30'
    } else {
        return '#44B248'
    }
}
