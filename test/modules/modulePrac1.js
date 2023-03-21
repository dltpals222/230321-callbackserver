export function makeTag(parentName, tagName, tagNum){
  for(let i = 0; i<tagNum;i++){
    let element = document.createElement(tagName);
    parentName.appendChild(element);
  }
}

