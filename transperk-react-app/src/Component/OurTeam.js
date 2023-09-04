import './styles/team.css'
import React, { Component } from 'react'
import userlogo from './img/user.jpg'

export class OurTeam extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Rushabh Wagh</h2>
                            <p>Student of MET Nashik in course PG-DAC started in March 2023</p>

                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;rushabhwagh86@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;+91 8669112691</i></h5>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Akash Thale</h2>
                            <p>Student of MET Nashik in course PG-DAC started in March 2023</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;akashthale7776@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;+91 8149421159</i></h5>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Akash Kolpe</h2>
                            <p>Student of MET Nashik in course PG-DAC started in March 2023</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;7743801729</i></h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item offset-md-2">
                    <div className="row">
                      <div className="col-md-4 ">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Chetan Sawale</h2>
                            <p>Student of MET Nashik in course PG-DAC started in March 2023</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;chetans9055@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;+91 9130962126</i></h5>

                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Rushikesh Sonawane</h2>
                            <p>Student of ACTS pune in course e-DAC started in March 2021</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;rushikesh@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;7878945623</i></h5>

                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="fa-style"><i className="fa fa-chevron-left" aria-hidden="true" /></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="fa-style"><i className="fa fa-chevron-right" aria-hidden="true" /></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div></div></div>

      </>
    )
  }
}

export default OurTeam
