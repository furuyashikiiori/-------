/* スライドメニュー */
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector("#menu-panel");
const menuItems = document.querySelectorAll("#menu-panel li");
const menuOptions = {
  duration: 1400,
  easing: "ease",
  fill: "forwards",
};

//メニューを開く
menuOpen.addEventListener("click", () => {
  menuPanel.animate({ translate: ["100vw", 0] }, menuOptions);
  //リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ["2rem", 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: "ease",
        fill: "forwards",
      }
    );
  });
});

//メニューを閉じる
menuClose.addEventListener("click", () => {
  menuPanel.animate({ translate: [0, "100vw"] }, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({ opacity: [1, 0] }, menuOptions);
  });
});

//CDジャケットリスト
const jaclist = document.querySelector("#jaclist");

const lists = [
  {
    name: "ハッピー猫",
    img: "static/pic/happycat.png",
    status: "貸出中",
  },
  {
    name: "はぁ？猫",
    img: "static/pic/halacat.png",
    status: "貸出不可",
  },
  {
    name: "にゃむにゃむ猫",
    img: "static/pic/nyamucat.png",
    status: "貸出中",
  },
  {
    name: "パクパク猫",
    img: "static/pic/pacpaccat.png",
    status: "貸出可",
  },
  {
    name: "パンチ猫",
    img: "static/pic/panchcat.png",
    status: "貸出可",
  },
  {
    name: "てんてん猫",
    img: "static/pic/tentencat.png",
    status: "貸出中",
  },
];

for (let i = 0; i < lists.length; i++) {
  const { name, img, status } = lists[i];
  const content = `<div><img src="${img}" alt=""><h2>${name}</h2><p>${status}</p></div>`;
  jaclist.insertAdjacentHTML("beforeend", content);
}

//円盤リスト
const dvdlist = document.querySelector("#dvdlist");

const dvdlists = [
  {
    dvdname: "ハッピー猫",
    dvdimg: "static/pic/happycat.png",
    dvdstatus: "貸出中",
  },
  {
    dvdname: "はぁ？猫",
    dvdimg: "static/pic/halacat.png",
    dvdstatus: "貸出不可",
  },
  {
    dvdname: "にゃむにゃむ猫",
    dvdimg: "static/pic/nyamucat.png",
    dvdstatus: "貸出中",
  },
  {
    dvdname: "パクパク猫",
    dvdimg: "static/pic/pacpaccat.png",
    dvdstatus: "貸出可",
  },
  {
    dvdname: "パンチ猫",
    dvdimg: "static/pic/panchcat.png",
    dvdstatus: "貸出可",
  },
  {
    dvdname: "てんてん猫",
    dvdimg: "static/pic/tentencat.png",
    dvdstatus: "貸出中",
  },
];

for (let j = 0; j < dvdlists.length; j++) {
  const { dvdname, dvdimg, dvdstatus } = dvdlists[j];
  const dvdcontent = `<div><img src="${dvdimg}" alt=""><h2>${dvdname}</h2><p>${dvdstatus}</p></div>`;
  dvdlist.insertAdjacentHTML("beforeend", dvdcontent);
}

//雑誌リスト
const blist = document.querySelector("#blist");

const blists = [
  {
    bname: "ハッピー猫",
    bimg: "static/pic/happycat.png",
    bstatus: "貸出中",
  },
  {
    bname: "はぁ？猫",
    bimg: "static/pic/halacat.png",
    bstatus: "貸出不可",
  },
  {
    bname: "にゃむにゃむ猫",
    bimg: "static/pic/nyamucat.png",
    bstatus: "貸出中",
  },
  {
    bname: "パクパク猫",
    bimg: "static/pic/pacpaccat.png",
    bstatus: "貸出可",
  },
  {
    bname: "パンチ猫",
    bimg: "static/pic/panchcat.png",
    bstatus: "貸出可",
  },
  {
    bname: "てんてん猫",
    bimg: "staticpic/tentencat.png",
    bstatus: "貸出中",
  },
];

for (let k = 0; k < blists.length; k++) {
  const { bname, bimg, bstatus } = blists[k];
  const bcontent = `<div><img src="${bimg}" alt=""><h2>${bname}</h2><p>${bstatus}</p></div>`;
  blist.insertAdjacentHTML("beforeend", bcontent);
}
