import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/home/HomeCoverSection";
import FeaturedPosts from "../components/home/FeaturedPosts";
import RecentPosts from "../components/home/RecentPosts";
export default function Home() {
	// console.log(allBlogs);
	return (
		<main className="flex  flex-col items-center justify-center ">
			<HomeCoverSection blogs={allBlogs} />
			<FeaturedPosts blogs={allBlogs} />
			<RecentPosts blogs={allBlogs} />
		</main>
	);
}
