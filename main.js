const $input = document.querySelector('#input')
const $diezPorcinto = document.querySelector('#diez')
const $quincePorcinto = document.querySelector('#quince')
const $veintePorcinto = document.querySelector('#veinte')
const $veinticincoPorcinto = document.querySelector('#veinticinco')
const $propina = document.querySelector('#propina')
const $div = document.querySelector('#result')


function calcularPorcentaje(porcentaje) {
    const value = Number($input.value)
    const propina = value * porcentaje
    $div.classList.remove('inactive')

    $propina.textContent = `$${Math.trunc(propina)}`
}