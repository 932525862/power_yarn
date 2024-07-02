import React from 'react'
import "../About/About.css"
import powerimg_1 from "../../astets/about_img/power_logo.png"
export const About = () => {
	return (
	<div className=" relative overflow-hidden bg-white asos about_bac" id='About' >
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl marg">
              About Us 
            </h1>
            <p className="mt-4 text-xl text-gray-515 marg_p">
			Power Yarn has come a long way to build its repute as a successful and trustworthy textile sourcing and trading company for yarn, fabrics, textile waste/spinning waste (hard waste and soft waste), home textile,  made-ups.
            </p>
			<p className="mt-4 text-xl text-gray-515 marg_p">
			Power Yarn, as it sounds, yarn plays a basic role in our business. YarnTrade was started in 2016, specializing in trading Ring Yarn, Open-End Yarn (O/E), Home Textiles, Towels, Bed Sheets and Spinning Waste (Cotton Waste).
			</p>
			<p className="mt-4 text-xl text-gray-515 marg_p">
			We are committed to offering Cotton Yarns, Poly Cotton Yarns, Dyed Yarns, Fancy Yarns, Towel, Bed Sheets, Textile Waste / Spinning Waste (hard waste and soft waste) on competitive rates.
			</p>
			<p className="mt-4 text-xl text-gray-515 marg_p">
			YarnTrade has been trading with leading manufacturers of yarn, fabrics, home textiles and garment manufacturers and traders in Pakistan.
			</p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8YrWYi4jju8W58-Fgd21R1nLmBVIcD47UH33bZ5irTlt4f9Ti3gRUK3A6_MyrASwydQ&usqp=CAU"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.gistyarn.com/cdn/shop/files/Beam_1600x.jpg?v=1649093718"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.gistyarn.com/cdn/shop/files/mallo_1600x.jpg?v=1649093670"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRQNN2Yl67objz8-rB-7CJDqKY2xm8KJ0Yw&s"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images4-g.ravelrycache.com/uploads/bchapman1017/832925391/C639340B-4EB0-43A3-AAF7-2DA58FFFA182_small2.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQ8kr0qU9PW-oFumJphQy2iZq1reIviM__Q&s"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTJeJz8IzHBTuVBupNL_0iUXgry1gzyxaXxfGBf7qtAMLtxZu9svXOJTxblrt-cxGthY&usqp=CAU"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#Products"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 btnmm"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
	  <div className='box'></div>
    </div>
	  )
}
