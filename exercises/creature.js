
$("#crAdd").click( function(){

    let crName=$("#crName").val();
    let crColor=$("#crColor").val();
    let crEyesNum=$("#crEyesNum").val();

    console.log(crName);  
    console.log(crColor); 
    console.log(crEyesNum); 
    

    if( crName.length > 2) { 
        $("#creature-list").append("<div>"+crName+crColor+crEyesNum+"</div>");
    }
   

     $("#crName").val(""); 

}); 
 $("#creature-list").append(`
            <div class="creature">
                <div class="creature-body" style="background-color: ${crColor}"> ${crEyesHtml} </div>
                <div class="creature-info">${crName}</div>
            </div>
        `);
let crEyesHtml="";
    for (let i = 0; i < crEyesNum; i++) {
        crEyesHtml=crEyesHtml+ "<div class='eye'>.</div>";
    }