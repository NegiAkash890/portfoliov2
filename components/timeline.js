import React from 'react'
import styles from '../styles/timeline.module.css';
function Timeline() {
  return (
        <>
        <div className={styles['timeline_bar']}>
            <div id={styles['timeline_status_marker']}>
                <ul id={styles["timeline_steps"]}>
                    <li className={styles["timeline_step"]}></li>
                    <li className={styles["timeline_step"]}></li>
                    <li className={styles["timeline_step"]}></li>
                    <li className={styles["timeline_step"]}></li>
                </ul>
            </div>
        </div>
        <section className={styles["cd-horizontal-timeline"]}>
            <div className={styles["timeline"]}>
                <div className={styles["events-wrapper"]}>
                    <div className={styles["events"]}>
                        <ol>
                            <li><a href="#0" data-date="16/01/2014" className={styles["selected"]}>16 Jan</a></li>
                            <li><a href="#0" data-date="16/01/2014" className={styles["selected"]}>16 Jan</a></li>
                            <li><a href="#0" data-date="16/01/2014" className={styles["selected"]}>16 Jan</a></li>
                             <li><a href="#0" data-date="16/01/2014" className={styles["selected"]}>16 Jan</a></li>
                        </ol>
                    </div>
                </div> 
                    
                <ul className={styles["cd-timeline-navigation"]}>
                    <li><a href="#0" className={styles["prev"]}>&lt;</a></li>
                    <li><a href="#0" className={styles["next"]}>&gt;</a></li>
                </ul> 
            </div>

            <div className={styles["events-content"]}>
                    <div className={styles["selected"]} data-date="16/01/2014">
                        <h2>Horizontal Timeline</h2>
                        <em>January 16th, 2014</em>
                        <p>	
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                        </p>
                    </div>
            </div> 
        </section>
        </>
  )
}

export default Timeline ;