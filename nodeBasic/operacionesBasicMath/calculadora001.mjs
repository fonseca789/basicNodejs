export function sum(value1, value2) {
    return value1 + value2
}

export function subst(value1, value2) {
    return value1 - value2
}

export function mult(value1, value2) {
    return value1 * value2
}

export function div(value1, value2) {
    if (value2 == 0) return 'No se puede Div entre 0'
    return value1 / value2;
}