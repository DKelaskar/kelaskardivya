import React, { useState, useEffect } from 'react'
import simpleIcons from 'simple-icons'
import Head from 'next/head'
import { Row, Col } from 'react-flexbox-grid'
import dynamic from 'next/dynamic'
import { config } from 'react-spring'

const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false
});

import Layout from '../components/Layout'
import { PRESENT, SKILLS } from '../constants/Stack'

const Icon = ({ stack, style }) => {
  const icon = simpleIcons.get(stack)

  return (
    <div
      data-icon={stack}
      style={{
        fill: `#${icon.hex}`,
        display: 'inline-block',
        width: '50px',
        margin: '0 auto',
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  )
}

function About() {
  const [index, setIndex] = useState(0)
  const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/theavidcoder`

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    )
  }, [])

  return (
    <>
      <img className="about-avatar" src={avatar} />

      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="about-h1">
            Divya {' '}
            <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: 'inline-block' }}
            />
          </h1>

          <div className="about-intro">
            <Row>
            <Col md={12}>
                I'm a Computer Science Undergrad who loves to explore new things.

                <br /><br />

                When I am not in front of computer screen, I would be rather watching movies, reading books or crossing off an another item in my bucket list.
              </Col>
            </Row>

            <hr />

            <h3>What I've worked with so far</h3>

            <Row style={{ marginTop: 30 }}>
              {PRESENT.map(s => (
                <Col md={2} xs={4} key={s} style={{ textAlign: 'center', marginBottom: 40 }}>
                  <Icon stack={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>

            <hr />

          </div>
        </div>
      </Layout>
    </>
  )
}

export default About

