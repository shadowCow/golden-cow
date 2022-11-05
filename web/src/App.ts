export function render(container: Element): void {
    // create a new div element
    const chartRoot = document.createElement('div')
    chartRoot.setAttribute('id', 'chart')

    // and give it some content
    const chartContent = document.createTextNode('Chart goes here')

    // add the text node to the newly created div
    chartRoot.appendChild(chartContent)

    container.appendChild(chartRoot)
}
