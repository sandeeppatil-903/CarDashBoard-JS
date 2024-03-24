((e) => {
  const { Markmap: r } = e();
  window.mm = r.create("svg#phases", null, {
    t: "root",
    d: 0,
    v: "",
    c: [
      {
        t: "heading",
        d: 1,
        v: "Research",
        c: [
          {
            t: "heading",
            d: 2,
            v: "External",
            c: [
              {
                t: "heading",
                d: 3,
                v: "B2C",
                format: "html",
                c: [
                  {
                    t: "heading",
                    d: 4,
                    v: "<h2>Online</h2>",
                    format: "html",
                  },
                  {
                    t: "heading",
                    d: 4,
                    v: "<h2>Interview</h2>",
                  },
                  {
                    t: "heading",
                    d: 4,
                    v: "<h2>Public Data</h2>",
                  },
                  {
                    t: "heading",
                    d: 4,
                    v: "<h2>Health</h2>",
                  },
                ],
              },
              {
                t: "heading",
                d: 3,
                v: "B2C",
                c: [],
              },
            ],
          },
          {
            t: "heading",
            d: 2,
            v: "Internal",
            c: [],
          },
        ],
      },
      {
        t: "heading",
        d: 1,
        v: "Planning",
      },
      {
        t: "heading",
        d: 1,
        v: "Desiging",
      },
      {
        t: "heading",
        d: 1,
        v: "Manufacturing",
      },
      {
        t: "heading",
        d: 1,
        v: "Sales/Marketing",
      },
    ],
  });

  document.addEventListener("mouseover", function (event) {
    if (event.target.tagName.toLowerCase() === "h2") {
      const popup = document.createElement("div");
      popup.className = "popup";

      const image = document.createElement("img");
      image.src = "charts.png";
      popup.appendChild(image);

      const ul = document.createElement("ul");

      const listItem1 = document.createElement("li");
      listItem1.textContent = "Total Reviews";
      ul.appendChild(listItem1);

      const listItem2 = document.createElement("li");
      listItem2.textContent = "Positive Reviews";
      ul.appendChild(listItem2);

      const listItem3 = document.createElement("li");
      listItem3.textContent = "Negative Reviews";
      ul.appendChild(listItem3);

      const listItem4 = document.createElement("li");
      listItem4.textContent = "Comments";
      ul.appendChild(listItem4);

      popup.appendChild(ul);

      const h2Rect = event.target.getBoundingClientRect();
      popup.style.top = h2Rect.top + "px";
      popup.style.left = h2Rect.right + "10px";

      document.body.appendChild(popup);

      popup.classList.add("show");
    }
  });

  document.addEventListener("mouseout", function (event) {
    if (event.target.tagName.toLowerCase() === "h2") {
      const popup = document.querySelector(".popup");
      if (popup) {
        popup.remove();
      }
    }
  });
})(() => window.markmap);
