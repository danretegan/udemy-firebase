var list=document.querySelector("ul"),form=document.querySelector("form"),addRecipe=function(e){var t="\n  <li>\n  <div>".concat(e.title,"</div>\n  <div>author: ").concat(e.author,"</div>\n  <div>date: ").concat(e.created_at.toDate(),"</div>\n  </li>\n  ");list.innerHTML+=t};
//! get documents:
db.collection("recipes").get().then((function(e){e.docs.forEach((function(e){addRecipe(e.data())}))})).catch((function(e){console.log(e)})),
//! add documents:
form.addEventListener("submit",(function(e){e.preventDefault();var t=new Date,c={title:form.recipe.value,created_at:firebase.firestore.Timestamp.fromDate(t)};db.collection("recipes").add(c).then((function(){console.log("recipe added!")})).catch((function(e){console.log(e)}))}));
//# sourceMappingURL=index.a7fc132b.js.map
