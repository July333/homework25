class Chair {
    /*enum Col{
        Black, White, Red, Green, Blue
    }*/
    private arrCol = ["Black", "White", "Red", "Green", "Blue"];
    material: string;
    _color: string;
    get color() {
        return this._color;
    }
    set color(str: string) {
        str = str[0].toUpperCase() + str.substr(1);
        console.log(str);
        for (let i = 0; i < this.arrCol.length; i++) {
            if (str == this.arrCol[i]) {
                this._color = str;
            }
        }
        if (!this._color) {
            throw "Choose another color";
        }
    }
    _lenght: number;
    get lenght() {
        return this._lenght;
    }
    set lenght(x: number) {
        if (x < 0) {
            throw "please write positive lenght";
        }
        this._lenght = x;
    }
    _width: number;
    get width() {
        return this._width;
    }
    set width(x: number) {
        if (x < 0) {
            throw "please write positive width";
        }
        this._width = x;
    }
    _height: number;
    get height() {
        return this._height;
    }
    set height(x: number) {
        if (x < 0) {
            throw "please write positive heightt";
        }
        this._height = x;
    }
    constructor(material: string, color: string, l: number, w: number, h: number) {
        this.material = material;
        this.color = color;
        this.lenght = l;
        this.width = w;
        this.height = h;
    }
    chairVolume() {
            var volume = this.lenght * this.width * this.height;
            document.body.innerHTML += `<div>${volume}</div>`;
            return volume;
    }
    toString() {
            document.body.innerHTML += `<div> 
        ${this.material}<br>
        ${this.color}<br>
        ${this.lenght}<br>
        ${this.width}<br>
        ${this.height}<br>    
        The volume of the cheir is ${this.chairVolume()}
        </div>`;
    }
}
(function main() {
    try {
        document.body.innerHTML += `<div>First try</div>`;
        var h1 = new Chair("wood", "Black", 1, 3, 4);
        var h2 = new Chair("plastic", "red", -1, 1, 2);
    }
    catch (ex) {
        console.log(ex);
        document.body.innerHTML += `<div> ${ex}</div>`;
    }
    try {
        document.body.innerHTML += `<div>Second try</div>`;
        h1.chairVolume();
        h1.toString();

        document.body.innerHTML += `<div>Second chair: </div>`;
        console.log(h2);
        //h2.chairVolume();
        //h2.toString();
    }
    catch (ex) {
        console.log(ex);
        document.body.innerHTML += `<div> ${ex}</div>`;
    }
})();