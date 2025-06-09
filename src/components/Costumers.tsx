import "../../node_modules/swiper/swiper.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import FeedbackCard, { FeedbackCardProps } from "./FeedbackCard"
import SwiperNavigationButtons from "./SwiperNavigationButtons";
import person1 from "@/assets/loginImg.svg";

const Feedback: React.FC = () => {
	const feedbackInfo: FeedbackCardProps[] = [
		{
			imgSrc: person1,
			name: "Joel Silva",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
		{
			imgSrc: person1,
			name: "Romeu Cajamba",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
		{
			imgSrc: person1,
			name: "Romeu Cajamba",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
		{
			imgSrc: person1,
			name: "Romeu Cajamba",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
	]

	return (
		<section className="default-layout-vertical" id="feedback">
			<h2 className="text-3xl font-semibold mb-6 text-[#FF5777] text-center">Testemunhos</h2>
			<div className="relative w-full flex flex-col">
				<Swiper
					modules={[Navigation, Autoplay]}
					spaceBetween={50}
					slidesPerView={3}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					autoplay={{
						disableOnInteraction: true,
						delay: 3000,
					}}
					breakpoints={{
						320: {
							spaceBetween: 10,
							slidesPerView: 1,
						},
						1024: {
							spaceBetween: 50,
							slidesPerView: 3,
						},
					}}
					className="w-full z-50"
				>
					{feedbackInfo.map((feedback, index) => (
						<SwiperSlide key={index}>
							<FeedbackCard
								imgSrc={feedback.imgSrc}
								name={feedback.name}
								feedback={feedback.feedback}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="w-full rounded-lg bg-[#FF5777]/20 h-20 -skew-x-12 absolute -bottom-8"></div>
			</div>

			<SwiperNavigationButtons />
		</section>
	)
}

export default Feedback