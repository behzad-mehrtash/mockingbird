var likeButton = document.querySelectorAll(".like-button");
var redColor = "#f2aeae";
var buttonBackgroundDefault = "#ebebeb";
var i=0;
for (i=0; i<likeButton.length; i++){
likeButton[i].addEventListener ("click", function(event){
	var targetElement = event.target;
	var buttonParentNode = targetElement.parentNode.parentNode.parentNode.parentNode;
	var parentChilds = buttonParentNode.childNodes;
	
	if (targetElement.innerHTML == "+1"){
		targetElement.innerHTML = "-1";
		targetElement.style.background = redColor;
		for (var i=0; i<parentChilds.length; i++){
			if (parentChilds[i])
				if (hasClass(parentChilds[i], "glyphicon-thumbs-up")){
					var current = parentChilds[i].innerHTML;
					current = parseInt(current);
					current++;
					current = current.toString();
					parentChilds[i].innerHTML = current;
					break;
				}
		}
	}
	else{
		targetElement.innerHTML = "+1";
		targetElement.style.background = buttonBackgroundDefault;
		for (var i=0; i<parentChilds.length; i++){
			if (parentChilds[i])
				if (hasClass(parentChilds[i], "glyphicon-thumbs-up")){
					var current = parentChilds[i].innerHTML;
					current = parseInt(current);
					current--;
					current = current.toString();
					parentChilds[i].innerHTML = current;
					break;
				}
		}
	}
	event.preventDefault();
});}

var commentButton = document.querySelectorAll(".comment-button");

for (var i=0; i<commentButton.length; i++)
commentButton[i].addEventListener("click", function(event){
	var targetElement = event.target;
	var buttonParentNode = targetElement.parentNode.parentNode.parentNode.parentNode;
	var parentChilds = buttonParentNode.childNodes;
	var commentContent = targetElement.parentNode.parentNode;
	if (hasClass(commentContent, "input-group") == false)
		commentContent = commentContent.parentNode;
	commentContent = commentContent.lastChild;
	if (hasClass(commentContent, "comment-text-field") == false)
		commentContent = commentContent.previousSibling;
	var commentPart = commentContent.parentNode.parentNode.previousSibling.previousSibling;
	//alert(commentContent.innerHTML);
//commentContent.style.background = redColor;
	//commentContent.style.background=redColor;
	if (commentContent.value != ""){
		for (var i=0; i<parentChilds.length; i++){
			if (parentChilds[i])
				if (hasClass(parentChilds[i], "glyphicon-comment")){
					var current = parentChilds[i].innerHTML;
					current = parseInt(current);
					current++;
					current = current.toString();
					parentChilds[i].innerHTML = current;
					break;
				}
		}
		commentPart.appendChild(document.createElement("hr"));
		var commentString = commentContent.value;
		var tmp = document.createElement("h5");
		tmp.appendChild(document.createTextNode("User Name:"));
		var newCommentBody = document.createElement("div");
		newCommentBody.appendChild(tmp); newCommentBody.appendChild(document.createTextNode(commentString));
		newCommentBody.setAttribute("class", "comment-body col-sm-10");
		var commentSenderPhoto = document.createElement("img");
		commentSenderPhoto.src = "img/mo0och.png";
		commentSenderPhoto.setAttribute("class", "img-circle user-photo-comment");
		commentSenderPhotoDiv = document.createElement("div");
		commentSenderPhotoDiv.appendChild(commentSenderPhoto);
		commentSenderPhotoDiv.setAttribute("class", "col-sm-1 user-photo-comment");
		commentRow = document.createElement("div");
		commentRow.setAttribute("class", "row");
		commentRow.appendChild(commentSenderPhotoDiv); commentRow.appendChild(newCommentBody);
		newCommentDiv = document.createElement("div");
		newCommentDiv.appendChild(commentRow);
		newCommentDiv.setAttribute("class", "comment");
		commentPart.appendChild(newCommentDiv);
		commentContent.value="";
	}

	event.preventDefault();
});

var commentTextField = document.querySelectorAll(".input-group .form-control.comment-text-field");
i=0;
	for (i=0; i<commentTextField.length; i++)
		commentTextField[i].addEventListener("keypress", function(event) {
    		if (event.which == 13) {
    			var targetElement = event.target;
    			var targetButton = targetElement.parentNode.firstChild.nextSibling.firstChild.nextSibling.nextSibling;
    			targetButton.click();
        		event.preventDefault();
    		}
		});
	


function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
};

