class NewGoblin {
    constructor(goblin) {
        this.goblin = goblin;
    }
    
    addGoblin() {
        const img = document.createElement("img")
        img.src = "../pic/goblin_small.png"
        //img.classList.add('icon');

        //this.goblin.insertBefore(img, this.goblin.querySelector('.cells'));
        //document.body.appendChild(img);
        this.goblin.innerHTML = '<td class="cells" id=10><img src="../pic/goblin_small.png"></td>'
    }
}