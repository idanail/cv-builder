import React, { Component } from "react";
import "./WebDevelopment.css";
import database from "../../assets/js/database";
import { v4 as uuid } from "uuid";

class WebDevelopment extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const data = database.filter((el) => el.name === "Web development")[0];
    return (
      <div className="WebDevelopment row text-left mx-5 mt-3">
        <div className="col-md-11">
          <div className="row">
            <div className="col-md-5">
              <p className="h3 text-capitalize">{data.CV.basicInfo.name}</p>
              <p className="h6 text-info">{data.CV.basicInfo.titles}</p>
              <p>{data.CV.basicInfo.goals}</p>
            </div>
            <div className="col-md-2 mt-3 px-0 mt-md-0">
              <img
                src={data.CV.image.default}
                className="d-block w-100 rounded-circle web-dev-image"
                alt={data.CV.basicInfo.name}
              />
            </div>
            <div className="col-md-5 mt-4 mt-md-0">
              <ul className="contact-info pl-0">
                <li>
                  {data.CV.contactInfo.mail}
                  <i className="fas fa-envelope ml-3"></i>
                </li>
                <li>
                  {data.CV.contactInfo.phone}
                  <i className="fas fa-mobile-alt ml-3"></i>
                </li>
                <li>
                  {data.CV.contactInfo.location}
                  <i className="fas fa-map-marker-alt ml-3"></i>
                </li>
                <li>
                  {data.CV.contactInfo.twitter}
                  <i className="fab fa-twitter ml-3"></i>
                </li>
              </ul>

              {/* <div className="row text-right">
                <div className="col-10 mb-2">
                  <span>{data.CV.contactInfo.mail}</span>
                </div>
                <div className="col-2">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="col-10 mb-2">
                  <span>{data.CV.contactInfo.phone}</span>
                </div>
                <div className="col-2">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="col-10 mb-2">
                  <span>{data.CV.contactInfo.location}</span>
                </div>
                <div className="col-2">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="col-10 mb-2">
                  <span>{data.CV.contactInfo.twitter}</span>
                </div>
                <div className="col-2">
                  <i className="fab fa-twitter"></i>
                </div>
              </div> */}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-7">
              <p className="h5 font-weight-bold text-uppercase">
                Work experience
              </p>
              {data.CV.workExperience.map((el, idx) => (
                <div key={idx} className="mb-4">
                  <p className="h6 font-weight-bold">{el.position}</p>
                  <p className="h6">{el.company}</p>
                  <div className="font-italic text-info d-flex justify-content-between">
                    <span>
                      {el.period.startMonth ? `${el.period.startMonth}/` : ""}
                      {el.period.startYear} -{" "}
                      {el.period.endMonth ? `${el.period.endMonth}/` : ""}
                      {el.period.endYear ? el.period.endYear : "Present"}
                    </span>
                    <span>{el.period.location}</span>
                  </div>
                  <p className="font-italic text-info mt-2 mb-1">
                    {el.aboutJob}
                  </p>
                  <ul className="job-desc-ul pl-4">
                    {el.jobDescription.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col mb-4">
                  <p className="h5 font-weight-bold text-uppercase">
                    Skills & competencies
                  </p>
                  {data.CV.skills
                    .map((el, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-info mr-2 mb-2 skill"
                      >
                        {el}
                      </span>
                    ))
                    .reduce((prev, cur) => [prev, " ", cur])}
                </div>
              </div>
              <div className="row">
                <div className="col mb-4">
                  <p className="h5 font-weight-bold text-uppercase">
                    Achievements & certificates
                  </p>
                  {data.CV.achievements.map((el, idx) => (
                    <div key={idx}>
                      <p className={el.description ? "mb-0" : "mb-2"}>
                        {el.achievement}
                      </p>
                      {el.description && (
                        <p className="font-italic text-secondary mb-2">
                          {el.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="h5 font-weight-bold text-uppercase">
                    Interests
                  </p>
                  <div className="row">
                    {data.CV.interests.map((el, index) => (
                      <div key={index} className="col-6 mb-2">
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDevelopment;
