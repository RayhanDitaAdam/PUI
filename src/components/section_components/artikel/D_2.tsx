import Header from "../../__global/Header";
import { Item } from "./dummy_2/Item";
import { MainPost } from "./dummy_2/MainPost";
import "./dummy/style/init.css";
import { useEffect } from "react";
import { initScrollAnimations } from "../../../utils/animations";
import gsap from 'gsap';
import Footer from "../../__global/Footer";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function D_2() {
  useEffect(function () {
    document.body.style.backgroundColor = "#000";


    gsap.ticker.lagSmoothing(0);

    initScrollAnimations();

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return function () {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="bg-white text-black">
      <Header />
      <div className="pt-[120px]">
        <div className="w-full mx-auto bg-white rounded-t-[50px] px-0 py-2 lg:p-14 md:p-10 text-black gsap-reveal">
          <MainPost />
          <Item />
        </div>
      </div>
      <Footer showMap={false} showSecurity={false} isAttached={true} className="pb-[1rem] md:pb-[1.5rem]" />
    </div>
  );
}
export default D_2;
