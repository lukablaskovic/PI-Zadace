let zagrade = function (s) {
  var stack = [];
  let temp;
  for (let i = 0; i < s.length; i++) {
    top = stack[stack.length - 1];
    console.log(s[i]);
    if (s[i] == "[" || s[i] == "{" || s[i] == "(") {
      stack.push(s[i]);
      continue;
    }
    if (!stack.length) return false;
    switch (s[i]) {
      case ")":
        temp = stack[stack.length - 1];
        stack.pop();
        if (temp == "{" || temp == "[") return false;
        break;

      case "}":
        temp = stack[stack.length - 1];
        stack.pop();
        if (temp == "(" || temp == "[") return false;
        break;

      case "]":
        temp = stack[stack.length - 1];
        stack.pop();
        if (temp == "(" || temp == "{") return false;
        break;
    }
    if (stack.length) return true;
    else return false;
  }
};
console.log(zagrade("[()]()()"));
console.log(zagrade("{[((()))]}"));
console.log(zagrade("({)}"));
