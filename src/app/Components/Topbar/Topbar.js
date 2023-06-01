" use client "
import styles from "./Topbar.module.css"

const Topbar = () => {
    return <header>
        <div className={styles.topBar}>
            <div>
                <a className={styles.leftNav}>
                    <div className={styles.logo}>EDYODA</div>
                    <p className={styles.logoStories}>Stories</p>
                </a>
            </div>

            <div className={styles.rightNav}>
                <div className={styles.explore}>
                    <p>Explore Categories</p>
                    <span><img className={styles.arrowImg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="/></span>
                </div>

                <div className={styles.rightNavBar}>
                    <div>
                        <p className={styles.para}> EdYoda is a learning and knowledge sharing platform for techies </p>
                    </div>

                    <div>
                        <button className={styles.btn}>Go To Main Website</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Topbar