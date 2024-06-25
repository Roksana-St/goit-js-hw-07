`use string`

const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);


categories.forEach(category => {
    const item = category.querySelector("h2").textContent;
    const element = category.querySelectorAll("ul li").length;
    console.log(`Category: ${item} \nElements: ${element}`);
})