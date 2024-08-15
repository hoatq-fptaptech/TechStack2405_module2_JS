function HeaderComponent(){
    return `
        <div class="container">
            <h1>Header component1</h1>
            <h1>Header component2</h1>
            <h1>Header component3</h1>
            <h1>Header component4</h1>
        </div>
    `;

}
const headerElements = document.getElementsByTagName("HeaderComponent");// array
for(let item of headerElements){
    item.innerHTML = HeaderComponent();
}