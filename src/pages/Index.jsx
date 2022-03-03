import React from 'react'
import Features from '../components/Index/Features'
import Hero from '../components/Index/Hero'

/**
 * INDEX PAGE
 * @returns {JSX}
 */
function Index() {
  return (
    <main>
      <section>
        <Hero />
        <Features />
      </section>
    </main>
  )
}

export default Index
