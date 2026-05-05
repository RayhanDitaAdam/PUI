import Header from "../../__global/Header";
import { Item } from "./dummy/Item";
import { MainPost } from "./dummy/MainPost";
import "./dummy/style/init.css";
import { useEffect } from "react";
import { initScrollAnimations } from "../../../utils/animations";
import gsap from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "../../__global/Footer";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function D_1() {
  useEffect(function () {
    document.body.style.backgroundColor = "white";


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
    <div className="bg-white max-w-[1700px] mx-auto text-black">
      <Header />
      <div className="pt-[120px] px-4 md:px-0">
        <div className="w-full mx-auto bg-white rounded-t-[50px] p-2 lg:p-14 md:p-10 text-black gsap-reveal">
          <MainPost />
          <Item />
        </div>
      </div>
      <Footer showMap={false} showSecurity={false} isAttached={true} className="pb-[1rem] md:pb-[1.5rem]" />
    </div>
  );
}
export default D_1;
