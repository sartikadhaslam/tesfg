import React from "react";
import NavbarFooterLayout from "../../layout/NavbarFooterLayout";
import Serupa from "./Serupa";
import Detail from "./Detail";

export default function Vacancy() {
  return (
     <>
    <NavbarFooterLayout>
    <main>
        <section className="pt-20 mt-20">
            <div className="container flex px-10 ml-10">
            <div id="mainvacancy" className="w-2/3">
                <Detail></Detail>
            </div>          
            <div id="serupa" className="w-1/3">
                <Serupa></Serupa>
            </div>  
            </div>
                     
        </section>
    </main>
    </NavbarFooterLayout>
    </>
  );
}
