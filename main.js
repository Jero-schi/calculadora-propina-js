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
    
    $propina.textContent = `$${Math.trunc(propina)}`
})
