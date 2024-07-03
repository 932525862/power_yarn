import React from "react";
import "../FooterApp/FooterApp.css";
import Logo from "../../astets/navbar_img/icons8-thread-50 (2).png";
export const FooterApp = () => {
  return (
    <div >
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 foer_wi">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
        
            <div className="flex flex-shrink-0 items-center">
			  <h1 className='power' >POWER</h1>
			<img
			  className="h-8 w-auto logo"
			  src={Logo}
			  alt="Your Company"
			/>
			<h1 className='power'>YARN</h1>
		  </div>
            
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
			
			<li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
			 
			  <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Products
                </a>
              </li>
			  
			  <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
				Leave a request
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" class="hover:underline">
              Pwer Yarn
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
