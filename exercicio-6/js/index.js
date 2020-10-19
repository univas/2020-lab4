let count = 0

const start = () => {
    const spanElements = document.getElementsByTagName('span')
    Array.from(spanElements).forEach(setEventListener)

    const clearButton = document.getElementById('reset')
    clearButton.onclick = clearButtonEvent
}

const setEventListener = spanElement => spanElement.onclick = clickEventListener

const clickEventListener = event => {
    const span = event.target
    if (!isReachedTheMaximum() && !isElementContainsSelectedClass(span)) {
        count++
        span.className = 'selected'
        appendSelectedNumbers(span.innerHTML)
    }
}

const isReachedTheMaximum = () => count === 6

const isElementContainsSelectedClass = element => element.className.indexOf('selected') > -1

const appendSelectedNumbers = number => {
    const p = document.getElementById('sorted')
    if (count > 1) {
        p.innerHTML += ' -'
    }
    p.innerHTML += ' ' + number
}

const clearButtonEvent = () => {
    count = 0
    clearSelectedNumberArea()
    const selectedElements = document.getElementsByClassName('selected')
    Array.from(selectedElements).forEach(element => element.className = '')
}

const clearSelectedNumberArea = () => document.getElementById('sorted').innerHTML = ''

start()