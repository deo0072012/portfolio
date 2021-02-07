import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var name1 = this.props.data.name1;
         var profilepic = "images/" + this.props.data.image;
         var profilepic1 = "images/" + this.props.data.image1;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Dev profile pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Dev</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                          
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <hr></hr>

            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic1} alt="wordpress developer" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Sawagismini</h2>

                  <p>{"She Is One Of The Best Frontend Developers . She Has Also the Relevant Skills in the Automation And Machine Learning And  She is A Word Press Developer Too."}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name1}</span><br />
                           <span>{street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>freetolance247@gmail.com</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button"><i download="myFile" className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>


         </section>
      );
   }
}

export default About;
