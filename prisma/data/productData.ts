const getRandom = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const sneakers = [
  {
    name: `Sneakers 1`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next-product/2022/10/17/a620601f406a4bddb391cdf39946906c_20221017144850.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 2`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next-product/2022/10/17/7834173e06224079b2d5b85842468ece_20221017164841.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 3`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next-product/2022/12/29/9059ec3d1d784aba9fab4f7c9b3033a7_20221229102346.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 4`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next-product/2020/09/03/f75a67c02d1b4d7c9922848a67fab206_20200903173744.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 5`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next-product/2018/10/31/79b4571b392742dc990716d1f41cef4a_20181031215514.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 6`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next-product/2021/03/18/7cdab4b1837045f09e6f1a2197eb46c1_20210318171048.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 7`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next_product/2022/12/16/432ec731-0d01-4a1a-8fb4-b141f2cbaab1_20221216114701.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 8`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next-product/2020/01/17/10c07fdc217d4193ae26949659f23d64_20200117144623.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 9`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next-product/2022/12/13/f5971cdf1c1745dcbc8f8e1d7b18f417_20221213140118.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 10`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://img.29cm.co.kr/next-product/2022/10/11/34463819a30049438a6fe2a5141a0f36_20221011135008.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
]

export const tshirts = [
  {
    name: `T-Shirt 1`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next-product/2021/12/23/fff05890b8f74982abe2a676715e2263_20211223095158.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 2`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next_product/2022/03/17/b3afe3e4-b490-4ed4-98ce-6b26ff35ab8e_20220317122908.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 3`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next-product/2022/05/27/abace912ae3f4dae908d29bdad0d6bf4_20220527154814.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 4`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next-product/2022/05/27/52b9e7c6c2cd4bc2a7fa592b2b202520_20220527162228.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 5`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next_product/2022/05/18/613e0ffa-4ae4-4e7e-a13d-797e7d03bde0_20220518164519.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 6`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next-product/2021/08/11/f173ca3c2116463591924f5fd04d8183_20210811103031.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 7`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next-product/2022/02/16/500365685e7d413086cf3ad203a76504_20220216110345.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 8`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next-product/2022/11/10/e29ddadd5c6742a28fcc3045889c2d5c_20221110095110.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 9`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next-product/2022/09/12/0d17bc2dee53436f84e3fedbd9ee003e_20220912194912.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 10`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://img.29cm.co.kr/next-product/2022/05/27/abc5c5f89fda4aaebae8786ded07dc33_20220527155408.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
]

export const pants = [
  {
    name: `Pants 1`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2022/11/30/9b694d4c81904230901608dbf7fbdb8c_20221130100853.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 2`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2021/03/09/03f80b1f0f3b4c8e9a1d8f9586886196_20210309172858.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 3`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2022/11/24/15e78e73be4e49f1bf5fd85d55000adb_20221124093225.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 4`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2022/11/28/a1d3bbbddf494bb8bd1dbce9f77309ba_20221128190605.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 5`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2021/10/18/4d8bb459cc5146babd58d808e2b7e709_20211018130816.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 6`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2021/10/07/97eb51bce6354e1d8a622b1180d2192b_20211007184830.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 7`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2021/03/05/c489df0761ea4ce4a5c42970224bd6dc_20210305143016.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 8`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2021/11/26/3d33baf0718b4e1a91d20370904c218e_20211126172915.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 9`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2022/10/07/4ec9286e13334e7c85fc96d9e56ee723_20221007141345.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 10`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://img.29cm.co.kr/next-product/2021/10/07/54b10ec4100a4345b902e85784bd36f0_20211007184519.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
]

export const caps = [
  {
    name: `Cap 1`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next-product/2022/12/06/f1202e3923b34ffea6983d469395f77b_20221206202105.png?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 2`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next-product/2022/09/14/224aedd9944b458987de17ba532a4852_20220914163544.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 3`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next-product/2022/12/06/32d76c42b81a4508a752af0ec07f3694_20221206200709.png?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 4`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next_product/2022/10/26/ac902f87-0c90-41a5-bbfc-7ef2a7b86a44_20221026133127.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 5`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next-product/2021/09/28/a4e93472abb34a6d8d53319d2f85d842_20210928234705.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 6`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next-product/2021/01/08/8399843cab4f4ce4b399508c1ee018ab_20210108135813.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 7`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next-product/2021/09/10/3eec55e2b13447a0835f9713e70343b2_20210910220431.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 8`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next-product/2022/10/07/b3c49bc617104684abea3d4d4107b512_20221007141927.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 9`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next-product/2022/10/31/fb1ee8d92fa74997b725a9fc6bba027b_20221031172354.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 10`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://img.29cm.co.kr/next-product/2020/09/07/e627c77a75544c2fbf626ca8b7650acd_20200907183633.jpg?width=400`,
    price: getRandom(300000, 100000),
  },
]

export const hoodies = [
  {
    name: `Hoodie 1`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/10/27/84ecdf73bcf04a3d9a800ecea694c405_20221027213533.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 2`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/08/29/d9e70f2558ef4f9ca910505e8376ded8_20220829154542.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 3`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/09/01/f18af30d979b47209cc06b9dfbc14c0a_20220901155737.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 4`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/09/02/a95b51b5ceb94db18fd8d999209523aa_20220902103637.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 5`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/11/01/93acac44ffee4b318cdce1758445d573_20221101213924.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 6`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/09/02/9afb7e6ebd334b01b0c6989a5cd37a67_20220902103321.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 7`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/09/13/7bb55fdad9044e709796364bad33a7b2_20220913140932.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 8`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/08/05/9b649b994bcb42e39cba09f3239b7295_20220805112323.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 9`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/11/01/24165310d3a7453a91a2678e92ab5c68_20221101214404.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 10`,
    contents: `{"blocks":[{"key":"fh0gr","text":"본 제품은 오가닉 소재입니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://img.29cm.co.kr/next-product/2022/08/22/876dddb3468f47b9b98c5519d4b2f1d9_20220822144759.jpg?width=500`,
    price: getRandom(300000, 100000),
  },
]
