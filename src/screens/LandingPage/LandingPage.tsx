import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

// Navigation menu items data
const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Predict Performance", href: "#predict" },
  { label: "Contact Us", href: "#contact" },
];

// Feature cards data
const featureCards = [
  {
    id: "predict",
    bgColor: "bg-[#a91d3a8f]",
    title: "Predict",
    subtitle: "ACADEMIC PERFORMANCE",
    image: "/woman-showing-score-card-with-high-rating.png",
    imageAlt: "Woman showing score card with high rating",
    textAlign: "text-right",
  },
  {
    id: "receive",
    bgColor: "bg-[#2c793b7a]",
    title: "RECEIVE",
    subtitle: "Smart Recommendations",
    image:
      "/laptop-learns-with-artificial-intelligence-and-machine-learning.png",
    imageAlt: "Laptop learns with artificial intelligence and machine learning",
    textAlign: "text-left",
    subtitleColor: "text-[#03346e]",
  },
  {
    id: "decide",
    bgColor: "bg-[#03346ea8]",
    title: "Make",
    subtitle: "Data-driven Decisions",
    image: "/woman-choosing-what-button-to-push.png",
    imageAlt: "Woman choosing what button to push",
    textAlign: "text-left",
    titleColor: "text-white",
    subtitleColor: "text-white",
  },
];

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-4">
          <img
            className="w-[310px] h-[116px]"
            alt="Eals logo"
            src="/eals-logo-4.png"
          />

          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex items-center gap-[30px]">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className="font-medium text-black text-xl font-['Montserrat',Helvetica]"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-[#2c793b] rounded-[20px] text-white font-bold text-lg font-['Montserrat',Helvetica] shadow-[0px_4px_4px_#00000040]">
            Login
          </Button>
        </header>

        {/* Main Content */}
        <main className="px-8">
          {/* Hero Section */}
          <section className="relative w-full h-[996px] bg-[#f8ede3] rounded-[20px] mb-10">
            <div className="absolute w-[679px] top-[72px] left-[42px] font-['Montserrat',Helvetica] font-bold text-[#03346e] text-8xl leading-[115.2px]">
              Empowering ALS Teachers and Students with E-ALS
            </div>

            <Button className="absolute top-[646px] left-[125px] h-[62px] w-[300px] bg-[#2c793b] rounded-[20px] font-bold text-white text-[32px] font-['Montserrat',Helvetica] shadow-[0px_4px_4px_#00000040]">
              Start Now
            </Button>

           

            <img
              className="absolute w-[649px] h-[684px] top-[295px] left-[715px]"
              alt="Pencil drawing of man working"
              src="/pencil-drawing-of-man-working-or-studying-on-computer.png"
            />

            <img
              className="absolute w-[284px] h-[241px] top-[239px] left-[1080px]"
              alt="Big bulb"
              src="/big-bulb.png"
            />
          </section>

          {/* Feature Cards Section */}
          <section className="grid grid-cols-3 gap-6 mb-10">
            {featureCards.map((card) => (
              <Card
                key={card.id}
                className="w-full h-[292px] relative border-none"
              >
                <CardContent
                  className={`${card.bgColor} h-full rounded-[20px] p-0 relative`}
                >
                  {card.id === "predict" && (
                    <>
                      <div className="absolute top-[86px] left-[289px] font-['Montserrat',Helvetica] font-semibold text-white text-[32px] leading-[38.4px] whitespace-nowrap">
                        {card.title}
                      </div>
                      <img
                        className="absolute w-[281px] h-[292px] top-0 left-0"
                        alt={card.imageAlt}
                        src={card.image}
                      />
                      <div
                        className={`absolute w-[312px] top-[133px] left-[113px] font-['Montserrat',Helvetica] font-semibold text-white text-[32px] ${card.textAlign} leading-[38.4px]`}
                      >
                        {card.subtitle}
                      </div>
                    </>
                  )}

                  {card.id === "receive" && (
                    <>
                      <div className="absolute top-[38px] left-10 font-['Montserrat',Helvetica] font-semibold text-white text-[32px] leading-[38.4px] whitespace-nowrap">
                        {card.title}
                      </div>
                      <div
                        className={`absolute w-[368px] top-[82px] left-10 font-['Montserrat',Helvetica] font-semibold ${card.subtitleColor || "text-white"} text-4xl leading-[43.2px]`}
                      >
                        Smart <br />
                        Recommendations
                      </div>
                      <img
                        className="absolute w-[299px] h-56 top-[68px] left-[145px]"
                        alt={card.imageAlt}
                        src={card.image}
                      />
                    </>
                  )}

                  {card.id === "decide" && (
                    <>
                      <div
                        className={`absolute top-9 left-8 font-['Montserrat',Helvetica] font-semibold ${card.titleColor || "text-white"} text-[32px] leading-[38.4px] whitespace-nowrap`}
                      >
                        {card.title}
                      </div>
                      <div
                        className={`absolute w-[368px] top-[81px] left-8 font-['Montserrat',Helvetica] font-semibold ${card.subtitleColor || "text-white"} text-[32px] leading-[38.4px]`}
                      >
                        {card.subtitle}
                      </div>
                      <img
                        className="absolute w-[368px] h-[182px] top-[119px] left-8"
                        alt={card.imageAlt}
                        src={card.image}
                      />
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>

          {/* About Section */}
          <section id="about" className="mb-10">
            <div className="text-right font-['Montserrat',Helvetica] font-bold text-[#03346e] text-4xl leading-[43.2px] whitespace-nowrap mb-4">
              ABOUT
            </div>
            <Card className="w-full border-none">
              <CardContent className="bg-[#bb15068f] rounded-[20px] p-0 relative h-[542px]">
                <div className="absolute w-[428px] h-[424px] top-[61px] left-[107px] bg-white rounded-[214px/212px]">
                  <img
                    className="absolute w-[343px] h-[289px] top-[63px] left-[43px] object-cover"
                    alt="Als logo"
                    src="/als-logo-2.png"
                  />
                </div>
                <div className="absolute w-[624px] h-[387px] top-[77px] left-[631px] font-['Montserrat',Helvetica] font-bold text-white text-4xl text-justify leading-[43.2px]">
                  The cat sat on the mat. The cat sat on the mat. The cat sat on
                  the mat. The cat sat on the mat. The cat sat on the mat. The
                  cat sat on the mat. The cat sat on the mat. The cat sat on the
                  mat. The cat sat on the mat. The cat sat on the mat. The cat
                  sat on the mat. The cat sat on the mat.
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mt-10">
            <div className="relative w-full">
              <div className="font-['Montserrat',Helvetica] font-bold text-[#03346e] text-4xl leading-[43.2px] whitespace-nowrap mb-4">
                Contact Us!
              </div>
              <Card className="border-none">
                <CardContent className="bg-[#f8ede3] rounded-[20px] p-0 relative h-[430px]">
                  <div className="absolute w-[74px] h-[156px] top-[99px] left-[129px]">
                    <img
                      className="absolute w-[73px] h-[79px] top-[77px] left-px"
                      alt="Email"
                      src="/email.png"
                    />
                    <img
                      className="absolute w-[73px] h-[78px] top-0 left-0"
                      alt="Call"
                      src="/call.png"
                    />
                  </div>

                  <div className="absolute top-[115px] left-[221px] font-['Montserrat',Helvetica] font-bold text-black text-4xl text-right leading-[43.2px] whitespace-nowrap">
                    09123455676
                  </div>

                  <div className="absolute top-[195px] left-[221px] font-['Montserrat',Helvetica] font-bold text-black text-4xl text-right leading-[43.2px] whitespace-nowrap">
                    eals@gmail.com
                  </div>

                  <div className="absolute flex gap-3 top-[267px] left-[250px]">
                    <img
                      className="w-[90px] h-[90px]"
                      alt="Facebook"
                      src="/facebook.png"
                    />
                    <img
                      className="w-[90px] h-[90px]"
                      alt="Linked in"
                      src="/linkedin.png"
                    />
                  </div>

                  <img
                    className="absolute w-[638px] h-[447px] top-0 right-0"
                    alt="Hand holding the phone"
                    src="/hand-holding-the-phone.png"
                  />
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};