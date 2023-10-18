import CustomerDataCard from "./customerDataCard/CustomerDataCard";
import CustomersBuyProducts from "./CustomersBuyProducts";
import OverviewOfCustomer from "./OverviewOfCustomer";
import ProductSell from "./productSell/ProductSell";
const cardData = [
  {
    icon: "/icons/earnings.png",
    cardName: "Earning",
    price: "$198k",
    percentage: "37.8%",
    type: "profit",
  },

  // Then, you can add the 'imageElement' to the DOM to display the image.

  {
    icon: "/icons/orders.png",
    cardName: "Orders",
    price: "$2.4k",
    percentage: "2%",
    type: "loss",
  },

  {
    icon: "icons/balance.png",
    cardName: "Balance",
    price: "$2.4k",
    percentage: "2%",
    type: "loss",
  },
  {
    icon: "/icons/totalSales.png",
    cardName: "TotalSales",
    price: "$89k",
    percentage: "11%",
    type: "profit",
  },
];
function DashboardDetail() {
  return (
    <>
      <div className="container-fluid p-0" style={{ height: "100%" }}>
        <div className="h-100">
          <nav className="navbar p-5 pb-0 pt-0">
            <p className="navbar-brand" style={{ fontSize: "30px" }}>
              Hello Manohar
            </p>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </nav>
          <div
            className="overflow-auto p-5 pt-0 pb-0"
            style={{ height: "calc(100% - 87px)" }}
          >
            <CustomerDataCard cardData={cardData} />
            <div className="custom-row row mt-3 mx-0 mb-5 d-flex align-items-center justify-content-center">
              <div className="col-8 p-0 h-100">
                <OverviewOfCustomer />
              </div>
              <div className="col-4 h-100">
                <CustomersBuyProducts />
              </div>
            </div>
            <div className="">
              <ProductSell />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboardDetail;
