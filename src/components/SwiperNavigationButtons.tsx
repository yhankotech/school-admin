import {
	HiOutlineArrowNarrowLeft,
	HiOutlineArrowNarrowRight,
} from "react-icons/hi"

const SwiperNavigationButtons: React.FC = () => {
	return (
		<div className="w-full flex justify-center z-50 mt-12 gap-2">
			<button className="swiper-button-prev px-2 py-1 group hover:bg-[#FF5777]  rounded-md cursor-pointer">
				<HiOutlineArrowNarrowLeft className="text-3xl text-[#FF5777] group-hover:text-[#1A202C]" />
			</button>

			<button className="swiper-button-next px-2 py-1 group hover:bg-[#FF5777]  rounded-md cursor-pointer">
				<HiOutlineArrowNarrowRight className="text-3xl text-[#FF5777] group-hover:text-[#1A202C]" />
			</button>
		</div>
	)
}

export default SwiperNavigationButtons