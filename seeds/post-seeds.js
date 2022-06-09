const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    post_url: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    techs: "Javascript, React, HTML, CSS",
    budget: 50000,
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "https://nasa.gov/donec.json",
    techs: "Javascript, React, HTML, CSS",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url:
      "https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
    techs: "Javascript, React, HTML, CSS",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "http://desdev.cn/enim/blandit/mi.jpg",
    techs: "Javascript, React, HTML, CSS",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "http://google.ca/nam/nulla/integer.aspx",
    techs: "Javascript, React, HTML, CSS",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "https://stanford.edu/consequat.png",
    techs: "Javascript, React, HTML, CSS",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "http://edublogs.org/non/ligula/pellentesque.js",
    techs: "Javascript, React, HTML, CSS",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "http://ucla.edu/consequat/nulla.html",
    techs: "Javascript, React, HTML, CSS",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx",
    techs: "Javascript, React, HTML, CSS",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "https://reverbnation.com/ligula/sit.jpg",
    techs: "Javascript, React, HTML, CSS",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "http://china.com.cn/lectus/vestibulum.json",
    techs: "Javascript, React, HTML, CSS",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url:
      "http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
    techs: "Javascript, React, HTML, CSS",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    techs: "Javascript, React, HTML, CSS",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "https://lycos.com/natoque/penatibus/et.html",
    techs: "Javascript, React, HTML, CSS",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "https://gmpg.org/lorem.jpg",
    techs: "Javascript, React, HTML, CSS",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "https://paginegialle.it/mattis/egestas.jsp",
    techs: "Javascript, React, HTML, CSS",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "http://wikia.com/turpis/eget.jpg",
    techs: "Javascript, React, HTML, CSS",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "https://shareasale.com/quis.json",
    techs: "Javascript, React, HTML, CSS",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    techs: "Javascript, React, HTML, CSS",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    title_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium maxime temporibus quaerat in excepturi laboriosam repellendus odit perspiciatis aliquam, ipsa animi aut, fugit voluptas natus aperiam nulla deleniti explicabo!Lorem",
    budget: 50000,
    post_url: "https://java.com/at/nibh/in.png",
    techs: "Javascript, React, HTML, CSS",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
