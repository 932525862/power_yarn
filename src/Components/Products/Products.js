import React from "react";
import "./Productsa.css";

const products = [
  {
    id: 1,
    name: "Mallo",
    description: "A thick and thin cotton slub yarn designed to weave soft and absorbent home textiles, scarves, or apparel. 100% cotton (55% organic).",

    features: [
      { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
      { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
      { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
      { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
      { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
      { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    ],
    imageSrc: "https://www.gistyarn.com/cdn/shop/files/mallo_800x.jpg?v=1649093670",
    imageAlt: "Walnut card tray with white powder coated steel divider and 3 punchout holes.",
  },
  {
    id: 2,
    name: "8/2 Un-Mercerized Cotton Weaving Yarn",
    description: "Absorbent, washable, and durable, this 8/2 cotton is perfect for dish towels, hand towels, placemats, and tablecloths. 100% cotton.",
    
    features: [
      { name: 'Origin', description: 'Made in Japan' },
      { name: 'Material', description: 'Porcelain with a smooth glaze finish' },
      { name: 'Dimensions', description: '4.5" x 3.75" x 3.5"' },
      { name: 'Finish', description: 'Glazed finish' },
      { name: 'Includes', description: 'Set of 2 mugs' },
      { name: 'Considerations', description: 'Dishwasher and microwave safe' },
    ],
    imageSrc: "https://www.gistyarn.com/cdn/shop/files/8_2_Cotton_Weaving_Yarn_Baby_Blue_5000x_0a2fd512-cf38-4217-8e5c-07e2fa69bae4_800x.webp?v=1648759579",
    imageAlt: "Handcrafted porcelain mug with a smooth glaze finish and a comfortable handle.",
  },
  {
    id: 3,
    name: "Sero",
    description: "Soft, luxurious, and beginner friendly. Sero is perfect for weaving shawls, scarves, cowls, and other garments.",
   
    features: [
      { name: 'Origin', description: 'Designed by Studio Neat' },
      { name: 'Material', description: 'Solid walnut and maple wood' },
      { name: 'Dimensions', description: '10" x 6" x 2.5"' },
      { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
      { name: 'Includes', description: 'Organizer and 3 divider trays' },
      { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    ],
    imageSrc: "https://www.gistyarn.com/cdn/shop/files/Gist_016-sq_800x.jpg?v=1675988345",
    imageAlt: "Wooden desk organizer with multiple compartments for stationery and accessories.",
  },

  {
    id: 4,
    name: "Ode",
    description: "Easily the softest yarn we make, Ode is spun in Peru from 100% baby alpaca fiber. It is dyed in subtle, melange shades that bring depth to your weaving.",
    
    features: [
      { name: 'Origin', description: 'Made in Japan' },
      { name: 'Material', description: 'Porcelain with a smooth glaze finish' },
      { name: 'Dimensions', description: '4.5" x 3.75" x 3.5"' },
      { name: 'Finish', description: 'Glazed finish' },
      { name: 'Includes', description: 'Set of 2 mugs' },
      { name: 'Considerations', description: 'Dishwasher and microwave safe' },
    ],
    imageSrc: "https://www.gistyarn.com/cdn/shop/files/ode-2_800x.jpg?v=1649093761",
    imageAlt: "Handcrafted porcelain mug with a smooth glaze finish and a comfortable handle.",
  },
  {
    id: 5,
    name: "Beam",
    description: "A foundational yarn available in three sizes, 8/2, 3/2, and 3/4, making it accessible to both new and experienced weavers.",
    
    features: [
      { name: 'Origin', description: 'Made in Japan' },
      { name: 'Material', description: 'Porcelain with a smooth glaze finish' },
      { name: 'Dimensions', description: '4.5" x 3.75" x 3.5"' },
      { name: 'Finish', description: 'Glazed finish' },
      { name: 'Includes', description: 'Set of 2 mugs' },
      { name: 'Considerations', description: 'Dishwasher and microwave safe' },
    ],
    imageSrc: "https://www.gistyarn.com/cdn/shop/files/Beam_800x.jpg?v=1649093718",
    imageAlt: "Handcrafted porcelain mug with a smooth glaze finish and a comfortable handle.",
  },
  {
    id: 6,
    name: "8/4 Un-Mercerized Cotton Weaving Yarn",
    description: "Absorbent, washable, and durable, this 8/4 cotton is perfect for dish towels, hand towels, placemats, and tablecloths. 100% cotton.",
    
    features: [
      { name: 'Origin', description: 'Made in Japan' },
      { name: 'Material', description: 'Porcelain with a smooth glaze finish' },
      { name: 'Dimensions', description: '4.5" x 3.75" x 3.5"' },
      { name: 'Finish', description: 'Glazed finish' },
      { name: 'Includes', description: 'Set of 2 mugs' },
      { name: 'Considerations', description: 'Dishwasher and microwave safe' },
    ],
    imageSrc: "https://www.gistyarn.com/cdn/shop/files/8_4_Cotton_Weaving_Yarn_Sage_5000x_23d73ca4-60fb-4626-b0a8-51126a266374_800x.webp?v=1648759706",
    imageAlt: "Handcrafted porcelain mug with a smooth glaze finish and a comfortable handle.",
  },
  {
    id: 7,
    name: "Linen",
    description: "A crisp 18/3 linen perfect for apparel, hand towels, table runners, or other home textiles. 100% linen.",
    
    features: [
      { name: 'Origin', description: 'Made in Japan' },
      { name: 'Material', description: 'Porcelain with a smooth glaze finish' },
      { name: 'Dimensions', description: '4.5" x 3.75" x 3.5"' },
      { name: 'Finish', description: 'Glazed finish' },
      { name: 'Includes', description: 'Set of 2 mugs' },
      { name: 'Considerations', description: 'Dishwasher and microwave safe' },
    ],
    imageSrc: "https://www.gistyarn.com/cdn/shop/files/Linen_Weaving_Yarn_Ice_5000x_99e8ac1e-fb80-4383-9dae-cc50d082d928_800x.webp?v=1648759941",
    imageAlt: "Handcrafted porcelain mug with a smooth glaze finish and a comfortable handle.",
  },
];

export const Products = () => {
  return (
    <div className="bg-white product_baca " id='Products'>
		<div>
			<h1 className="text-4xl font-bold tracking-tight text-gray-900  product_h1">Our Products</h1>
			<p className="product_p">At Power Yarn, we're proud to contribute to a thriving textile industry by working with fiber farmers, spinning mills, and dyehouses to develop yarn for weavers. We make and carry weaving yarns in a wide variety of fibers, including high quality cotton, linen, wool, alpaca, and silk in a variety of sizes. Most of our yarn (unless otherwise indicated) is suitable for warp on a rigid heddle or multi-shaft loom.</p>
		</div>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {products.map((product, index) => (
          <div key={product.id} className={`product-item ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex lg:items-center gap-x-8 mb-16`}>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h2>
              <p className="mt-4 text-gray-500">{product.description}</p>
              <p className="mt-4 text-xl font-semibold text-gray-900">{product.price}</p>
              <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {product.features.map((feature, index) => (
                  <div key={index} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="rounded-lg bg-gray-100 w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
