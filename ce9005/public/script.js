function ajax_paginate(page){
	var data = { 'page':page }
	var done = function(res, status) {
		if (status == "success")
		  var response = eval('(' + res.responseText + ')');
		  document.getElementById('search_results').innerHTML = response.data;
			document.getElementById('start').innerHTML = response.start;
			document.getElementById('end').innerHTML = response.end;
			document.getElementById('total').innerHTML = response.total;
	}
	var args = { type:"POST", url:"/ajax_paginate/", data:data, complete:done };
	$.ajax(args);
}

function ajax_paginate_review(page){
	var data = { 'page':page }
	var done = function(res, status) {
		if (status == "success")
		  document.getElementById('review_results').innerHTML = eval('(' + res.responseText + ')');
	}
	var args = { type:"POST", url:"/ajax_paginate_review/", data:data, complete:done };
	$.ajax(args);
}

//handles the post comment request 
function ajax_post_comment(){
	var comment = document.getElementById('comment').value;
	var data = {'posted_comment' : comment};
	var done = function(res, status) {
		var result = eval('(' + res.responseText + ')');
		if (status == "success")
		{
		  //document.getElementById('posted_comment').innerHTML = result.posted_comment;
		  addComment(result.posted_comment,'user1');
		}		
	}
	var args = { type:"POST", url:"/ajax_post_comment/", data:data, complete:done };
	$.ajax(args);
}

//handles the post tag request
function ajax_post_tag(id){
	var tag = document.getElementById('tag').value;
	var data = { 'posted_tag':tag}
	var done = function(res, status) {
		var result = eval('(' + res.responseText + ')');
		if (status == "success")
		{
		  addTag(result.posted_tag);
		}
	}
	var args = { type:"POST", url:"/ajax_post_tag/", data:data, complete:done };
	$.ajax(args);
}

//handles the rating request
function ajax_rate(rating){
	document.getElementById('rating_message').innerHTML = "";
	var data = {'rating':rating }
	var done = function(res, status) {
		if (status == "success")
      var result = eval('(' + res.responseText + ')');
		  document.getElementById('rating_message').innerHTML = result.rating_message;
	}
	var args = {type:"POST", url:"/ajax_rate/", data:data, complete:done};
	$.ajax(args);
}

//handles the display comments request
function ajax_get_comments(id){
	var data = {'id':id }
	var done = function(res, status) {
		if (status == "success")
      var result = eval('(' + res.responseText + ')');
		  document.getElementById('display_comments').innerHTML = result.rating_message;
	}
	var args = {type:"POST", url:"/ajax_get_comments/", data:data, complete:done};
	$.ajax(args);
}

//adds the comment to the 'display comments' section
function addComment(comment,userId)
{  
  var _table = document.getElementById('comments_table').insertRow(0);
  _table.className = "resultrow";
  var cell0 = _table.insertCell(0);
  var cell1 = _table.insertCell(1);
  cell0.innerHTML = "username11"; //dummy username, should be modified appropriately
  cell1.innerHTML = comment;
  cell0.className = "newColAuthor";
  cell1.className = "newColComment";
}

//adds the tag to the 'display tags' section
function addTag(tag)
{  
  var list = document.getElementById("tag-list");
  var li = document.createElement("li");
  li.innerHTML = tag;
  list.appendChild(li);
}
