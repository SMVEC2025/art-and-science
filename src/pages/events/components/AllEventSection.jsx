import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import TabSwitcher from "./TabSwitcher";
const AllEventSection = ({ eventData }) => {
  const eventPerPage = 6;
  const navigate = useNavigate()
  const [currentEventPage, setCurrentEventPage] = useState(1);

  const startEventIndex = (currentEventPage - 1) * eventPerPage;
  const endEventIndex = startEventIndex + eventPerPage;
  const currentEventItems = eventData.slice(startEventIndex, endEventIndex);

  const totalEventPages = Math.ceil(eventData.length / eventPerPage);

  const handleEventPageChange = (newPage) => {
    setCurrentEventPage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };
  return (
    <div className="events_main">
      <TabSwitcher />
      <section className="tf__event_page mt_50 xs_mt_50">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
              <div className="tf__heading_area mb_15">
                <h5>OUR Upcoming Events</h5>
              </div>
            </div>
          </div>
          <div className="row">
            {currentEventItems.map((item,index) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp" key={index}>
                <div className="tf__single_event">
                  <div className="tf__single_event_img">
                    <img
                      src={item?.acf?.image}
                      alt="event"
                      className="img-fluid w-100"
                    />

                  </div>
                  <div className="tf__single_event_text">
                    <ul>
                      <li>
                        <i ><IoLocationOutline /></i> pondicherry
                      </li>
                      <li>
                        <i><SlCalender /></i> {item?.acf?.time}
                      </li>
                    </ul>
                    <Link className="title" href={`/events/${item.slug}`}>
                      {item?.acf?.name}
                    </Link>
                    <p className="pb-5">{item.desc}</p>
                    <div className="tf__single_event_footer">
                      <button onClick={() => (navigate(`/event/${item.slug}`))}>View</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="tf__pagination mt_50">
            <div className="row">
              <div className="col-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a
                        className={`page-link ${currentEventPage === 1 ? "disabled" : ""
                          }`}
                        aria-label="Previous"
                        onClick={() =>
                          handleEventPageChange(currentEventPage - 1)
                        }
                      >
                        <i className="far fa-angle-left"></i>
                      </a>
                    </li>
                    {Array.from({ length: totalEventPages }, (_, index) => (
                      <li className="page-item" key={index}>
                        <a
                          className={`page-link ${currentEventPage === index + 1 ? "active" : ""
                            }`}
                          onClick={() => handleEventPageChange(index + 1)}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li className="page-item">
                      <a
                        className={`page-link ${currentEventPage === totalEventPages ? "disabled" : ""
                          }`}
                        aria-label="Next"
                        onClick={() =>
                          handleEventPageChange(currentEventPage + 1)
                        }
                      >
                        <i className="far fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllEventSection;
