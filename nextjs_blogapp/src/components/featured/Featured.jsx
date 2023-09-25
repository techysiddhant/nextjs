import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey, siddhant here!</b> Discover my stories and creative ideas.
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image
						src="/p1.jpeg"
						alt="imaghe"
						fill
						className={styles.image}
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit!
					</h1>
					<p className={styles.postDesc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam
						perferendis accusamus harum libero dolorem veniam asperiores deserunt
						adipisci soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Soluta, illum?
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
