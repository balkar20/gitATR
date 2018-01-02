// function buildHtmlHierarchy(resourses, rootName, container) {
//     var isRoot = rootName === "ROOT";
//     if (isRoot) {
//         var box = document.createElement("div");
//         box.className = "tree-wrapper";
//         var spanHead = document.createElement("span");
//         spanHead.className = "header";
//         spanHead.innerText = "ROOT";
//         container.appendChild(spanHead);
//         container.appendChild(box);
//         container.app
//     }
//     //var box = document.createElement("div");
//     var filtred = resourses.filter((el) => {
//         return el.location === rootName;
// });
//     var updatedResourses = deleteObjectsFromArray(resourses, filtred);
//     if (filtred.length === 0) {
//         // return container;
//     } else {
//         var childResContainer;
//         filtred.forEach(function (el) {
//             var childResContainer;
//             if (isRoot) {
//                 childResContainer = container.appendChild(drawDiv-WarapperForElement(el));
//                 buildHtmlHierarchy(resourses, el.name, container);
//             } else {
//                 childResContainer = container.lastElementChild.firstElementChild.appendChild(drawDiv-WarapperForElement(el));
//                 buildHtmlHierarchy(updatedResourses, el.name, childResContainer);
//             }
//
//         });
//     }
//
//     // return container;
// }