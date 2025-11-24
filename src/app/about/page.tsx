"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import { en } from "../../../constants/en";
import type { Language } from "../../../constants/language.types";
import { nl } from "../../../constants/nl";

export default function About() {
	const [lang, setLang] = useState<Language>("en");
	const content = lang === "nl" ? nl : en;
	return (
		<>
			<Header title={content.aboutHeader} lang={lang} setLang={setLang} />
			<ul className="space-y-8 w-full px-2 sm:px-0">
				{/* Education */}
				<li className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 sm:gap-6">
					<div className="flex-1">
						<h2 className="text-xl font-bold mb-2 text-center">
							{content.educationHeader}
						</h2>
						<ul className="list-disc ml-6 space-y-6">
							<li>
								<strong>{content.educationDegree}</strong>
								<br />
								{content.educationSchool}
								<br />
								{content.educationDescription}
							</li>
						</ul>
					</div>
					<div className="w-24 h-24 sm:w-32 sm:h-32 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
						<Image
							src="/hogeschool-leiden.png"
							alt="Hogeschool Leiden"
							className="w-full h-full object-cover rounded-lg"
							width={400}
							height={400}
						/>
					</div>
				</li>
				{/* Experience */}
				<li className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 sm:gap-6">
					<div className="flex-1">
						<h2 className="text-xl font-bold mb-2 text-center">
							{content.experienceHeader}
						</h2>
						<ul className="list-disc ml-6 space-y-6">
							<li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
								<div>
									<strong>{content.experienceOdidoTitle}</strong> (
									{content.experienceOdidoPeriod})
									<br />
									{content.experienceOdidoDescription}
								</div>
								<div className="w-16 h-16 sm:w-24 sm:h-24 aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
									<Image
										src="/odido-logo.png"
										alt="Odido Logo"
										className="w-full h-full object-cover rounded-lg"
										width={96}
										height={96}
									/>
								</div>
							</li>
							<li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
								<div>
									<strong>{content.experienceAhTitle}</strong> (
									{content.experienceAhPeriod})
									<br />
									{content.experienceAhDescription}
								</div>
								<div className="w-16 h-16 sm:w-24 sm:h-24 aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
									<Image
										src="/AH-logo.png"
										alt="Albert Heijn Logo"
										className="w-full h-full object-cover rounded-lg"
										width={96}
										height={96}
									/>
								</div>
							</li>
						</ul>
					</div>
				</li>
				{/* Certifications */}
				<li className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 sm:gap-6">
					<div className="flex-1">
						<h2 className="text-xl font-bold mb-2 text-center">
							{content.certificationsHeader}
						</h2>
						<ul className="list-disc ml-6 space-y-6">
							<li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
								<div>
									<strong>{content.certificationReactTitle}</strong>
									<br />
									{content.certificationReactDescription}
								</div>
								<div className="w-16 h-16 sm:w-24 sm:h-24 aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
									<Image
										src="/React-logo.png"
										alt="React Logo"
										className="w-full h-full object-fill rounded-lg"
										width={96}
										height={96}
									/>
								</div>
							</li>
							<li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
								<div>
									<strong>{content.certificationSwiftTitle}</strong>
									<br />
									{content.certificationSwiftDescription}
								</div>
								<div className="w-16 h-16 sm:w-24 sm:h-24 aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
									<Image
										src="/swift-logo.png"
										alt="Swift Logo"
										className="w-full h-full object-fill rounded-lg"
										width={96}
										height={96}
									/>
								</div>
							</li>
							<li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
								<div>
									<strong>{content.certificationFlutterTitle}</strong>
									<br />
									{content.certificationFlutterDescription}
								</div>
								<div className="w-16 h-16 sm:w-24 sm:h-24 aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
									<Image
										src="/flutter-logo.png"
										alt="Flutter Logo"
										className="w-full h-full object-fill rounded-lg"
										width={96}
										height={96}
									/>
								</div>
							</li>
						</ul>
					</div>
				</li>
				{/* Hobbies */}
				<li className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 sm:gap-6">
					<div className="flex-1">
						<h2 className="text-xl font-bold mb-2 text-center">
							{content.hobbiesHeader}
						</h2>
						<ul className="list-disc ml-6 space-y-6">
							<li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
								<div className="flex-1">
									<strong>Powerlifting</strong> &mdash;{" "}
									{content.hobbyPowerlifting}
								</div>
							</li>
							<li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
								<div className="flex-1">
									<strong>Dungeons &amp; Dragons</strong> &mdash;{" "}
									{content.hobbyDnD}
								</div>
							</li>
							<li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
								<div className="flex-1">
									<strong>Gaming</strong> &mdash; {content.hobbyGaming}
								</div>
							</li>
							<div className="w-full flex justify-center mt-2 sm:mt-4">
								<Slideshow
									images={[
										"/knkf-logo2.png",
										"/rocket-league-logo2.png",
										"/bg3-logo.png",
										"/dnd-logo.png",
									]}
								/>
							</div>
						</ul>
					</div>
				</li>
			</ul>
		</>
	);
}

const Slideshow = ({ images }: { images: string[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Change image every 3 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="flex items-center justify-center w-full">
			<div className="w-40 h-28 sm:w-60 sm:h-40 bg-neutral-200 dark:bg-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
				<Image
					src={images[currentIndex]}
					alt={`Slideshow image ${currentIndex + 1}`}
					className="w-full h-full object-fill"
					width={160}
					height={112}
				/>
			</div>
		</div>
	);
};
