const { ObjSize } = require("./utils.js");
var menuList;

exports.setMenuList = (obj) => {
  foodList = obj;
  console.log("[Menu] set success");
};

exports.randomMenu = () => {
  let max = ObjSize(menuList);
  if (max === 0) {
    return false;
  } else {
    return menuList[Math.floor(Math.random() * max)];
  }
};
