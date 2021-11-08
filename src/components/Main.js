import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/Vinay Linkedin New Enhanced.jpg'
import pic02 from '../images/pic02.webp'
import pic03 from '../images/pic03.webp'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I am a Principal Software Engineer with an experience of 7+ years in software
            development, architecting and delivering high quality websites and mobile
            applications (Hybrid) in various industries. I have a proven track record of
            delivering high quality products to customers. I have extensively worked with
            Small to Medium sized companies and enjoyed the challenges of building scalable,
            performant and cost effective solutions.
          </p>
          <p>
            Well versed with modern web technologies and frameworks, including React, Node,
            GraphQL, Angular, Django. I love to learn new technologies and am always looking
            to improve my skills.
          </p>
          <p>
            Outside work, I love to read self help books, technical articles, watch movies,
            play board games and love playing outdoor sports like Football, Cricket &
            Volleyball. I enjoy taking occassional road trips to explore new places & local
            culture.
          </p>
          <p>
            I like mentoring and helping others learn new skills and technologies. Please feel
            free to reach out to me if you have any questions or want to work together.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I have been working with CodeParva Technologies since the year 2018. I have since then worked on various challenging projects like developing a customized redux framework, which improves the Developer experience greatly.
            I have also worked on creating a ESign application, which is being used by many clients in USA.
            We are currently working on creating a configurations driven web application, which will enable our customers to create a website just from the CMS.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I have been working with CodeParva Technologies since the year 2017. I have since then worked on various challenging projects like developing a customized redux framework, which improves the Developer experience greatly.
            I have also worked on creating a ESign application, which is being used by many clients in USA.
            We are currently working on creating a configurations driven web application, which will enable our customers to create a website just from the CMS.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
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
              <a href="https://www.linkedin.com/in/vinaygopalaiah/"
              target="_blank"
              rel="noopener noreferral" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gopalvinay/"
              target="_blank"
              rel="noopener noreferral" className="icon fa-instagram">
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
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
