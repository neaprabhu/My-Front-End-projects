// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
//-------
// For Cases of Wrong node Type , return "Wrong Node Type" String
// For Cases of Incorrect Index, return "Wrong Index" String
// For Correct Cases, return the "nodeName" property of that node

function showChild (node, index){
// TODO: add code here
  if(node.nodeType !== document.ELEMENT_NODE) {
    return "Wrong Node Type";
  }
  if(index < 0 || index >= node.childNodes.length) {
    return "Wrong Index";
  }
  return node.childNodes[index].nodeName;
};
