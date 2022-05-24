import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './interviews.css'

const Interviews = (props) => {
  return (
    <div className="interviews-container">
      <Helmet>
        <title>Interviews - ACL WH7 Final - Matthew Yakligian</title>
        <meta
          property="og:title"
          content="Interviews - ACL WH7 Final - Matthew Yakligian"
        />
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name2"></Navigation>
      <div className="interviews-hero section-container">
        <div className="interviews-max-width max-content-container">
          <div className="interviews-content-container">
            <h1 className="heading1 interviews-text">
              <span>Interviews</span>
              <span></span>
            </h1>
          </div>
          <div className="interviews-video-container"></div>
        </div>
        <div className="interviews-blue-background"></div>
      </div>
      <div className="interviews-container1">
        <h1>Questions</h1>
        <span className="interviews-text04">
          <span>1. how many siblings do you have?</span>
          <br></br>
          <span>2. Where did you go to college?</span>
          <br></br>
          <span>3. WHere did you grow up?</span>
          <br></br>
          <span>
            4. What was the meanest thing that your siblings ever did to you?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            5.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Were you named after a relative or famous person?</span>
          <span className="interviews-text15"></span>
          <br></br>
          <span>6. Where have you worked before?</span>
          <br></br>
          <span>7. Who is the oldest family member you knew?</span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className="interviews-container2">
        <h1>Answers</h1>
        <span className="interviews-text23">
          <span className="interviews-text24">Melinda Yakligian (My Mom)</span>
          <span></span>
          <br></br>
          <span>1. I have 2 siblings.</span>
          <br></br>
          <span>2. I went to college at UC Berkeley.</span>
          <br></br>
          <span>3. I grew up in Washington and in Cupertino.</span>
          <br></br>
          <span>4. The meanest thing they did to me was</span>
          <br></br>
          <span>
            5. I was named after a Character in a Soap Opera TV Show. My middle
            name is my Mom&apos;s name.
          </span>
          <br></br>
          <span>
            6. In high school I worked in a tennis shop selling tennis
            equipment, I babysat kids, and I also was hired by the local tennis
            club to help run tennis camps for kids
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            In college I worked in the payroll department at a library on the UC
            Berkeley campus.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span></span>
          <span>
            After college I worked for Prudential Financial for PMCC, Prudential
            Mortgage Capital Company first as an investment analyst then as was
            promoted 3 times until I was an underwriter for multi million dollar
            mortgage deals. I had to travel all over The mid west and west coast
            to do site inspections of commercial real estate. We issues loans
            for $2 million and up. The biggest loan I underwrote was for the
            Mall of America and it was over $200 million loan.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            7. The oldest family member that I knew was your great-grandpa
            Zimmerman. He just recently died. He grew up very poor on a farm in
            Corning/Orland area. When his dad died and all his brothers went to
            war he stayed home and was given a driver&apos;s license at 13 to
            drive his mom around. He was a super hard worker all of his life.
          </span>
          <span></span>
          <span></span>
        </span>
        <span className="interviews-text45">
          <span className="interviews-text46">
            Carolyn Zimmerman (My Mom&apos;s, Mom)
          </span>
          <br></br>
          <span>
            1. I have 2 brothers and 2 sisters. One of them is my twin sister.
            She was Born just a few seconds before me, meaning I am the
            youngest.
          </span>
          <br></br>
          <span>2. I went to college at CHico State.</span>
          <br></br>
          <span>3. I grew up in Rancho Palos Verdes.</span>
          <br></br>
          <span>
            4. Some times, my siblings would take me outside, and tickle me
            until I cried. THey were all older than me.
          </span>
          <br></br>
          <span>5. No, I was not.</span>
          <br></br>
          <span>
            6. In high school, I babysat kids. when I grew up, I became a
            dietiTian for a hospital in San Jose. Later I helped High-school
            Students that had Mental problems and those that had problems in
            their lives.
          </span>
          <br></br>
          <span>
            7. The oldest family member that I knew were my parents, my
            grandparents died while I was young.
          </span>
        </span>
        <span className="interviews-text61">
          <span className="interviews-text62">
            Marty Zimmerman (My Mom&apos;s, Dad)
          </span>
          <br></br>
          <span>1. I have 1 brother and 4 sisters.</span>
          <br></br>
          <span>2. I went to college at CHico State.</span>
          <br></br>
          <span>3. I grew up in Orland, CA.</span>
          <br></br>
          <span>
            4. Some times, my siblings would make me do all of their chores for
            them.
          </span>
          <br></br>
          <span>5. I was named after my Dad.</span>
          <br></br>
          <span>6. I have been a CPA my whole life and still am.</span>
          <br></br>
          <span>
            7. The oldest family member that I knew were my parents, my
            grandparents died Early, just like your grandma.
          </span>
        </span>
      </div>
      <div className="interviews-container3">
        <span className="interviews-text77">
          THIS WEBSITE WAS CREATED BY MATTHEW YAKLIGIAN FOR THE ACL WORLD
          HISTORY FINAL 2022
        </span>
        <span className="interviews-text78">
          ©2022 Yakligian INC, All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default Interviews
