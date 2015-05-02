var toggle = false;
var user="jQuery404";
var searchBoxText= "Type here...";
var fixIntv;
var fixedBoxsize = $('#fixed').outerHeight()+'px';
var Parent = $("#fixed"); // cache parent div
var Header = $(".fixedHeader"); // cache header div
var chatname = $("#username");
var Chatbox = $(".userinput"); // cache header div
Parent.css('height', '30px');
var chatCloseButton = $("#chatCloseButton");

var chatitem = document.querySelectorAll("li.media div.media-body div.media");
for(var i=0; i<chatitem.length; i++){
    chatitem[i].addEventListener("click", function(event){
        event.stopPropagation();
        toggle = (!toggle) ? true : false;
        // console.log(Parent.css('visibility'));
        Parent.css('visibility', 'visible');
        if(toggle)
        {
            Parent.animate({'height' : fixedBoxsize}, 300);
        }
        var olduser = user;
        user = event.currentTarget.querySelector("h5").innerHTML;
        if(olduser != user){
            $('.fixedContent').text('');
        }
        // console.log(Header.innerHTML);
        chatname.text(user);  

    });
};

chatCloseButton.click(function(e){
    e.stopPropagation();
    Parent.css('visibility', 'hidden');
});

Header.click(function(){           
    toggle = (!toggle) ? true : false;
    if(toggle)
    {
        Parent.animate({'height' : fixedBoxsize}, 300);                    
    }
    else
    {
        Parent.animate({'height' : '30'}, 300); 
    }
    
});

Chatbox.focus(function(){
    $(this).val(($(this).val()==searchBoxText)? '' : $(this).val());
}).blur(function(){
    $(this).val(($(this).val()=='')? searchBoxText : $(this).val());
}).keyup(function(e){
    var code = (e.keyCode ? e.keyCode : e.which);       
    if(code==13){
        $('.fixedContent').append("<div class='userwrap'><span class='user'>"+user+"</span><p class='messages'>"+$(this).val()+"</p></div>");
        event.preventDefault();
     
        $(".fixedContent").scrollTop($(".fixedContent").height());
        $(this).val('');
    }
    
});