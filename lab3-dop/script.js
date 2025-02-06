const firstProperty = document.getElementById('first-property')
const flexButton = document.getElementById('flex-button')
const inlineFlexButton = document.getElementById('inline-flex-button')

inlineFlexButton.addEventListener('click', ()=>{
    firstProperty.classList.remove('flex')
    firstProperty.classList.add('inline-flex')
    flexButton.classList.remove('active')
    inlineFlexButton.classList.add('active')
})
flexButton.addEventListener('click',()=>{
    firstProperty.classList.remove('inline-flex')
    firstProperty.classList.add('flex')
    flexButton.classList.add('active')
    inlineFlexButton.classList.remove('active')
})

const secondProperty = document.getElementById('second-property')
const rowButton = document.getElementById('row-button')
const rowReverseButton = document.getElementById('row-reverse-button')
const columnButton = document.getElementById('column-button')
const columnReverseButton = document.getElementById('column-reverse-button')

rowButton.addEventListener('click', ()=>{
    removeForDirection(rowButton,rowReverseButton,columnButton,columnReverseButton,secondProperty)
    rowButton.classList.add('active')
    secondProperty.classList.add('row')
})
rowReverseButton.addEventListener('click', ()=>{
    removeForDirection(rowButton,rowReverseButton,columnButton,columnReverseButton,secondProperty)
    rowReverseButton.classList.add('active')
    secondProperty.classList.add('row-reverse')
})
columnButton.addEventListener('click', ()=>{
    removeForDirection(rowButton,rowReverseButton,columnButton,columnReverseButton,secondProperty)
    columnButton.classList.add('active')
    secondProperty.classList.add('column')
})
columnReverseButton.addEventListener('click', ()=>{
    removeForDirection(rowButton,rowReverseButton,columnButton,columnReverseButton,secondProperty)
    columnReverseButton.classList.add('active')
    secondProperty.classList.add('column-reverse')
})
function removeForDirection(row,rowReverse,column, columnReverse, property){
    row.classList.remove('active')
    rowReverse.classList.remove('active')
    column.classList.remove('active')
    columnReverse.classList.remove('active')
    property.classList.remove('row')
    property.classList.remove('row-reverse')
    property.classList.remove('column')
    property.classList.remove('column-reverse')
}

const thirdProperty = document.getElementById('third-property')
const wrapButton = document.getElementById('wrap-button')
const nowrapButton = document.getElementById('nowrap-button')
const wrapReverseButton = document.getElementById('wrap-reverse-button')

function deleteForWrap(wrap,nowrap,wrapReverse,property){
    wrap.classList.remove('active')
    nowrap.classList.remove('active')
    wrapReverse.classList.remove('active')
    property.classList.remove('wrap')
    property.classList.remove('nowrap')
    property.classList.remove('wrap-reverse')
}
wrapButton.addEventListener('click', ()=>{
    deleteForWrap(wrapButton,nowrapButton,wrapReverseButton,thirdProperty)
    wrapButton.classList.add('active')
    thirdProperty.classList.add('wrap')
})
nowrapButton.addEventListener('click', ()=>{
    deleteForWrap(wrapButton,nowrapButton,wrapReverseButton,thirdProperty)
    nowrapButton.classList.add('active')
    thirdProperty.classList.add('nowrap')
})
wrapReverseButton.addEventListener('click', ()=>{
    deleteForWrap(wrapButton,nowrapButton,wrapReverseButton,thirdProperty)
    wrapReverseButton.classList.add('active')
    thirdProperty.classList.add('wrap-reverse')
})