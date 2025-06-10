import quotes from "../assets/quotes.svg"
import Image from "next/image"
export interface FeedbackCardProps {
	imgSrc: string
	name: string
	feedback: string
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
	imgSrc,
	name,
	feedback,
}) => {
	return (
		<div className="p-5 flex flex-col gap-4 rounded-lg max-lg:rounded-2xl border border-[#FF5777] bg-[#1A202C] cursor-default">
			<div className="flex justify-between gap-2">
				<div className="flex gap-2 items-center">
					{" "}
					<Image src={imgSrc} alt="" className="w-16 max-lg:w-12" />
					<div className="flex flex-col gap-2 w-full">
						<p className="font-bold text-sm max-lg:text-sm">{name}</p>
					</div>
				</div>

				<Image src={quotes} alt="Quotes" className="w-12" />
			</div>

			<p className="text-sm max-lg:text-xs">{feedback}</p>
		</div>
	)
}

export default FeedbackCard