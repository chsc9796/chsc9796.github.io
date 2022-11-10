const submitButton = document.getElementById('submit-button')
const OFFSET = 100

submitButton.addEventListener('click', () => {
    alert('Nice Try')
    
})

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = submitButton.getBoundingClientRect()
    const horizontalDis = disCenter(buttonBox.x, x, buttonBox.width)
    const verticalDis = disCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET
    if (Math.abs(horizontalDis) <= horizontalOffset && Math.abs(verticalDis) <= verticalOffset) {
        setButtonPos(
        buttonBox.x + horizontalOffset / horizontalDis * 10, 
        buttonBox.y + verticalOffset / verticalDis * 10)
    }
})

function setButtonPos(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = submitButton.getBoundingClientRect()

    if (disCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - OFFSET
    }
    if (disCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + OFFSET
    }
    if (disCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET
    }
    if (disCenter(top, windowBox.buttom, buttonBox.height) > 0) {
        bottom = windowBox.top + OFFSET
    }

    submitButton.style.top = `${top}px`
    submitButton.style.left = `${left}px`
}

function disCenter(boxPos, mousPos, boxSize) {
    return boxPos - mousPos + boxSize / 2
}