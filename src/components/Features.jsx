import React from 'react'
import styles from '../styles/features.module.css'
import '../styles/index.css'
import chatIcon from '../assets/icon-chat.png'
import moneyIcon from '../assets/icon-money.png'
import securityIcon from '../assets/icon-security.png'

function Features() {
  return (
    <section className={styles.features}>
      <h2 className="srOnly">Features</h2>
      <div className={styles.feature_item}>
        <img src={chatIcon} alt="Chat Icon" className={styles.feature_icon} />
        <h3 className={styles.feature_item_title}>You are our #1 priority</h3>
        <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
      </div>
      <div className={styles.feature_item}>
        <img src={moneyIcon} alt="Chat Icon" className={styles.feature_icon} />
        <h3 className={styles.feature_item_title}>More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className={styles.feature_item}>
        <img src={securityIcon} alt="Chat Icon" className={styles.feature_icon} />
        <h3 className={styles.feature_item_title}>Security you can trust</h3>
        <p>We use top of the line encryption to make sure your data and money is always safe.</p>
      </div>
    </section>
  )
}

export default Features
