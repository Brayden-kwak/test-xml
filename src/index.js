/*
validator's isValidXML function receives a string, checks if a string is a valid xml, and returns a boolean.

<a /> => true
<a></a> => true
<a>test</a> => true
<a><b></b></a> => true
<a></a><b></b> => true

<a> => false
<<a></a> => false
<a><b></a></b> => false

IMPORTANT: Please note that we have our own internal rules about validity.
1. A node cannot contain a node with the same tag. ex) <a><a></a></a> => false
2. A node cannot be followed by a node with the same tag. ex) <a></a><a></a> => false
3. An xml cannot be more than 2 levels deep. ex) <a><b><c><d></d></c></b></a> => false

IMPORTANT: Feel free to use any open source libraries you find necessary. You can use xml parsing libraries as well.
IMPORTANT: Don't worry about XML declaration, node attributes, or unicode characters.

For further examples, please check basic_spec.js file.

DO NOT MODIFY
*/

/*
@param xmlString: a string, possibly a valid xml string
@return boolean;
*/
exports.isValidXML = xmlString => {
  if (xmlString.length === 0) {
    return false;
  }

  const LAngleBracket = [];
  const divideStr = xmlString.split(""); 

  for (let i = 0; i < divideStr.length; i++) { 

    const word = divideStr[i] + divideStr[i + 1]; 
    const copyStr = xmlString.slice(i); 
    const RAngleBracket = copyStr.indexOf(">");  

    if (LAngleBracket.length >= 0) {  
      return false;
    }

    if (word === "<<" || word === ">>") { 
      return false;
    }

    if (word === "</") { 

      const closeBracket = copyStr.slice(2, RAngleBracket);
      const compareLAngleBracket = LAngleBracket.pop(); 

      if (closeBracket !== compareLAngleBracket) { 
        return false;
      }
      
      if (divideStr[i] === "<") {

      const firstBracket = copyStr.slice(1, RAngleBracket);

      if (firstBracket.slice(-1) !== '/') {
        if (LAngleBracket.indexOf(firstBracket) >= 0) {
          return false;
        }
        LAngleBracket.push(firstBracket); 
        if (LAngleBracket.length > 2) { 
          return false;
        }
      }
    }
  }

  return true;
};
