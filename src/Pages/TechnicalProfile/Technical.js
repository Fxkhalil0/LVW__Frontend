import React, { useState, useEffect } from 'react'
import style from './technical.module.css'
import Vector from '../../assets/Vector.svg'
import Vector1 from '../../assets/Vector (1).svg'
import logo from '../../assets/logo.png'
import United_Kingdom from '../../assets/United Kingdom (GB).png'
import egypt from "../../assets/Egypt (EG).png"
import egypt1 from "../../assets/Egypt (EG) (1).png"
import frame27 from "../../assets/Frame 27.png"
import image1 from "../../assets/01.png"
import rounded from "../../assets/Line Rounded.png"
import Italy from '../../assets/italy.png'
import group66 from "../../assets/Group 39466.svg"
import logo1 from "../../assets/logo (1).png"
import facebook from "../../assets/Facebook.svg"
import twitter from "../../assets/Twitter.svg"
import youtube from "../../assets/YouTube.svg"
import linked from "../../assets/LinkedIn.svg"
import instagram from "../../assets/Instagram.svg"
import frame97 from '../../assets/Frame 39497.png'
import frame98 from '../../assets/Frame 39498.png'
import axios from 'axios';
import Modalstyle from './EditModal.module.css';



function TechnicalProfile() {
  //TechnicalData
  const [technicalData, setTechnicalData] = useState()
  const technicalRole = JSON.parse(localStorage.getItem("role"))
  console.log("Technical Role from localStorage:", technicalRole);
  const technicalId = localStorage.getItem("id");
  console.log("Technical ID from localStorage:", technicalId);

  const [lang, setLang] = useState("english")
  const [tap, setTap] = useState("about")
  const [menu, setMenu] = useState(false)

  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editPhone, setEditPhone] = useState("")
  const [editCity, setEditCity] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [data, setData] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  //to show updated data immediately
  const [updateTechnicalData, setUpdateTechnicalData] = useState(technicalData)

  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options).replace(/,/g, '');
    const parts = formattedDate.split(' ');
    return `${parts[1]} ${parts[0]}, ${parts[2]}`;
  };

  useEffect(() => {
    console.log("tesssst")
    
    if (technicalRole === "tourGuide") {
      console.log(typeof technicalRole)
      console.log("this is tech role", technicalRole)
      axios.post("http://localhost:5000/technical/getOneTourGuide", { id: technicalId })
        .then((res) => {
          console.log(res.data);
          setTechnicalData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching Tour Guide data:", error);
        });
    }
    if (technicalRole === "cameraOperator") {
      axios.post("http://localhost:5000/technical/getOneCameraOperator", { id: technicalId })
        .then((res) => {
          console.log(res.data);
          setTechnicalData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching Camera Operator data:", error);
        });
    }
    if (technicalRole === "director") {
      console.log(typeof technicalRole)
      axios.post("http://localhost:5000/technical/getOneDirector", { id: technicalId })
        .then((res) => {
          console.log(res.data);
          setTechnicalData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching Director data:", error);
        });
    }
  }, []);
  console.log("Technical Data:", technicalData);

  const hasAllInformation = technicalData.degree && technicalData.university && technicalData.startYear && technicalData.graduateYear;

  const selectLanguages = [
    { name: 'English', imgSrc: United_Kingdom },
    { name: 'Arabic', imgSrc: egypt },
    { name: 'Italiano', imgSrc: Italy },
  ];
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageClick = (language) => {
    if (selectedLanguages.includes(language.name)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language.name));
    } else {
      setSelectedLanguages([...selectedLanguages, language.name]);
    }
  };


  return (
    <div>
      <nav>
        <div className={style["container"]}>
          <div className={style["nav__content"]}>
            <div className={style["nav__right"]}>
              <div className={style["nav__logo"]}>
                <img src={logo} alt="logo" />
              </div>
              <div className={style["nav__search"]}>
                <input type="text" placeholder="Tour name or location..." />
              </div>
              <ul className={style["nav__links"]}>
                <li><a>Home</a></li>
                <li className={style["active"]}><a>Tours <img src={Vector} alt='' /></a>
                </li>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className={style["menu"]}>
              <i onClick={() => {
                if (menu == false) {
                  setMenu(true)
                  console.log(true)
                }
                else {
                  setMenu(false)
                  console.log(false)
                }

              }} className="fas fa-bars" />
              {
                menu == true &&
                <div className={style["drobdown"]}>
                  <ul className={style["nav__link"]} id="drobDown">
                    <li><a href="#">Home</a></li>
                    <li className={style["active"]}><a>Tours <img src={Vector} alt='' /></a>
                    </li>
                    <li><a href="#">Our Mission</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              }
            </div>
            <div className={style["nav__left"]}>
              <div className={style["nav__langs"]}>
                {
                  lang == "english" &&
                  <a><img src={United_Kingdom} alt='' /> English</a>
                }
                {
                  lang == "arabic" &&
                  <a href="#"><img src={egypt} alt='' /> العربية</a>
                }
                {
                  lang == "italiano" &&
                  <a href="#"><img src={United_Kingdom} alt='' /> Italiano</a>
                }
                <ul>
                  <li onClick={() => {
                    setLang("english")
                  }}><a href="#"><img src={United_Kingdom} alt='' /> English</a></li>
                  <li onClick={() => {
                    setLang("arabic")
                  }}><a href="#"><img src={egypt} alt='' /> العربية</a></li>
                  <li onClick={() => {
                    setLang("italiano")
                  }}><a href="#"><img src={United_Kingdom} alt='' /> Italiano</a></li>
                </ul>
              </div>
              <div className={style["nav__join"]}>
                <a href="#">Join Us Now</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={style["path"]}>
        <div className={style["container"]}>
          <div className={style["path__content"]}>
            <h3>Home</h3>
            <img src={Vector1} alt='' />
            <h3>Users</h3>
            <img src={Vector1} alt='' />
            <h3>{technicalData?.name}</h3>
          </div>
        </div>
      </div>
      <div className={style["profile"]}>
        <div className={style["container"]}>
          <div className={style["profile__content"]}>
            <img src={frame27} alt='' />
          </div>
          <div className={style["profile__info"]}>
            <img src={image1} alt='' />
            <div className={style["profile__text"]}>
              <div>
                <h3>{technicalData.name}</h3>
                <h4>{technicalRole}</h4>
              </div>
              <div className={style['edit__button']}>
                <a href="#" onClick={() => setShowEditModal(true)}>Edit Profile</a>

                {/* Modal */}
                {showEditModal && (
                  <div className={Modalstyle['modal__overlay']}>
                    <div className={Modalstyle['modal__content']}>
                      <div className={Modalstyle['modal__header']}>
                        <h2>Edit Profile</h2>
                        <i
                          className="fa-regular fa-circle-xmark"
                          style={{ color: '#000000', fontSize: '25px', fontWeight: '600', cursor: 'pointer' }}
                          onClick={() => setShowEditModal(false)}
                        ></i>
                      </div>
                      <div className={Modalstyle['input__field']}>
                        <label>Name:</label>
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                        />
                      </div>
                      <div className={Modalstyle['input__field']}>
                        <label>Description:</label>
                        <textarea
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                        />
                      </div>
                      <div className={Modalstyle['input__field']}>
                        <label>Phone:</label>
                        <input
                          type="text"
                          value={editPhone}
                          onChange={(e) => setEditPhone(e.target.value)}
                        />
                      </div>
                      <div className={Modalstyle['input__field']}>
                        <label>Address:</label>
                        <select value={editAddress} onChange={(e) => setEditAddress(e.target.value)}>
                          <option>Select Country</option>
                          {country?.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                          ))}
                        </select>
                      </div>

                      <div className={Modalstyle['input__field']}>
                        <label>City:</label>
                        <select value={editCity} onChange={(e) => setEditCity(e.target.value)}>
                          <option>Select City</option>
                          {editAddress !== 'Select Country' && data
                            .filter(item => item.country === editAddress)
                            .map((item, index) => (
                              <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                      </div>

                      <div className={Modalstyle['input__field']}>
                        <label>Languages:</label>
                        <select multiple value={selectedLanguages} onChange={(e) => setSelectedLanguages(Array.from(e.target.selectedOptions, (option) => option.value))}>
                          {selectLanguages.map((language) => (
                            <option key={language.name} value={language.name}>
                             {language.imgSrc} {language.name}
                            </option>
                          ))}
                        </select>
                      </div>



                      <div className={Modalstyle['modal__actions']}>
                        <button onClick={() => setShowEditModal(false)}>Cancel</button>
                        <button onClick={updateTechnicalData}>Save Changes</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style["profile-main-content"]}>
        <div className={style["container"]}>
          <div className={style["profile-main-content__content"]}>
            <div className={style["profile-main-content__info"]}>
              <div className={style["tabs"]}>
                <a className={` ${tap === "about" ? style.active : ""}`} onClick={() => {
                  setTap("about")
                }}>About</a>
                <a className={` ${tap === "tours" ? style.active : ""}`} onClick={() => {
                  setTap("tours")
                }}>{technicalData.name}’s Tours</a>
              </div>
              <div className={style["text"]} id="text">
                {
                  tap === "about" &&
                  <>
                    {/* <p>Hi, I'm Sophie, a passionate virtual tour guide with extensive experience in providing immersive and engaging virtual tours. </p>
                    <p>Originally from the UK I moved out to Egypt 24yrs ago falling in love with the history and the culture I have never looked back!</p>
                    <p>I have a deep love for history, culture, and travel, and I enjoy sharing my knowledge with people from all around the world. My goal is to transport you to fascinating destinations and make you feel like you're right there, experiencing the sights, sounds, and stories.</p> */}
                    <h4>Description</h4>
                    {technicalData?.description ? (
                      <p>{technicalData.description}</p>
                    ) : (
                      <p style={{ margin: "10px 0" }}>You don't have description yet!</p>
                    )}
                    <h4>Education</h4>
                    {!hasAllInformation ? (
                      <p style={{ margin: "10px 0" }}>You don't have Education Data yet!</p>
                    ) : (
                      <div>
                        <h5>{technicalData?.degree}</h5>
                        <p>{technicalData?.university}</p>
                        <p>({technicalData?.startYear} - {technicalData?.graduateYear})</p>
                      </div>
                    )}

                    <h4>Experiences</h4>
                    {technicalData?.position.length === 0 && technicalData?.company.length ===0 && technicalData?.startDate.length === 0 && technicalData?.endDate.length === 0 ? (
                      <p style={{ margin: "10px 0" }}>You don't have Education Data yet!</p>
                    ) : (
                      <div>
                        <h5>{technicalData?.position[0]}</h5>
                        <p>{technicalData?.company[0]}</p>
                        <p>({technicalData?.startDate[0]} - {technicalData?.endDate[0]})</p>
                      </div>
                    )}
                    {/* <h5>Virtual Tour Guide</h5>
                    <p>Wanderlust Tours</p>
                    <p>(2018 - Now)</p>
                    <h5>Tour Guide</h5>
                    <p>City Explorers Company</p>
                    <p>(2016 - 2018)</p> */}
                  </>
                }
                {
                  tap == "tours" &&
                  <>
                    <p>Hi, I'm Sophie, a passionate virtual tour guide with extensive experience in providing immersive and engaging virtual tours. </p>
                    <p>Originally from the UK I moved out to Egypt 24yrs ago falling in love with the history and the culture I have never looked back!</p>
                    <p>I have a deep love for history, culture, and travel, and I enjoy sharing my knowledge with people from all around the world. My goal is to transport you to fascinating destinations and make you feel like you're right there, experiencing the sights, sounds, and stories.</p>
                    <h4>Education</h4>
                    <h5>Bachelor's Degree in History</h5>
                    <p>XYZ University, New York </p>
                    <p>(2011 - 2015)</p>
                    <h4>Experiences</h4>
                    <h5>Virtual Tour Guide</h5>
                    <p>Wanderlust Tours</p>
                    <p>(2018 - Now)</p>
                    <h5>Tour Guide</h5>
                    <p>City Explorers Company</p>
                    <p>(2016 - 2022)</p>
                  </>
                }
              </div>
            </div>
            <div className={style["languages"]}>
              <h3>Languages</h3>
              <div className={style["langs"]}>
                {selectLanguages.map((language) => (
                  <a key={language.name} onClick={() => handleLanguageClick(language)}>
                    <img src={language.imgSrc} alt='' /> {language.name}
                  </a>
                ))}
              </div>
              <h3>Address</h3>
              <a href="#"><img src={group66} alt='' /> Cairo, Egypt</a>
              <p>Joined since {formatDate(technicalData?.joinedAt)}</p>
            </div>

          </div>
        </div>
      </div>
      <footer>
        <div className={style["container"]}>
          <div className={style["footer__content"]}>
            <ul>
              <li><img src={logo1} alt='' /></li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</li>
              <li className={style["links"]}>
                <a href="#"><img src={facebook} alt='' /></a>
                <a href="#"><img src={twitter} alt='' /></a>
                <a href="#"><img src={instagram} alt='' /></a>
                <a href="#"><img src={linked} alt='' /></a>
                <a href="#"><img src={youtube} alt='' /></a>
              </li>
            </ul>
            <ul>
              <li>Website</li>
              <li>Tours</li>
              <li>Pricing</li>
              <li>Our Mission</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Support</li>
              <li>Getting started</li>
              <li>Help center</li>
              <li>Report a bug</li>
              <li>Chat support</li>
            </ul>
            <ul>
              <li>Downloads</li>
              <li><img src={frame97} alt='' /></li>
              <li><img src={frame98} alt='' /></li>
            </ul>
          </div>
          <div className={style["footer__footer"]}>
            <h4>Copyright © 2023 LVW.</h4>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TechnicalProfile