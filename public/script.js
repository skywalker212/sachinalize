$("#esstatus").click((e) => {
    $.get("/status", (data) => {
        $(".modal-body pre").html(JSON.stringify(data, undefined, 2));
    });
});

$(".data").each((ind, ele) => {
    const element = $(ele);
    let data = element.data('number');
    let type = element.data('type');
    let num = 0;
    let inc = 0;
    switch (type) {
        case "match":
            inc = 5;
            break;
        case "runs":
            inc = 200;
            break;
        case "cent":
            inc = 1;
            break;
        case "fif":
            inc = 2;
            break;
    }
    let interval = setInterval(() => {
        if (num >= data) {
            element.html(data);
            clearInterval(interval);
        } else {
            num += inc;
            element.html(num);
        }
    }, 1);
});