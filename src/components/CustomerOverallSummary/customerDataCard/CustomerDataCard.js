import "./style.css";

function CustomerDataCard(props) {
  return (
    <div id="customer_data_card" className="row gx-3 d-flex flex-row">
      {props.cardData.map((data, id) => (
        <div key={id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card p-2">
            <div className="row g-0 d-flex flex-row align-items-center flex-wrap">
              <div className="col-md-4 ">
                <img
                  src={data.icon}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column align-items-center flex-wrap">
                  <small className="card-title">{data.cardName}</small>
                  <p className="card-text">{data.price}</p>
                  <p>
                    <small className="text-muted">
                      <div className=" d-inline-flex flex-row align-items-center">
                        <span
                          className={`percent-change ${
                            data.type === "profit" ? "profit" : "loss"
                          } d-inline-flex flex-row align-items-center`}
                        >
                          <img
                            src={
                              data.type === "profit"
                                ? "./icons/svgs/up-arrow.svg"
                                : "./icons/svgs/down-arrow.svg"
                            }
                            alt=""
                          />
                          {data.percentage}
                        </span>
                        <span className="text colorless-text">this month</span>
                      </div>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerDataCard;
