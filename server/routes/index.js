const indexData = {
  topBar: [
    {
      id: 0,
      name: "推荐",
    },
    {
      id: 1,
      name: "运动户外",
    },
    {
      id: 2,
      name: "服饰内衣",
    },
    {
      id: 3,
      name: "鞋靴箱包",
    },
    {
      id: 4,
      name: "美妆个护",
    },
    {
      id: 5,
      name: "家居数码",
    },
    {
      id: 6,
      name: "食品母婴",
    },
  ],
  swiperList: [
    {
      imgUrl: "../../static/image/swiper1.jpg",
    },
    {
      imgUrl: "../../static/image/swiper2.jpg",
    },
    {
      imgUrl: "../../static/image/swiper3.jpg",
    },
  ],
  recommendList: [
    {
      bigUrl: "../../static/image/Children.jpg",
      data: [
        {
          imgUrl: "../../static/image/Children1.jpg",
        },
        {
          imgUrl: "../../static/image/Children2.jpg",
        },
        {
          imgUrl: "../../static/image/Children3.jpg",
        },
      ],
    },
    {
      bigUrl: "../../static/image/Furnishing.jpg",
      data: [
        {
          imgUrl: "../../static/image/Furnishing1.jpg",
        },
        {
          imgUrl: "../../static/image/Furnishing2.jpg",
        },
        {
          imgUrl: "../../static/image/Furnishing3.jpg",
        },
      ],
    },
  ],
  commodityList: [
    {
      id: 1,
      imgUrl: "../../static/image/commodity1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 2,
      imgUrl: "../../static/image/commodity2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 488,
      currentPrice: 233,
      discount: 3.1,
    },
    {
      id: 3,
      imgUrl: "../../static/image/commodity3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 4,
      imgUrl: "../../static/image/commodity4.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 322,
      currentPrice: 144,
      discount: 3.2,
    },
  ],
};

var express = require("express");
var router = express.Router();

// 首页首次加载
router.get("/api/index_list/0/data/1", (req, res, next) => {
  res.send({
    code: 0,
    data: indexData,
  });
});

// 首页第一次下拉
router.get("/api/index_list/0/data/2", (req, res, next) => {
  res.send({
    code: 0,
    data: {
      commodityList: indexData.commodityList,
    },
  });
});

// 首页第二次下拉
router.get("/api/index_list/0/data/3", (req, res, next) => {
  res.send({
    code: 0,
    data: {
      commodityList: indexData.commodityList,
    },
  });
});

const sportsData = {
  banner: {
    imgUrl: "../../static/image/banner1.jpg",
  },
  icons: [
    {
      imageUrl: "../../static/image/icons1.png",
      name: "运动户外",
    },
    {
      imageUrl: "../../static/image/icons2.png",
      name: "运动户外",
    },
    {
      imageUrl: "../../static/image/icons3.png",
      name: "运动户外",
    },
    {
      imageUrl: "../../static/image/icons4.png",
      name: "运动户外",
    },
    {
      imageUrl: "../../static/image/icons5.png",
      name: "运动户外",
    },
    {
      imageUrl: "../../static/image/icons6.png",
      name: "运动户外",
    },
    {
      imageUrl: "../../static/image/icons7.png",
      name: "运动户外",
    },
    {
      imageUrl: "../../static/image/icons8.png",
      name: "运动户外",
    },
  ],
  hot: [
    {
      id: 1,
      imgUrl: "../../static/image/hot1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 2,
      imgUrl: "../../static/image/hot2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 488,
      currentPrice: 233,
      discount: 3.1,
    },
    {
      id: 3,
      imgUrl: "../../static/image/hot3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
  ],
  shopList: [
    {
      id: 1,
      imgUrl: "../../static/image/shop1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 2,
      imgUrl: "../../static/image/shop2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 3,
      imgUrl: "../../static/image/shop3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 4,
      imgUrl: "../../static/image/shop4.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 5,
      imgUrl: "../../static/image/shop1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 6,
      imgUrl: "../../static/image/shop2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 7,
      imgUrl: "../../static/image/shop3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 8,
      imgUrl: "../../static/image/shop4.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
  ],
  commodityList: [
    {
      id: 1,
      imgUrl: "../../static/image/commodity1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 2,
      imgUrl: "../../static/image/commodity2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 488,
      currentPrice: 233,
      discount: 3.1,
    },
    {
      id: 3,
      imgUrl: "../../static/image/commodity3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 4,
      imgUrl: "../../static/image/commodity4.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 322,
      currentPrice: 144,
      discount: 3.2,
    },
  ],
};
router.get("/api/index_list/1/data/1", (req, res, next) => {
  res.send({
    code: 0,
    data: sportsData,
  });
});
router.get("/api/index_list/1/data/2", (req, res, next) => {
  res.send({
    code: 0,
    data: {
      commodityList: sportsData.commodityList,
    },
  });
});
router.get("/api/index_list/1/data/3", (req, res, next) => {
  res.send({
    code: 0,
    data: {
      commodityList: sportsData.commodityList,
    },
  });
});

const clothData = {
  banner: {
    imgUrl: "../../static/image/banner1.jpg",
  },
  icons: [
    {
      imageUrl: "../../static/image/icons1.png",
      name: "服饰内衣",
    },
    {
      imageUrl: "../../static/image/icons2.png",
      name: "服饰内衣",
    },
    {
      imageUrl: "../../static/image/icons3.png",
      name: "服饰内衣",
    },
    {
      imageUrl: "../../static/image/icons4.png",
      name: "服饰内衣",
    },
    {
      imageUrl: "../../static/image/icons5.png",
      name: "服饰内衣",
    },
    {
      imageUrl: "../../static/image/icons6.png",
      name: "服饰内衣",
    },
    {
      imageUrl: "../../static/image/icons7.png",
      name: "服饰内衣",
    },
    {
      imageUrl: "../../static/image/icons8.png",
      name: "服饰内衣",
    },
  ],
  hot: [
    {
      id: 1,
      imgUrl: "../../static/image/hot1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 2,
      imgUrl: "../../static/image/hot2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 488,
      currentPrice: 233,
      discount: 3.1,
    },
    {
      id: 3,
      imgUrl: "../../static/image/hot3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
  ],
  shopList: [
    {
      id: 1,
      imgUrl: "../../static/image/shop1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 2,
      imgUrl: "../../static/image/shop2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 3,
      imgUrl: "../../static/image/shop3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 4,
      imgUrl: "../../static/image/shop4.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 5,
      imgUrl: "../../static/image/shop1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 6,
      imgUrl: "../../static/image/shop2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 7,
      imgUrl: "../../static/image/shop3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 8,
      imgUrl: "../../static/image/shop4.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
  ],
  commodityList: [
    {
      id: 1,
      imgUrl: "../../static/image/commodity1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 2,
      imgUrl: "../../static/image/commodity2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 488,
      currentPrice: 233,
      discount: 3.1,
    },
    {
      id: 3,
      imgUrl: "../../static/image/commodity3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 4,
      imgUrl: "../../static/image/commodity4.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 322,
      currentPrice: 144,
      discount: 3.2,
    },
  ],
};
router.get("/api/index_list/2/data/1", (req, res, next) => {
  res.send({
    code: 0,
    data: clothData,
  });
});
router.get("/api/index_list/2/data/2", (req, res, next) => {
  res.send({
    code: 0,
    data: {
      commodityList: clothData.commodityList,
    },
  });
});
router.get("/api/index_list/2/data/3", (req, res, next) => {
  res.send({
    code: 0,
    data: {
      commodityList: clothData.commodityList,
    },
  });
});
router.get("/api/index_list/3/data/1", (req, res, next) => {
  res.send({
    code: 0,
    data: sportsData,
  });
});
router.get("/api/index_list/4/data/1", (req, res, next) => {
  res.send({
    code: 0,
    data: sportsData,
  });
});
router.get("/api/index_list/5/data/1", (req, res, next) => {
  res.send({
    code: 0,
    data: sportsData,
  });
});
router.get("/api/index_list/6/data/1", (req, res, next) => {
  res.send({
    code: 0,
    data: clothData,
  });
});

const searchData = {
  commodityList: [
    {
      id: 1,
      imgUrl: "../../static/image/commodity1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 2,
      imgUrl: "../../static/image/commodity2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 488,
      currentPrice: 233,
      discount: 3.1,
    },
    {
      id: 3,
      imgUrl: "../../static/image/commodity3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 4,
      imgUrl: "../../static/image/commodity4.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 322,
      currentPrice: 144,
      discount: 3.2,
    },
    {
      id: 5,
      imgUrl: "../../static/image/commodity1.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 6,
      imgUrl: "../../static/image/commodity2.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 488,
      currentPrice: 233,
      discount: 3.1,
    },
    {
      id: 7,
      imgUrl: "../../static/image/commodity3.jpg",
      name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
      originPrice: 659,
      currentPrice: 299,
      discount: 5.2,
    },
    {
      id: 8,
      imgUrl: "../../static/image/commodity4.jpg",
      name: "璃音",
      originPrice: 322,
      currentPrice: 144,
      discount: 3.2,
    },
  ],
};
router.get("/api/search_list/data", (req, res, next) => {
  console.log(req.query);
  const { searchText, sortField, sortOrder } = req.query;
  res.send({
    code: 0,
    data: searchData.commodityList.filter((item) =>
      item.name.includes(searchText)
    ),
  });
});
module.exports = router;
