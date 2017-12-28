// var Helper = function(ResObjs, rootName) {
//     this.resourses = resObjs;
//     this.rootName = rootName;
//     this.groups = groupByDirectories(ResObjs);

    function groupByDirectories(objs) {
        var groups = [];
        var arrHelp = objs;
        var cachedId = [];

        for (var i = 0; i < arrHelp.length; i++) {
            var id = arrHelp[i].location;
            if (cachedId.indexOf(id) === -1) {
                var group = arrHelp[i].getElementsWithThisLocation(arrHelp);
                groups.push(group);
                cachedId.push(id);
            }
        }

        return groups;
    }

//     function getGrouopLocation(group) {
//         return group[0].location;
//     };

//     this.groupHierarchy = function(roots, groups) {
//         var hir;
//         var dirs = groups;
//         //var arrHelp = roots;
//         var subDirs = [];
//         if (roots.length !== 0) {
//             for (var i = 0; i < roots.length; i++) {
//                 for (var j = 0; j < dirs.length; j++) {
//                     if (roots[i].location === getGrouopLocation(dirs[j])) {
//                         var newRoot = dirs[j];
//                         var newGroups = dirs.splice(j, 1);
//                         hir = this.groupHierarchy(newRoot, newGroups);
//                     }
//                 }
//             }

//         }
//         return hir;
//     };
// }

// function buildHirarchy(resourses,rootObj){
//     var deep = etElementsWithLocation(rootObj);
//     var hir;
//     for (var i = 0; i < deep.length; i++) {
//         deep[i]
//     }
// }

// function findLastHirarchyElements(rootObj, objs) {
//     var groups = groupByDirectories(objs);
//     var deep;
//     if (Array.isArray(rootObj)) {
//         for (var i = 0; i < rootObj.length; i++) {
//             var roots = getElementsWithLocation(rootObj[i].name, objs);
//             if (roots.length !== 0) {
//                 for (var i = 0; i < roots.length; i++) {
//                     for (var j = 0; j < groups.length; j++) {
//                         if (groups[j][0].location == roots[i].name) {
//                             deep = groups[j];
//                         }
//                     }

//                     deep = findLastHirarchyElements(deep, objs);
//                 }
//             } else {
//                 return rootObj;
//             }
//         }
//     } else {
//         var roots = getElementsWithLocation(rootObj.name, objs);
//         if (roots.length !== 0) {
//             for (var i = 0; i < roots.length; i++) {
//                 for (var j = 0; j < groups.length; j++) {
//                     if (groups[j][0].location == roots[i].name) {
//                         deep = groups[j];
//                     }
//                 }

//                 deep = findLastHirarchyElements(deep, objs);
//             }
//         } else {
//             return rootObj;
//         }
//     }
//     return deep;
// }

// function pushElementOrArray(obj) {

//     var hir = [];
//     if (Array.isArray(obj)) {
//         for (var i = 0; i < obj.length; i++) {
//             hir.push(obj[i])
//         }
//     } else {
//         hir.push(obj);
//     }


//     return hir;
// }

function groupByDirectories(objs) {
    var groups = [];
    var arrHelp = objs;
    var cachedId = [];

    for (var i = 0; i < arrHelp.length; i++) {
        var id = objs[i].location;
        if (cachedId.indexOf(id) === -1) {
            var group = arrHelp[i].getElementsWithThisLocation(arrHelp);
            groups.push(group);
            cachedId.push(id);
        }
    }

    return groups;
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

function getElementsWithLocation(location, objs) {
    var arr = [];
    for (var i = 0; i < objs.length; i++) {
        var res = objs[i];
        if (location == res.location) {
            arr.push(res);
        }
    }
    return arr;
}

// function getElementsWithNames(name, objs) {
//     var arr = [];
//     for (var i = 0; i < objs.length; i++) {
//         var res = objs[i];
//         if (name == res.name) {
//             arr.push(objs[i]);
//         }
//     }
//     return arr;
// }

// function getElementsWithType(type,resourses){
//  var arr = [];
//  for (var i = 0; i < resourses.length; i++) {
//      var dict = parseResToDictionary(resourses[i]);
//      if(type == dict[1][0]){
//          arr.push(resourses[i]);
//      }
//  }
//  return arr;
// }
