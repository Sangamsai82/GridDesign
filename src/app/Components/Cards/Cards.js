"use client"
import styles from "./Cards.module.css"

const Cards = () => {
    return <div className={styles.backGround}>

        <div className={styles.latestPosts}>
            <h3 className={styles.title}>Latest Posts</h3>

            <div className={styles.container}>
                <div className={styles.filter}>
                    <img className={styles.filterImg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" />
                    <p className={styles.filterPara}>Filter by Category</p>
                </div>

                <div className={styles.categoryList}>
                    <div className={styles.categoryItemActive}>All</div>
                    <div className={styles.categoryItem}>Atificial Intelligence</div>
                    <div className={styles.categoryItem}>Cloud Computing</div>
                    <div className={styles.categoryItem}>DevOps</div>
                    <div className={styles.categoryItem}>Programming Languages</div>
                    <div className={styles.categoryItem}>Mobile Application Development</div>
                    <div className={styles.categoryItem}>Technology and Tools</div>
                    <div className={styles.categoryItem}>Get a Job in a Tech Company</div>
                    <div className={styles.categoryItem}>Others</div>
                </div>
            </div>

        </div>

        <div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg" alt="Fresh Graduate or IT professional Looking for a job ? - 7 reasons to learn Python NOW!" />
                    </div>

                    <div className={styles.cardContent}>
                        <h3>Fresh Graduate or IT professional Looking for a job ? - 7 reasons to learn Python NOW!</h3>
                        <p className={styles.authorName}>
                            Arman Ahmed <span className={styles.date}>
                                | 05 Jul 2019
                            </span>
                        </p>
                        <p className={styles.para}>If you are a fresh graduate - or new to IT - looking for the next job, you need to read this.

                            The last couple of years zekeLabs gave me a unique opportunity to assess technology demand in the industry and also to evaluate available talent pool for the demand.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg" alt="Introducing you all to EdYoda - www.edyoda.com" />
                    </div>

                    <div className={styles.cardContent}>
                        <h3>Introducing you all to EdYoda - www.edyoda.com</h3>
                        <p className={styles.authorName}>
                            Arman Ahmed <span className={styles.date}>
                                | 05 Jul 2019
                            </span>
                        </p>
                        <p className={styles.para}>Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.

                            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg" alt="From identity crisis to the Success Story - The DevOps revolution!" />
                    </div>

                    <div className={styles.cardContent}>
                        <h3>From identity crisis to the Success Story - The DevOps revolution!</h3>
                        <p className={styles.authorName}>
                            Kalyan Mahalingam <span className={styles.date}>
                                | 05 Jul 2019
                            </span>
                        </p>
                        <p className={styles.para}>So What is DevOps all about -
                            DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in Software Development Lifecycle (SDLC) process in most of the organizations.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg" alt="Typical day of Data Scientist - An insider story!" />
                    </div>

                    <div className={styles.cardContent}>
                        <h3>Typical day of Data Scientist - An insider story!</h3>
                        <p className={styles.authorName}>
                            Saurav Ghosh  <span className={styles.date}>
                                | 05 Jul 2019
                            </span>
                        </p>
                        <p className={styles.para}>To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.

                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img className={styles.img} src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg" alt="Amazon Web Services (AWS) Cloud Day - Bangalore" />
                    </div>

                    <div className={styles.cardContent}>
                        <h3>Amazon Web Services (AWS) Cloud Day - Bangalore</h3>
                        <p className={styles.authorName}>
                            Kalyan Mahalingam <span className={styles.date}>
                                | 05 Jul 2019
                            </span>
                        </p>
                        <p className={styles.para}>I recently had the opportunity to attend the AWS Cloud Day event organized by Amazon Web Services. The AWS Cloud Day brings together the cloud computing community to connect, collaborate and learn about AWS. Here, I have tried to share my learning and experience of the event.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img className={styles.img} src="	https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-large_xJDPPZO.jpg" alt="edYoda Meetup #01 : A Date with Cloud" />
                    </div>

                    <div className={styles.cardContent}>
                        <h3>edYoda Meetup #01 : A Date with Cloud</h3>
                        <p className={styles.authorName}>
                            Ashish Pandey <span className={styles.date}>
                                | 05 Jul 2019
                            </span>
                        </p>
                        <p className={styles.para}>I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the series of meetups planned by the team here. The focus area of the meetups is emerging technologies including Big Data, Cloud, Machine Learning, Blockchain, IOT, and others.
                        </p>
                    </div>
                </div>







            </div>
        </div>
    </div>
}

export default Cards