import React from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="w-full flex-1 bg-[#9DB2BF]">
        <div className="w-full h-auto text-center text-black">
          <div className="bg-neutral-800 p-10">
            <h1 className="text-white text-4xl pb-2 md:pb-4 lg:pb-6">About Us</h1>
          </div>

          <div className="bg-neutral-700 p-10">
            <h1 className="text-white text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6">Our Mission</h1>

            <p className="text-white text-xl leading-9 px-4 md:px-16 lg:px-32">
              Our mission is simple: to create an unforgettable culinary journey for every guest who walks through our
              doors. Whether you are a sushi aficionado or exploring Japanese cuisine for the first time, we aim to
              captivate your senses with every bite, leaving you with a lasting memory of flavors, textures, and
              experiences that are uniquely New York City Sushi.
            </p>
          </div>

          <div className="px-30 bg-neutral-800 p-10">
            <h1 className="text-white text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6">Our Story</h1>

            <p className="text-white text-xl leading-9 pb-4">
              Established in 2023, New York City Sushi is a cherished fixture in the city dining scene, known for
              authentically bringing Japanese flavors to NYC. With a focus on sushi mastery and flavor refinement, we have
              honed our craft over the years.
            </p>

            <p className="text-white text-xl leading-9 pb-4">
              Led by expert chefs, we pride ourselves on creating visually stunning and delicious culinary delights. We
              meticulously select the freshest, top-quality ingredients to ensure every plate leaving our kitchen is a
              masterpiece, from traditional sushi to innovative signature rolls.
            </p>

            <p className="text-white text-xl leading-9 pb-4">
              Step into our elegant, inviting space designed to evoke the tranquil atmosphere of a traditional Japanese
              dining experience. Our serene decor and minimalist design set the stage for intimate dinners,
              celebrations, or casual gatherings with loved ones.
            </p>

            <p className="text-white text-xl leading-9 pb-4">
              At New York City Sushi, we are not just about exceptional dining; we are also dedicated to preserving the
              planet. We uphold sustainable sourcing, employ eco-friendly packaging, and strive to minimize food waste
              for a greener future.
            </p>
          </div>

          <div className="bg-neutral-700 p-10 border-t-2 border-black">
            <p className="text-white text-2xl leading-9 pb-8">
              Join us at New York City Sushi as we continue to weave the artistry of sushi into New York culinary
              scene.
            </p>
            <div className="flex justify-center items-center sm:flex-wrap">
              <Link
                className="hover:bg-black hover:text-white text-white duration-300 active:bg-blue-400 text-xl font-semibold px-10 py-2 border-2 border-white rounded-xl drop-shadow-xl"
                href="/Order"
              >
                Order Food
              </Link>
              <Link
                className="hover:bg-black hover:text-white text-white duration-300 active:bg-blue-400 text-xl font-semibold ml-5 px-10 py-2 border-2 border-white rounded-xl drop-shadow-xl"
                href="/FAQ"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
