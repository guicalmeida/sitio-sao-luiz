// create element with type, class and text content built-in
function generate (element, elementClass, text) {
    let created = document.createElement(element);
    if (elementClass != undefined){
        created.classList.add(elementClass);
    }
    created.textContent = text;
    return (created);
}

// create nav menu with ul nested and as many items as needed
function generateMenu (...listItems) {
    let menu = generate("ul", "menu");
    let nav = generate("nav", "navbar");
    let count = 1;
    listItems.forEach (a => {
        let menuItem = generate("li", "menuItem", `${a}`);
        menuItem.setAttribute("id", `item${count}`);
        count += 1;
        menu.appendChild(menuItem);
    })
    nav.appendChild(menu);
    return nav;
}

// append element to Body's content div
function renderElement (element) {
    let bodyContent = document.querySelector("#content");
    let elementToAppend = element;
    bodyContent.appendChild(elementToAppend); 
}

// append multiple childs to an element
function multiAppend(parent, ...childs){
    childs.forEach (e => {
        parent.appendChild(e);
    })
    return parent;
}

//Change tabs
function changeTab(...functionsToRender) {
    let contentDiv = document.querySelector("#content");
    if (!contentDiv.firstElementChild.isEqualNode(functionsToRender[0])) {
        contentDiv.innerHTML = "";
        functionsToRender.forEach(e => {
            renderElement(e);
        })
    } 
}
export {generate, renderElement, generateMenu, multiAppend, changeTab}