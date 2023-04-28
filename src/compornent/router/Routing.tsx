import { FC } from "react";
import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import { Top } from "../page/Top";
import { AboutMe } from "../page/AboutMe";
import { Resume } from "../page/Resume";
import { SelfPromotion } from "../page/SelfPromotion";
import { Contact } from "../page/Contact";
import { Error404 } from "../page/Error404";

export const Routing: FC = () => {
  return (
    <>
      <SlideRoutes>
        <Route path="/" element={<Top />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/self_promotion" element={<SelfPromotion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </SlideRoutes>
    </>
  );
};
