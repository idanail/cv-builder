import React, { Component } from "react";
import database from "../../assets/js/database";
import "./WebDevelopment.css";
import addImg from "../../assets/img/cv-images/addimg.png";
class WebDevelopment extends Component {
  constructor(props) {
    super(props);
    this.state = { uploadedImg: "" };
    this.inputReference = React.createRef();
  }

  fileUploadAction = () => this.inputReference.current.click();
  fileUploadInputChange = (e) =>
    this.setState({
      uploadedImg: URL.createObjectURL(e.target.files[0]),
    });

  render() {
    const { uploadedImg } = this.state;
    const { editMode } = this.props;
    const data = database.filter((el) => el.name === "Web development")[0];
    return (
      <div className="WebDevelopment row text-left mx-5 mt-3">
        {!editMode ? (
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
        ) : (
          // editMode
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-5">
                {/* <p className="h3 text-capitalize">{data.CV.basicInfo.name}</p> */}
                <textarea
                  name="full-name"
                  id="full-name"
                  placeholder="Full Name"
                ></textarea>
                {/* <p className="h6 text-info">{data.CV.basicInfo.titles}</p> */}
                <textarea
                  name="basic-info"
                  id="basic-info"
                  placeholder="Professional title"
                ></textarea>
                {/* <p>{data.CV.basicInfo.goals}</p> */}
                <textarea
                  name="goals"
                  id="goals"
                  placeholder="About me"
                ></textarea>
              </div>
              <div className="col-md-2 mt-3 px-0 mt-md-0">
                {/* <img
                  src={data.CV.image.default}
                  className="d-block w-100 rounded-circle web-dev-image"
                  alt={data.CV.basicInfo.name}
                /> */}
                <label htmlFor="attach-image">
                  <img
                    onClick={this.fileUploadAction}
                    src={uploadedImg ? uploadedImg : addImg}
                    className="d-block w-100 rounded-circle web-dev-image"
                    alt="Click to add..."
                  />
                </label>
                <input
                  type="file"
                  id="attach-image"
                  hidden
                  ref={this.inputReference}
                  onChange={this.fileUploadInputChange}
                />
              </div>
              <div className="col-md-5 mt-4 mt-md-0">
                <ul className="contact-info pl-0">
                  <li>
                    {/* {data.CV.contactInfo.mail} */}
                    <input type="text" placeholder="E-mail" />
                    <i className="fas fa-envelope ml-3"></i>
                  </li>
                  <li>
                    {/* {data.CV.contactInfo.phone} */}
                    <input type="tel" placeholder="Phone number" />
                    <i className="fas fa-mobile-alt ml-3"></i>
                  </li>
                  <li>
                    {/* {data.CV.contactInfo.location} */}
                    <input type="text" placeholder="City, Country" />
                    <i className="fas fa-map-marker-alt ml-3"></i>
                  </li>
                  <li>
                    {/* {data.CV.contactInfo.twitter} */}
                    <input type="text" placeholder="Twitter" />
                    <i className="fab fa-twitter ml-3"></i>
                  </li>
                  <li>
                    {/* {data.CV.contactInfo.linkedin} */}
                    <input type="text" placeholder="LinkedIn" />
                    <i className="fab fa-linkedin ml-3"></i>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-7">
                <p className="h5 font-weight-bold text-uppercase">
                  Work experience
                </p>
                <div className="mb-4">
                  <textarea
                    name="position-title"
                    id="position-title"
                    placeholder="Position/Title"
                  ></textarea>
                  <textarea
                    name="company-workplace"
                    id="company-workplace"
                    placeholder="Company/Workplace"
                  ></textarea>
                  <div className="font-italic text-info d-flex justify-content-between">
                    <div className="d-flex">
                      <input
                        type="text"
                        className="start-month"
                        placeholder="00"
                      />
                      /
                      <input
                        type="text"
                        className="start-year"
                        placeholder="0000"
                      />
                      <span className="mx-2">-</span>
                      <input
                        type="text"
                        className="start-month"
                        placeholder="00"
                      />
                      /
                      <input
                        type="text"
                        className="start-year"
                        placeholder="0000"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="city-country"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="mt-2"
                    placeholder="Accomplishments/Tasks/Duties (Optional)"
                  />
                  <ul className="edit-job-desc-ul pl-4 mt-2">
                    <li>
                      <input type="text" placeholder="Accomplishment 1" />
                    </li>
                    <li>
                      <input type="text" placeholder="Task 1" />
                    </li>
                    <li>
                      <input type="text" placeholder="Task 2" />
                    </li>
                  </ul>
                </div>
                <p className="h5 font-weight-bold text-uppercase">Education</p>
                <div className="mb-4">
                  <textarea
                    name="position-title"
                    id="position-title"
                    placeholder="Degree"
                  ></textarea>
                  <textarea
                    name="company-workplace"
                    id="company-workplace"
                    placeholder="University"
                  ></textarea>
                  <div className="font-italic text-info d-flex justify-content-between">
                    <div className="d-flex">
                      <input
                        type="text"
                        className="start-month"
                        placeholder="00"
                      />
                      /
                      <input
                        type="text"
                        className="start-year"
                        placeholder="0000"
                      />
                      <span className="mx-2">-</span>
                      <input
                        type="text"
                        className="start-month"
                        placeholder="00"
                      />
                      /
                      <input
                        type="text"
                        className="start-year"
                        placeholder="0000"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="city-country"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="mt-2"
                    placeholder="Studied/Courses"
                  />
                  <ul className="edit-job-desc-ul pl-4 mt-2">
                    <li>
                      <input type="text" placeholder="Thing learned 1" />
                    </li>
                    <li>
                      <input type="text" placeholder="Thing learned 2" />
                    </li>
                    <li>
                      <input type="text" placeholder="Thing learned 3" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row">
                  <div className="col mb-4">
                    <p className="h5 font-weight-bold text-uppercase">
                      Skills & competencies
                    </p>
                    <span className="px-2 py-1 bg-info mr-2 mb-2 skill">
                      Skill 1
                    </span>
                    <input
                      type="text"
                      className="skill"
                      placeholder="Skill 1"
                    />
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
        )}
      </div>
    );
  }
}

export default WebDevelopment;
