import "./style.css";

const tableData = [
  {
    image: "/icons/abstract.jpg",
    name: "Abstract 3D",
    description: "Lorem ipsum dolar sit amet, consectetur adipiscing elit.",
    stock: "32 in stock",
    price: "$ 45.99",
    totalSales: 20,
  },
  {
    image: "/icons/sarpens.jpg",
    name: "Sarphens illustration",
    description: "Lorem ipsum dolar sit amet, consectetur adipiscing elit.",
    stock: "32 in stock",
    price: "$ 45.99",
    totalSales: 20,
  },
];

function ProductSell() {
  return (
    <>
      <div className="shadow-sm p-3 mb-5 bg-body rounded">
        <nav className="navbar">
          <div className="container-fluid">
            <h5 className="navbar-brand">Product Sell</h5>
            <form className="d-flex" role="search">
              <input
                className="form-control form-control-sm"
                style={{ height: "30px", marginRight: "25px" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <p className="" style={{ fontSize: "10px", marginRight: "40px" }}>
                Last 30 days
              </p>
            </form>
          </div>
        </nav>

        <div className="row mb-2">
          <p className="col-9">Product Name</p>
          <p className="col-1 text-right">Stock</p>
          <p className="col-1 text-right">Price</p>
          <p className="col-1 text-right">Total Sales</p>
        </div>
        <hr className="mt-2"></hr>
        {tableData.map((data) => {
          return (
            <div
              id="product_sell"
              className="row  d-flex flex-row justify-content-between align-items-center flex-wrap"
            >
              <p className="col-9">
                <div class="card mb-3 border-0" style={{ maxWidth: "540px" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={data.image}
                        alt="..."
                        className="product-image img-fluid rounded"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title" style={{ fontWeight: "bold" }}>
                          {data.name}
                        </h5>
                        <p class="card-text">{data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
              <p className="col-1 ">{data.stock}</p>
              <p className="col-1 " style={{ fontWeight: "bold" }}>
                {data.price}
              </p>
              <p className="col-1 ">{data.totalSales}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductSell;
