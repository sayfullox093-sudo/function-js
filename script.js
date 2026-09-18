const food = [

    {
        id: 1,
        mazz: "Макси Бокс",
        name: "Макси Бокс Традиция",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F78199004-19e7-479a-bfbc-247629a015e8&w=1920&q=75",
        price: 32000,
        category: "maksibox",
        count: 1.
    },
    {
        id: 2,
        name: "Макси Бокс Популярный",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Feb0f64ba-e9f4-4373-863c-02a4620013f7&w=1920&q=75",
        price: 35000,
        category: "maksibox",
        count: 1.
    },
    {
        id: 3,
        name: "Макси бокс Ретро",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd78ad5ad-9634-4502-8e3d-f0c96d0aa323&w=1920&q=75",
        price: 35000,
        category: "maksibox",
        count: 1.
    },
    {
        id: 4,
        name: "Макси Бокс Тренд",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7c408517-033f-41f9-a563-3d56410e001a&w=1920&q=75",
        price: 30000,
        category: "maksibox",
        count: 1.
    },

    // Klab-sendvich----<<<<<

    {
        id: 5,
        name: "Клаб Сэндвич куриный",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1c9ddfa3-0208-4744-896a-05cf01b292cb&w=1920&q=75",
        price: 25000,
        category: "sendvich",
        count: 1.
    },
    {
        id: 6,
        name: "Сэндвич Classic",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd5306c3e-c2d9-4a51-980d-94b5dd0736cd&w=1920&q=75",
        price: 5000,
        category: "sendvich",
        count: 1.
    },
    {
        id: 7,
        name: "Клаб Сэндвич куриный",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd5306c3e-c2d9-4a51-980d-94b5dd0736cd&w=1920&q=75",
        price: 29000,
        category: "sendvich",
        count: 1.
    },
    {
        id: 8,
        name: "Сэндвич Classic",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1c9ddfa3-0208-4744-896a-05cf01b292cb&w=1920&q=75",
        price: 15000,
        category: "sendvich",
        count: 1.
    },
    //    Lavash----<<<<<
    {
        id: 9,
        name: "Лаваш",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7c6ef844-be8a-4b89-bed0-01841f744594&w=1920&q=75",
        price: 25000,
        category: "lavash",
        count: 1.
    },
    {
        id: 10,
        name: "Лаваш мини",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F607d839e-4912-4809-a90c-cc125f555851&w=1920&q=75",
        price: 5000,
        category: "lavash",
        count: 1.
    },
    {
        id: 11,
        name: "Лаваш куриный",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7c6ef844-be8a-4b89-bed0-01841f744594&w=1920&q=75",
        price: 29000,
        category: "lavash",
        count: 1.
    },
    {
        id: 12,
        name: "Лаваш куриный",
        image: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7c6ef844-be8a-4b89-bed0-01841f744594&w=1920&q=75",
        price: 11500,
        category: "lavash",
        count: 1.
    },
]


const parent = document.getElementById("parent")


food.forEach(item => {
const div = document.createElement("div")

div.innerHTML = `
<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${item.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.name}</h2>
    <div class="badge badge-error ${item.price > 25000 ? 'block' : 'hidden'}">Top</div>

    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn ${item.price > 25000 ? "btn-primary" : "btn-accent"}">${item.price} som</button>
    </div>
  </div>
</div>

`

  parent.append(div)

})