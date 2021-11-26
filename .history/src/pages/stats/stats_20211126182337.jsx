import React from 'react'
import * as styles from './stats.module.scss'

const Stats = () => {
    return (
        <div className={styles.tmp}>
            <h1>We'll be here soon</h1>
            <p>Sbrikki's Books SEO score</p>
            <a href="https://freetools.seobility.net/en/seocheck/https://mike-cheek.github.io/sbrikkisbooks_official_website/">
                <img src="https://freetools.seobility.net/widget/widget.png?url=https://mike-cheek.github.io/sbrikkisbooks_official_website/" alt="Seobility Score für mike-cheek.github.io" />
            </a>
        </div>
    )
}

export default Stats
