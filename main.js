const d = document
var redInpt = d.querySelector('.red')
var grnInpt = d.querySelector('.green')
var bluInpt = d.querySelector('.blue')
var rgbCode = d.querySelector('.rgba')
var hexCode = d.querySelector('.hxcd')
var currentColor = d.querySelector('.currentColor')

/*****************************************************/


redInpt.addEventListener('input',inputColor)
grnInpt.addEventListener('input',inputColor)
bluInpt.addEventListener('input',inputColor)
hexCode.addEventListener('click',copied)
rgbCode.addEventListener('click',copied)

/*****************************************************/

function inputColor() {
  let red = +redInpt.value
  let green = +grnInpt.value
  let blue = +bluInpt.value
  
  let rgb = `rgb(${red},${green},${blue})`
  let hex = `#${tostr(red)}${tostr(green)}${tostr(blue)}`
  
  rgbCode.value = rgb
  hexCode.value = hex
  rgbCode.style.background = 'white'
  rgbCode.style.color = 'black'
  hexCode.style.background = 'white'
  hexCode.style.color = 'black'
  
  redInpt.nextElementSibling.innerHTML = red
  grnInpt.nextElementSibling.innerHTML = green
  bluInpt.nextElementSibling.innerHTML = blue
  
  function tostr(num) {
    let updated = num.toString(16)
    updated = updated.length < 2 ? '0' + updated : updated
    return updated
  }
  
  currentColor.style.background = rgb
}
inputColor()

function copied() {
  let inp = this
  console.log(inp.value)
  if ('copied' == inp.value) {
    alert('text already copied')
  }else{
    inp.select()
    d.execCommand('COPY')
    inp.value = 'copied'
    inp.style.background = 'black';
    inp.style.color = 'white';
  }
}

