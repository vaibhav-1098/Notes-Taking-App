const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const text = document.querySelector(".text");
const grid = document.querySelector(".grid");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // create new box
    const newBox = document.createElement("div");

    // add text and classes to the new box
    newBox.innerHTML = `
    <input type="checkbox" class="cursor-pointer scale-125">
    <span class="px-2 font-semibold">${text.value}</span>
    <button class="float-right">
        <i class="fa-solid fa-trash text-rose-600"></i>
    </button>
    <p contenteditable="true">
        ${textarea.value}
    </p>`;

    newBox.classList.add("bg-yellow-300", "h-40", "rounded-md", "overflow-y-auto", "p-2", "text-justify");

    // adding it to grid
    grid.prepend(newBox);

    // checkbox logic
    const checkbox = newBox.querySelector("input");
    checkbox.addEventListener("change", () => {
        newBox.classList.toggle("bg-emerald-300");
    });

    // delete logic
    const binBtn = newBox.querySelector("button");
    binBtn.addEventListener("click", () => {
        if (confirm("Do you want to delete this Note?")) {
            newBox.remove();
        }
    });

    // clear the input
    textarea.value = "";
    text.value = "";
});
