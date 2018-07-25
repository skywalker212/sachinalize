function map() {
    this.data = new Object();

    this.put = function (key, value) {
        if (this.data[key] == null) {
            this.data[key] = [key, value];
        } else this.data[key].push(value);
    };

    this.getObj = function () {
        return this.data;
    }

    this.get = function (key) {
        return this.data[key];
    };
}

export default map;