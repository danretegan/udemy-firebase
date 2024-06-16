var list=document.querySelector("ul"),form=document.querySelector("form"),addRecipe=function(e,t){var n='\n  <li recipe-id="'.concat(t,'">\n  <div>').concat(e.title,"</div>\n  <div><small>author: ").concat(e.author,"</small></div>\n  <div><small>date: ").concat(e.created_at.toDate(),'</small></div>\n  <button class="btn btn-danger btn-sm my-2">delete</button>\n  </li>\n  ');list.innerHTML+=n},deleteRecipe=function(e){document.querySelectorAll("li").forEach((function(t){t.getAttribute("recipe-id")===e&&t.remove()}))};
//! get documents:
db.collection("recipes").onSnapshot((function(e){e.docChanges().forEach((function(e){var t=e.doc;"added"===e.type?addRecipe(t.data(),t.id):"removed"===e.type&&deleteRecipe(t.id)}))})),
//! add documents:
form.addEventListener("submit",(function(e){e.preventDefault();var t=new Date,n={title:form.recipe.value,created_at:firebase.firestore.Timestamp.fromDate(t)};db.collection("recipes").add(n).then((function(){console.log("recipe added!")})).catch((function(e){console.log(e)}))})),
//! deleting data:
list.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName){var t=e.target.parentElement.getAttribute("recipe-id");db.collection("recipes").doc(t).delete().then((function(){console.log("recipe deleted!")})).catch((function(e){console.log(e)}))}}));
//# sourceMappingURL=index.34a68b3f.js.map
