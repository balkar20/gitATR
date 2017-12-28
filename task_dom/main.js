/**
 * Функция для генерации структуры иерархии
 * в виде дерева каталогоinstaв и файлов.
 */
// var RESOURSES = document.getElementsByClassName("resource");
// var RESOURSE_OBJS = parseResoursesToObjects(RESOURSES);
document.addEventListener('DOMContentLoaded', () => {

    var RESOURSES = document.getElementsByClassName("resource");
    var OBJS = parseResoursesToObjects(RESOURSES);
    console.log("hello");

    console.log("///////////////////////////////////////////");

    console.log(OBJS.length);
    console.log(OBJS[61]);

    var container = document.getElementById('tree');
    buildHtmlHirarchy(OBJS, "ROOT", container);
    container.appendChild(root);
    // var drawed = drawNodeForElement(OBJS[60]);
    //container.appendChild(drawed);


    // var results = buildHirarchy(OBJS, "ROOT");
    // console.log(results);
});

var CLASS_CONNECTOR_LINE = "tree-connector-line";
var CLASS_HIERARCHY_LINE = "tree-hierarchy-line";
var CLASS_CONTAINER = "tree-wrapper";
var CLASS_FILE_HEADER = "file-header";
var CLASS_DIRECT_HEADER = "header";
var UL_CLASS = "tree";
var TYPES = { file: 'F', directory: 'D' };

function generateTree() {
    
}

var Resurse = function(name, type, size, location) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.location = location;
    this.child;

    this.getChilds = function(objs) {
        var arr = [];
        for (var i = 0; i < objs.length; i++) {
            var res = objs[i];
            if (this.name == res.location) {
                arr.push(objs[i]);
            }
        }
        return arr;
    }
}

function buildHtmlHirarchy(resourses, rootName, container) {
    var box = document.createElement("div");
    var filtred = resourses.filter(function(res) {
        return res.location === rootName;
    });
    var newResourses = deleteObjectsFromArray(resourses, filtred);
    console.log("filtred: ");
    console.log(filtred[0]);
    console.log(rootName);

    filtred.forEach((res) => {
        container.appendChild(drawNodeForElement(res));
        container.appendChild(buildHtmlHirarchy(newResourses, res.name, container.getElementsByTagName('li')[0]));
    });
    // var filtred = resourses.filter(function(res) {
    //     return res.location === rootName;
    // });
    // var newResourses = deleteObjectsFromArray(resourses, filtred);
    // console.log("filtred: ");
    // console.log(filtred[0]);
    // console.log(rootName);

    // filtred.forEach((res) => {
    //     container.appendChild(drawNodeForElement(res));
    //     container.appendChild(buildHtmlHirarchy(newResourses, res.name, container.getElementsByTagName('li')[0]));
    // });
}


///////////////////
function buildHirarchy(resourses, rootName) {
    var box = [];
    resourses.filter(function(res) {
        return res.location === rootName;
    }).forEach((res) => {
        var newRes = res;
        newRes.child = buildHirarchy(resourses, res.name);
        return box.push(newRes);
    });
    return box;
}
//////////////////////
// function buildHirarchy(resourses, box) {
//     resourses.forEach((item) => {
//         var newBox = document.createElement('div');
//         // var content = document.createTextNode(item.name);
//         newBox.appendChild(drawNodeForElement(item));
//         var itemChilds = item.getChilds(resourses);
//         box.appendChild(newBox);
//         if (itemChilds.length) {
//             buildHirarchy(itemChilds, newBox);
//         }
//     });
// }



function drawNodeForElement(resourse) {
    var container = document.createElement("div");
    container.setAttribute("class", CLASS_CONTAINER);

    var hirLineContainer = document.createElement("div");
    hirLineContainer.setAttribute("class", CLASS_HIERARCHY_LINE);

    var ulElemennt = document.createElement("ul");
    ulElemennt.setAttribute("class", UL_CLASS);

    var liElement = document.createElement("li");
    liElement.setAttribute("id", "deeper");

    var connectorLine = document.createElement("span");
    connectorLine.setAttribute("class", CLASS_CONNECTOR_LINE);

    var header = document.createElement("span");
    if (resourse != "ROOT") {
        if (resourse.type === TYPES.file) {
            header.className = CLASS_FILE_HEADER;
            var wrappedSpan = document.createElement("span");
            wrappedSpan.setAttribute("class", "size");
            wrappedSpan.textContent = resourse.size;

            header.textContent = resourse.name;
            header.appendChild(wrappedSpan);

        } else if (resourse.type === TYPES.directory) {
            header.className = CLASS_DIRECT_HEADER;
            header.textContent = resourse.name;
        }
        liElement.appendChild(connectorLine);
        liElement.appendChild(header);
        ulElemennt.appendChild(liElement);
        container.appendChild(hirLineContainer);
        container.appendChild(ulElemennt);
    } else {
        header.className = CLASS_DIRECT_HEADER;
        header.textContent = resourse;
        container.appendChild(header);
    }

    // liElement.appendChild(connectorLine);
    // liElement.appendChild(header);


    // ulElemennt.appendChild(liElement);

    // container.appendChild(hirLineContainer);
    // container.appendChild(ulElemennt);




    return container;
}

function deleteObjectsFromArray(arrFrom, arrOfDel) {
    var arr = arrFrom;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arrOfDel.length; j++) {
            if (arr[i].name === arrOfDel[j].name && arr[i].location === arrOfDel[j].location) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

function getResoursesByLocation(location, objs) {
    var groups = groupByDirectories(objs);
    var result;
    for (var i = 0; i < groups.length; i++) {
        if (groups[i][0].location === location) {
            result = groups[i];
        }
    }
    return result;
}

function parseResoursesToObjects(resourses) {
    var objs = [];
    for (var i = 0; i < resourses.length; i++) {
        objs.push(parseResToObject(resourses[i]));
    }
    return objs;
}

function getGrouopLocation(group) {
    return group[0].location;
}

function groupHierarchy(objs) {
    var groups = groupByDirectories(objs);
    var roots = getElementsWithLocation('ROOT', objs);
    if (objs === roots) {
        for (var i = 0; i < objs.length; i++) {
            objs[i]
        }
    } else if (objs !== roots) {

    }
}

function findFirstHirarchyElement(obj, objs) {
    var next;
    if (obj.location !== 'ROOT') {
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].name == obj.location) {
                next = objs[i]
            }
        }

        next = findFirstHirarchyElement(next, objs);
    } else {
        return obj;
    }

    return next;
}

function parseResToDictionary(res) {
    var resTexts = getLiTexts(res);
    var keys = [];
    var values = [];

    for (var i = 0; i < resTexts.length; i++) {
        var text = resTexts[i].replace(/ +/g, " ");
        var key = text.split(' ')[0];
        var val = text.split(' ')[1];
        keys.push(key);
        values.push(val);
    }
    return [keys, values];
}

function parseResToObject(res) {
    var name = getResourseName(res);
    var dict = parseResToDictionary(res);
    return new Resurse(name, dict[1][0], dict[1][1], dict[1][2]);
}

function getResourseName(res) {
    return res.firstElementChild.textContent;
}

function getLiTexts(resource) {
    var arr = [];
    var lies = resource.getElementsByTagName('li');
    for (var i = 0; i < lies.length; i++) {
        var two = lies[i].firstElementChild.textContent + lies[i].textContent.replace(lies[i].firstElementChild.textContent, '').replace(/\r|\n/g, '');
        arr.push(two);
    }
    return arr;
}