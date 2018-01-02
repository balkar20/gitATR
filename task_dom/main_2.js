document.addEventListener("DOMContentLoaded", function () {


    var Resourse = function (name, type, size, location) {
        this.name = name;
        this.type = type;
        this.location = location;

        this.getElementsWithThisLocation = function (objs) {
            var arr = objs.filter((el) => {
                return this.name === el.location;
            });
            return arr;
        };
        this.getSize = function () {
            return size;
        };
    };

    function parseResoursesToObjects(resourses) {
        var objs = [];
        for (var i = 0; i < resourses.length; i++) {
            objs.push(parseResToObject(resourses[i]));
        }
        return objs;
    }

    function parseResToDictionary(res) {
        var resTexts = getLiTexts(res);
        var keys = [];
        var values = []
        var dict;

        for (var i = 0; i < resTexts.length; i++) {
            var text = resTexts[i].replace(/ +/g, " ");
            var key = text.split(' ')[0];
            var val = text.split(' ')[1];
            keys.push(key);
            values.push(val);
        }
        dict = [keys, values]
        return dict;
    }

    function parseResToObject(res) {
        var name = getResourseName(res);
        var dict = parseResToDictionary(res);
        return new Resourse(name, dict[1][0], dict[1][1], dict[1][2]);
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

    var CLASS_CONNECTOR_LINE = "tree-connector-line";
    var CLASS_HIERARCHY_LINE = "tree-hierarchy-line";
    var CLASS_CONTAINER = "tree-wrapper";
    var CLASS_FILE_HEADER = "file-header";
    var CLASS_DIRECT_HEADER = "header";
    var UL_CLASS = "tree";
    var TYPES = {file: 'F', directory: 'D'};

    function deleteObjectsFromArray(arrFrom, arrOfDel) {
        return arrFrom.filter((el) => {
            return arrOfDel.indexOf(el) === -1;
        });
    }
      // <div class="tree-wrapper">
      //   <div class="tree-hierarchy-line"></div>
      //     <ul class="tree">
    function drawDivWrapperForElement() {
        var container = document.createElement("div");
        container.setAttribute("class", CLASS_CONTAINER);
        var hirLineContainer = document.createElement("div");
        hirLineContainer.setAttribute("class", CLASS_HIERARCHY_LINE);
        var ulElemennt = document.createElement("ul");
        ulElemennt.setAttribute("class", UL_CLASS);
        container.appendChild(hirLineContainer);
        container.appendChild(ulElemennt);
        return container;
    }
    //<li>
       //span connector line
       // span header
    // <li>
    function drawLiElementForObject(resourse) {
         var liContainer = document.createElement("li");
         var treeConnector = document.createElement("span");
         treeConnector.className = CLASS_CONNECTOR_LINE;
         var header = document.createElement("span");
         header.innerText = resourse.name;
        if(resourse.type === "F"){
           header.innerText += " " + "[" + Math.round(resourse.getSize()/1024) + "kb" + "]";
           header.style.fontStyle = "italic";
           header.style.textTransform = "lowercase";
        }
         header.className = CLASS_DIRECT_HEADER;

         liContainer.appendChild(treeConnector);
         liContainer.appendChild(header);
         return liContainer;
     }

    function buildHtmlHierarchy(resourses, rootName, container) {
        var isRoot = rootName === "ROOT";
        if (isRoot && container.children.length === 0) {
            var header = document.createElement("span");
            header.className = CLASS_DIRECT_HEADER;
            header.textContent = rootName;
            container.appendChild(header);
            container.appendChild(drawDivWrapperForElement());
        }else if(container.children.length === 2){
            container.appendChild(drawDivWrapperForElement());
        }
        var filtred = resourses.filter((el) => {
            return el.location === rootName;
    })
        ;
        var updatedResourses = deleteObjectsFromArray(resourses, filtred);
        if (filtred.length === 0) {
        } else {
            filtred.forEach(function (el) {
                if (isRoot) {
                        var rootWrapper = container.lastElementChild;
                        var rootUl = rootWrapper.lastElementChild;
                        var liChild;
                        if(el.getElementsWithThisLocation(updatedResourses)){
                            rootUl.insertBefore(drawLiElementForObject(el), rootUl.firstElementChild);
                            liChild = rootUl.firstElementChild;
                        }else{
                            rootUl.appendChild(drawLiElementForObject(el));
                            liChild = rootUl.lastElementChild;
                        }
                        buildHtmlHierarchy(updatedResourses, el.name, liChild);
                } else {
                    console.log(container.children.length);
                    if(el.getElementsWithThisLocation(resourses) ){
                        var rootWrapper = container.lastElementChild;
                        var rootUl = rootWrapper.lastElementChild;
                        var liChild;
                        if(el.getElementsWithThisLocation(updatedResourses)){
                            rootUl.insertBefore(drawLiElementForObject(el), rootUl.firstElementChild);
                            liChild = rootUl.firstElementChild;
                        }else{
                            rootUl.appendChild(drawLiElementForObject(el));
                            liChild = rootUl.lastElementChild;
                        }
                        if(!liChild.nextElementSibling){
                            var parentHirLine = liChild.parentNode.parentNode.parentNode;
                            console.log("Line height" + parentHirLine.offsetHeight);
                            console.log("li height" + liChild.lastElementChild.offsetHeight);
                            parentHirLine.style.clip = "rect(auto,auto," + parentHirLine.offsetHeight + "px, auto)";
                            console.log("Line height" + parentHirLine.offsetHeight);
                            console.log("li height" + liChild.lastChild.offsetHeight);
                        }
                        buildHtmlHierarchy(updatedResourses, el.name, liChild);
                    }
                }
            });
        }
    }

    (function generateTree() {
        var treeContainer = document.getElementById("tree");
        var resourses = document.getElementsByClassName("resource");

        var objs = parseResoursesToObjects(resourses);
        buildHtmlHierarchy(objs, "ROOT", treeContainer);
        var divLine = document.getElementsByClassName("tree-hierarchy-line");
        var divWrappers = document.getElementsByClassName("tree-wrapper");
        console.log(divWrappers);
        //divLine[0].style.height = divWrappers[0].offsetHeight - 700 + "px";
        console.log(divLine[0].offsetHeight);

        // console.log();
        // console.log();
        // console.log();
        // console.log();
        // console.log();
        // console.log();
    })();


});