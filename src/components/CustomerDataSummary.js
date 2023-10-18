const dashData = [

  {
    icon: "/icons/svgs/dashboard-nav.svg",
    alt: "Dashboard",
    name: "Dashboard",
  },
  {
    icon: "/icons/svgs/product.svg",
    alt: "Product Order",
    name: "Product",
  },

  {
    icon: "/icons/svgs/user.svg",
    alt: "Product Order",
    name: "Customers",
  },
  {
    icon: "/icons/svgs/coin-stack.svg",
    alt: "Product Order",
    name: "Income",
  },
  {
    icon: "/icons/svgs/discount.svg",
    alt: "Product Order",
    name: "Promote",
  },

  {
    icon: "/icons/svgs/help.svg",
    alt: "Product Order",
    name: "Help",
  },
];

function CustomerDataSummary() {
  return (
    <>
      <div className="container-fluid w-100">
        <div className="row d-flex flex-row align-items-center mb-3">
          <div className="col-3">
            <img
              src="/icons/svgs/dashboard.svg"
              style={{
                width: "40px",
                height: "40px",
              }}
              alt="Dashboard"
            />
          </div>
          <h1 className="col-9 text-white mb-0">
            <h4>Dashboard</h4>
          </h1>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-center flex-wrap w-100">
          {dashData.map((data) => {
            return (
              <div className="nav-items row w-100 mb-2">
                <span className="col-2 p-0">
                  <img
                    src={data.icon}
                    className="text-white"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                    alt={data.alt}
                  />
                </span>
                <span className="text-white col-8">{data.name}</span>
                <span className="col-2">
                  <img
                    src="/icons/svgs/right-chevron.svg"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                    alt={data.alt}
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CustomerDataSummary;
