//alert('loaded');

function add(){
	var name = $("#name").val();
	var value = $("#value").val();
	var option = $("<li>", {id: name, text: name, value: value});
	option.click(function(){ var obj = $(this); alert(obj.val()); });
	$("#options").append(option);
	$("#count").val(parseInt($("#count").val())+1);
	alert($("#count").val());
}

$(function(){
	//$('#add').hide();
	//$('li').bind('click', {data: this.data}, report(this.data));
	$('li').click(function(){
		var obj = $(this);
		alert(obj.val())
	});
});
//http://anthonyterrien.com/demo/knob/
//
//https://github.com/softwaretailoring/wheelnav/releases
//http://wtabs.softwaretailoring.net/
//
//https://blog.bramp.net/wheel/
//http://codepen.io/AndreCortellini/pen/vERwmL?editors=0010
//http://www.jqueryscript.net/blog/8-Newest-Free-jQuery-Plugins-For-This-Week-9-2015.html
