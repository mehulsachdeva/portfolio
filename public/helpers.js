export const darkenHexToRGB = (hex, alpha, x = -10) => {
    if (!hex) {
        return null
    }
    var r = parseInt(hex.slice(1, 3), 16) + x,
        g = parseInt(hex.slice(3, 5), 16) + x,
        b = parseInt(hex.slice(5, 7), 16) + x

    if (alpha !== undefined) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')'
    }
}