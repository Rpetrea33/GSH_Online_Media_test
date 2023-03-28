


class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="row">
            <nav class="navbar navbar-success bg-success">
                <div class="container">
                    <a class="navbar-brand" href="#">Logo</a>
                </div>
            </nav>
        </div>
    </header>
    `
}  
}


customElements.define('my-header', MyHeader)