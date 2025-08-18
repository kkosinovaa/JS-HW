function foobar(array) {
    document.write('<ul>')
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}
foobar(['text', 2, true, null, undefined]);