$("#esstatus").click((e)=>{
    $.get("/status",(data)=>{
        $(".modal-body pre").html(JSON.stringify(data,undefined,2));
    });
});