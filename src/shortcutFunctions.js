// create element with type, class and text content built-in
let generate =  (element, elementClass, text) => {
    let created = document.createElement(element);
    created.classList.add(elementClass);
    created.textContent = text;
    return {created}
}

let generateMenu = (...listItems) => {
    let nav = generate("nav", "navbar");
    let navNode = nav.created;
    let menu = generate("ul", "menu");
    navNode.appendChild(menu.created);
    let counter = 1;
    listItems.forEach (e => {
        let menuItem = document.createElement("li");
        menuItem.classList.add(`menuItem`);
        counter += 1;
        menuItem.textContent = `${e}`;
        menu.created.appendChild(menuItem);
    })
    console.log(navNode)
    return {navNode};
}

function toBody (element) {
    let bodyContent = document.querySelector("#content");
    let elementToAppend = element;
    bodyContent.appendChild(elementToAppend); 
}

export {generate, toBody, generateMenu}