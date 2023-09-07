import { FC } from "react";
import ReactPlayer from "react-player";
import { StyledHomeScreens } from "../styles/screens/HomeScreens";
import { Button } from "../components/Button";
import { ClockIcon, CameraIcon } from "../assets/svg";
import { HomePageProductItem } from "../components/HomePageProductItem";

const products = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/a647/3dcf/2421c88bdaf8d369fd553fd655d06039?Expires=1694995200&Signature=d0B6wQ1bcVwVjmwkfgn4SgXDJC3jYsdcyAQMvcw0maxsKAIOW3UMTnwF4Ke6yxwn8CyBvuRw77PL6kgneVVzefxLbH8OIBR3PTvaA-fCyqNT44lFssHBeo28pzbKmcnk5sWCOcxXB~fHYL3pNaoME~Py4nYyFE2AW-XQDGglx8IndkA1pxNFWAF1nhC6vqqs7L0ULM7WFJeQuSkcw8zNxPasqzG-HnNTZdYjfFmxXYNxALfp7erakPOXPPmJGJSHh74EK4O~k3EiwoWVxbotcKEGHxsnJL5q~xA7hS-JTlkW78yU72ZRtbZpW6bRsaPjHHujowMho3ZGeRLWNF-1Fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "HOT STEP",
    price: "180.00",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/4325/bf97/bc261636f796be3b7870d3653b6c66fe?Expires=1694995200&Signature=QjxSUNfMePsmPvqnmieq7LHcuT~tPcUKYxLGeCv36QXDI8BeTRDgtX0kCGeLJFD6ao6qPYEyX46Sh2f9bppfZnWyZK7uCQrGeHFY2cwtOdUc6CqZk08c2HHAoUvt4-lNuRTJKEnrJRY-gF5rCR11CCfFSie4IO1038-i7muswSYivyBhQGwcPnmQK6gy8I35PsQW90TiegSj7flkF9CG8lem4ilk9bQxIKPBzrUpIf8t4~oXcR0bVg0TV0RVNMlwh1-YuTqxmfstKIcL4yxaIol98NO6aquDYu~EnO8h-9UoYJ-yI3-X~dwLN4UKkqqnw~l8llc26FThqB1svYkRNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "NOCTA TECH FLEECE CREW",
    price: "310.00",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/2a98/d5fa/d901b5451e45f90bde7d3ba8cbe2a775?Expires=1694995200&Signature=pI1W~vj-y9Gn4PBtkqFax8yfoGJxi5AIRcrLWhVrFq~LPDig0mFsTeoYWQ84SXziyYviJM6WUim3VegwSOyNYtA~HnSeBAWkoqRatEfYFhGEoBkWJ-JINdsb3MkVc2H-mst1IVMYhLIeRg1aSd5hz0BHhBXF02HH4InhsWsjXcWpPhuZXRtx7zM9ktWx0T-0Zz5iSQ987nD5ap~qflHUjAEdLrftCXung46qUG~BeQ1taKjwnHCFYMY2ctnNVJR5Yy-TkONcz7i~BCN7Xf6pX~wVHaF-ju9Aed5Prza6cep1Ed2BIO3Qr~dKS4-08evrPRzhv2aX86xw2XzQ1ldXCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "NOCTA TECH FLEECE CREW PANT",
    price: "280.00",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/8edc/e464/d9df9286e5ea1495ecd183522f57a62c?Expires=1694995200&Signature=FfdspJxXLHa0lpLA-fPUXLBMyuy1ZpzVKHeNWlWfnVw5zCyBS1X-BwsgGjYEIsRwXsOFtUYSlW4LnGl6s-wl5-JjFDl8TbgBBCtSTt4uJACcrXv3e8kG6SSmTFxGLcKqglPE2LL3KWOqr4T2qCssdvOQf3SfCC6Zv8qZ4OIkRAr~5RexdvFk4QifhCyXnrgzl-5YlmSn5Afn3Vgh-p4R1HaB~wHy1ZTZqnQL2rg4-C-QKtkofnnxIvF-NeHTSmN8VWOdrDgBkDu73trH4oBBc7BPJcxG-4TuYA1pVLrdZKc~vVyBHc3Cba-U8xp1RkDdACT4ANsBNJvHInqS~4hJnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "NOCTA FLEECE HOODIE",
    price: "500.00",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/47da/a703/2cc47f24cf63686674977433ddd73061?Expires=1694995200&Signature=ovEN-fdqDQtlWt2Qz1x64rSFBDZRXpSs0pz3RQHIz4t~lARYQN2QvhsaxGgVE7iCToU52HYxH7Dt4y1FnkNyBIUz~uVP6gv4gDAefqk5y8EsYoECC3mEgX3CtMmibuAMPcqNFQ2QG-hCgjNEETIHlBfEWIUIxIPl3nMnVaV4EEoygEE3tsltS9grpcwIAhDvGngfRl9PGp8ZeuXftwSzikk5mIH~qR3CN~A0t0VpC1qY2TgxqFYdJ52~eajSSTv-nmW9uoPXWUlgo4RlpCY92z4j249jjhy5bIi4YpK1Fv0taXWtMK~lj3biahByCbX3-XnyjNNeRxtlBW9-rvPdUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "ALIEN GORETEX JACKET",
    price: "400.00",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/25c5/fcee/03ea1818c7e14fc9d86a8a153e5eac57?Expires=1694995200&Signature=dXoVTbX9YbMAGFyoIf0G~tP09KnHA6R09H88qZDiPhcd4lM8hrD5QoHJkgtIVR8fqnXc8ve5u7F1Dn7syobkoYMfvtHBenm44z-UIBCO0cXhAtQRrqRj1ZRZLQs2wZHQsU9JR53Yt8Sk1p-VD03j5CTc3~hNQzG8eaHFU54vo9P4khNcYrz4ilCfx5-BstmgGzT87RJ4wZzccnPnX39pOc0yIuUnyPZHI5fIDDM8fi3bnVbLUfYRMTxQ7E3PGb83cMRVROKCpi7O5sKII73GbEclXDsaxME0MJXcA-atSfVEZpivmPVa0zqQByJpQgxOCNFSW4y0ykaeQJ1N8Lci~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "JACKET WITH SWAROVSKI® CRYSTALS",
    price: "130.00",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/e99e/c08e/8105734ae12be7ddd2ebe7fcced4973b?Expires=1694995200&Signature=BmOGnU9~tyYw3yZAR90r3FugAzrKVxOh3WGNTj6GzFE~r2mm0FIw5wZSw1cJ6yF8Ar0VHOBYEwAQWQM1qON2KfBxH-ChksufGlTNofkQEsGgA36bltYjDGogKUwJ~UeP2i5mZlgGAuUF6iw0nEcVg0Is~oStfZFKsPbbK-iguqE5p6hqSgoPN~jZqOd9zbAWhVTS-3lKc1lhBMyq9D8NU~Z8sXKBrPncrrrObCgV3XmgytmpO9A8iR39DtqeIFCzwB38uNUpS76AGjImtnfTqK9urQuORglEXsW-rDcqpFdysTblD7SRXC-cVQk-72X62ciEjiqstcc4hpc-QS0jcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "RD TECH CREW",
    price: "150.00",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/4325/bf97/bc261636f796be3b7870d3653b6c66fe?Expires=1694995200&Signature=QjxSUNfMePsmPvqnmieq7LHcuT~tPcUKYxLGeCv36QXDI8BeTRDgtX0kCGeLJFD6ao6qPYEyX46Sh2f9bppfZnWyZK7uCQrGeHFY2cwtOdUc6CqZk08c2HHAoUvt4-lNuRTJKEnrJRY-gF5rCR11CCfFSie4IO1038-i7muswSYivyBhQGwcPnmQK6gy8I35PsQW90TiegSj7flkF9CG8lem4ilk9bQxIKPBzrUpIf8t4~oXcR0bVg0TV0RVNMlwh1-YuTqxmfstKIcL4yxaIol98NO6aquDYu~EnO8h-9UoYJ-yI3-X~dwLN4UKkqqnw~l8llc26FThqB1svYkRNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "NOCTA TECH FLEECE CREW",
    price: "310.00",
  },
];

export const Home: FC = () => {
  const handleJoinEvent = () => {
    console.log("Join Event");
  };

  return (
    <StyledHomeScreens>
      <div className="player-container">
        <ReactPlayer
          className="player"
          url={
            "https://s3-figma-videos-production-sig.figma.com/video/978649961378621333/TEAM/af98/3fb8/-fcf3-41ac-86ae-780ecf0dbb0a?Expires=1694995200&Signature=Zwso5hNUudsuTUc9yxG9blqVbsKlDAX0saTHBlvUHHZx5wjq~FnpRisOdkmZeil8azq7MEnM60xoIiDg4elimMiJxdA0ERa36ORn7eErO0OZsvzsv7VQWheeJknpKHQdGDWwJ0GtzqbS9~pjIAuseHL-JVgp3~OKj61toM70oHdYa0OqBbpr5usqUNrf19eNZzurYhQahHFhgi5V3IlUj7LQSwxjS8GAhW0FTbCYQiLsWfaHbK5VhQprzrg9AYl-vXG9PFJok-pgizKcAVGFKn~hna5syLKd34XynbCdfG1Ol7kOmzN2PM1TebyPMAO-eRVVqxUlnuVPDq7NkGOvyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
          width="100%"
          height="100%"
          playing
          loop
          muted
          playsinline
          stopOnUnmount
        />
        <div className="content-wrapper">
          <div className="event-info">
            <div className="event-name-container event-info-block">
              <span className="event-name">“Chasing Freedom”</span>
              <div className="event-date">
                <div>
                  <img src={CameraIcon} />
                  <span>3 min</span>
                </div>
                <div>
                  <img src={ClockIcon} />
                  <span>Sep. 2, 2023 - 10:00 AM</span>
                </div>
              </div>
            </div>
            <div className="event-info-block event-info-block-center">
              <span className="event-description">
                Individuality is the essence of freedom. Discover and shop the
                2-in-1 bag in this short film exploring the notion of true
                freedom. SPENCER BADU’s modular design and interchangeable
                accessories empower you to create a style that is uniquely
                yours.
              </span>
            </div>
            <div className="event-info-block event-info-block-right">
              <span className="price-event">Price: $20.00</span>
              <Button type="button" onClick={handleJoinEvent}>
                JOIN EVENT
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="products-container">
        <p className="title">Products</p>
        <div className="products-list">
          {products.map((item) => (
            <HomePageProductItem
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </StyledHomeScreens>
  );
};

export default Home;
