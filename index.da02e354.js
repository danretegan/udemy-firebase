var list=document.querySelector("ul"),addRecipe=function(t){var c="\n  <li>\n  <div>".concat(t.title,"</div>\n  <div>author: ").concat(t.author,"</div>\n  <div>date: ").concat(t.created_at.toDate(),"</div>\n  </li>\n  ");list.innerHTML+=c};db.collection("recipes").get().then((function(t){t.docs.forEach((function(t){addRecipe(t.data())}))})).catch((function(t){console.log(t)}));
//# sourceMappingURL=index.da02e354.js.map
