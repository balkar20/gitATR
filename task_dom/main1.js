/**
 * Функция для генерации структуры иерархии
 * в виде дерева каталогоinstaв и файлов.
 */
function generateTree() {

    var resourses = document.getElementsByClassName("resource");
    var res = resourses[0];

    console.log("///////////////////////////////////////////");
    var objs = parseResoursesToObjects(resourses);
    console.log(objs.length);
    console.log(objs[61]);
    
    console.log("///////////////////////////////////////////");
    var groups = groupByDirectories(objs);
    console.log("group of elements:");
    console.log(groups);
    
    console.log("///////////////////////////////////////////");
    var group = getResoursesByLocation('ROOT', objs);
    console.log(group);
}

var Resurse = function(name, type, size, location){
	this.name = name;
	this.type = type;
	this.size = size;
	this.location = location;

	this.getElementsWithThisLocation = function(objs){
		var arr = [];
	    for (var i = 0; i < objs.length; i++) {
		var res = objs[i];
		if(this.location == res.location){
			arr.push(objs[i]);
		}
	    }
	return arr;
	}
}

function getResoursesByLocation(location,objs){
    var groups = groupByDirectories(objs);
    var result;
    for (var i = 0; i < groups.length; i++) {
    	if (groups[i][0].location === location) {
    		result = groups[i];
    	}
    }
    return result;
}


function parseResoursesToObjects(resourses){
	var objs = [];
	for (var i = 0; i < resourses.length; i++) {
		objs.push(parseResToObject(resourses[i]));
	}
	return objs;
}

function getGrouopLocation(group){
	return group[0].location;
}

function groupByDirectories(objs){
	var groups = [];
	var arrHelp = objs;
	var cachedId = [];
    
     for (var i = 0; i < arrHelp.length; i++) {
     	var id = arrHelp[i].location;
     	if(cachedId.indexOf(id) === -1){
     	   var group = arrHelp[i].getElementsWithThisLocation(arrHelp);
     	   groups.push(group);
     	   cachedId.push(id);
     	}
     }

     return groups;
}

function deleteObjectsFromArray(arrFrom,arrOfDel){
	var arr = arrFrom;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arrOfDel.length; j++) {
        if(arr[i].name === arrOfDel[j].name && arr[i].location === arrOfDel[j].location){
            arr.splice(i,1);
        }
	}
	}
	return arr;
}

function getElementsWithLocation(location,objs){
	var arr = [];
	    for (var i = 0; i < objs.length; i++) {
		var res = objs[i];
		if(location == res.location){
			arr.push(objs[i]);
		}
	    }
	return arr;
}

// function getElementsWithType(type,resourses){
// 	var arr = [];
// 	for (var i = 0; i < resourses.length; i++) {
// 		var dict = parseResToDictionary(resourses[i]);
// 		if(type == dict[1][0]){
// 			arr.push(resourses[i]);
// 		}
// 	}
// 	return arr;
// }

function parseResToDictionary(res){
	var resTexts = getLiTexts(res);
	var keys = [];
	var values = []
	var dict;

	for (var i = 0; i < resTexts.length; i++) {
		var text = resTexts[i].replace(/ +/g," ");
        var key = text.split(' ')[0];
        var val = text.split(' ')[1];
        keys.push(key);
        values.push(val);
	}
	dict = [keys, values]
	return dict;
}

function parseResToObject(res){
    var name = getResourseName(res);
    var dict = parseResToDictionary(res);
    return new Resurse(name, dict[1][0], dict[1][1], dict[1][2]);
}

function getResourseName(res){
	return res.firstElementChild.textContent;
}

function getLiTexts(resource){
	var arr = [];
	var lies = resource.getElementsByTagName('li');
    for (var i = 0; i < lies.length; i++) {
    	var two = lies[i].firstElementChild.textContent + lies[i].textContent.replace(lies[i].firstElementChild.textContent, '').replace(/\r|\n/g, '');
    	arr.push(two);
    }
    return arr;
}


window.onload = generateTree();