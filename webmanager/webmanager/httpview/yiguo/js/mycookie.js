function setCookie(key,value,day){
	var cValue = key + "=" + encodeURIComponent(value) + ";";
	if(day){
		cValue += "expires=" + addDays(day);
	}
	document.cookie = cValue;
}

function getCookie(key){
	var cValue = document.cookie;
	var cList = cValue.split('; ');
	var result = "";
	for(var i = 0; i<cList.length; i++){
		var kv = cList[i].split('=');
		if(kv[0] == key){
			result = kv[1];
		}
	}
	return decodeURIComponent(result);
}

function delCookie(key){
	setCookie(key,"",new Date(0));
}

function addDays(days){
	var now = new Date();
	var time = now.getTime();
	time = time + days * 1000 * 3600 * 24 ;
	return new Date(time);
}