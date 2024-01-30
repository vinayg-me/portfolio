import PropTypes from 'prop-types';
import React from 'react';
import pic01 from '../images/vinay-solo-new.jpg';
import pic02 from '../images/Vinay 2.jpg';
import pic03 from '../images/pic03.webp';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Welcome to my digital space! I'm a seasoned Principal Software
            Engineer with a rich tapestry of 9 years in the dynamic realm of
            software development. My journey has been a fascinating exploration,
            weaving through various industries, where I've passionately
            architected and delivered top-notch websites and hybrid mobile
            applications.
          </p>
          <h3>Professional Journey:</h3>
          <p>
            Throughout my career, I've embraced challenges with vigor, steering
            projects towards success in small to medium-sized companies. My
            expertise lies in crafting scalable, performant, and cost-effective
            solutions, leaving an indelible mark of quality on every product
            delivered.
          </p>
          <h3>Technological Proficiency:</h3>
          <p>
            Well-versed in the latest web technologies and frameworks, I thrive
            on continuous learning. My toolkit includes React, Redux, Node,
            GraphQL, Angular,Django, Redis, Elastic Search and Dockers, allowing
            me to stay at the forefront of innovation.
          </p>
          <h3>Latest Ventures at CodeParva:</h3>
          <p>
            Currently donning the hat of a Principal Software Engineer at
            CodeParva Technologies, I've been at the helm of transformative
            projects. Notably, I've led the development of a revolutionary
            low-code website builder, empowering non-developers to create and
            maintain websites effortlessly. Simultaneously, I've championed an
            automated migration framework, optimizing the transition of our
            customers to the latest SaaS offering.
          </p>
          <h3>Beyond the Code:</h3>
          <p>
            Outside the world of algorithms and code, I find joy in the simple
            pleasures of life. Whether immersing myself in self-help books or
            diving into technical articles, watching movies, or indulging in
            board games, each moment is a chance to absorb and grow. An avid
            player of outdoor sports like Football, Cricket, and Volleyball, I
            also relish the thrill of spontaneous road trips to explore new
            places and cultures.
          </p>
          <h3>Mentorship and Collaboration:</h3>
          <p>
            Passionate about mentoring and fostering a collaborative learning
            environment, I'm always open to sharing insights and helping others
            acquire new skills and technologies. If you have questions or
            exciting collaboration ideas, feel free to reach out. Let's innovate
            and create together!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h2 className="workTitle">CodeParva Technologies Pvt. Ltd.</h2>
          <h3 className="roleName">
            Principal Software Engineer | September 2021 - Present
          </h3>
          <p>
            As the Principal Software Engineer at CodeParva Technologies, I
            drive innovation and excellence in software development. Leading the
            development of a groundbreaking low-code website builder has been a
            pivotal achievement. This tool empowers non-developers to
            effortlessly create and maintain websites, significantly enhancing
            operational efficiency. Simultaneously, my role involves leading the
            development of an automated migration framework, optimizing and
            accelerating the transition of our clients to the latest SaaS
            offering.
          </p>
          <h3 className="roleName">
            Lead Software Engineer | June 2020 - September 2021
          </h3>
          <p>
            In my capacity as a Lead Software Engineer, I played a key role in
            advancing contactless self-service solutions during the Covid
            pandemic. Leading the development of a React Native app for
            self-storage facilities significantly improved customer experience
            and operational efficiency. Additionally, spearheading the
            development of an in-house Electronic Signature Application resulted
            in substantial cost savings and improved workflow efficiency.
          </p>
          <h3 className="roleName">
            Senior Software Engineer | April 2018 - June 2020
          </h3>
          <p>
            As a Senior Software Engineer, my focus was on optimizing state
            management and API integration through the customization of a Redux
            framework on React. Simultaneously, I transformed landing websites
            using Angular Universal, ensuring SEO friendliness and visually
            appealing UI. These efforts resulted in improved application
            performance and streamlined website creation processes across
            numerous facilities.
          </p>
          <hr />
          <h2 className="workTitle">UI PEP Technologies Private Limited</h2>
          <h3 className="roleName">
            Technical Consultant | September 2017 - May 2018
          </h3>
          <p>
            As a Technical Consultant at UI PEP Technologies, I provided
            technical solutions for day-to-day operations and long-range
            strategic planning. I developed and delivered four full-stack, Ionic
            & Angular-based mobile applications, dashboards, and client landing
            pages, actively contributing from requirements gathering to
            deployment and support.
          </p>
          <hr />
          <h2 className="workTitle">Ulphi Technologies LLP</h2>
          <h3 className="roleName">Co-Founder | January 2016 - April 2018</h3>
          <p>
            During my tenure as a Co-Founder at Ulphi Technologies, I
            successfully delivered Ionic-based mobile apps and Angular-based
            vendor dashboards for diverse projects, including apps like "I Love
            9 Months" and "APPI app." My collaborative efforts extended to
            projects like "Cure Up" and "Lybr App," contributing to the
            development of robust applications.
          </p>
          <hr />
          <h2 className="workTitle">CVS, New Jersey</h2>
          <h3 className="roleName">
            Web UI Developer | February 2015 - October 2015
          </h3>
          <p>
            In my role as a Web UI Developer, I was responsible for converting
            prototypes to functional websites using AngularJS. I played a
            pivotal role in solution design for ICE Digital Order Tracking and
            was responsible for developing and deploying ICE DOTM, showcasing my
            proficiency in web development and deployment processes.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I have been working with CodeParva Technologies since the year 2017.
            I have since then worked on various challenging projects like
            developing a customized redux framework, which improves the
            Developer experience greatly. I have also worked on creating a ESign
            application, which is being used by many clients in USA. We are
            currently working on creating a configurations driven web
            application, which will enable our customers to create a website
            just from the CMS.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/gopalaiahvinay"
                target="_blank"
                rel="noopener noreferral"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vinaygopalaiah/"
                target="_blank"
                rel="noopener noreferral"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gopalvinay/"
                target="_blank"
                rel="noopener noreferral"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vinayg-me"
                target="_blank"
                rel="noopener noreferral"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
