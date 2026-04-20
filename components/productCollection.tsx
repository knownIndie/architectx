import Image from "next/image";
import products from "@/constant";

function ProductCard({
	title,
	image,
	imageAlt,
	className = "",
}: {
	title: string;
	image: string;
	imageAlt: string;
	className?: string;
}) {
	return (
		<article
			className={`group relative overflow-hidden bg-stone-200 shadow-[0_18px_55px_rgba(15,23,42,0.08)] ${className}`}
		>
			<div className="relative aspect-[4/5] min-h-[420px] w-full">
				<Image
					src={image}
					alt={imageAlt}
					fill
					sizes="(max-width: 768px) 100vw, 33vw"
					className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
					priority={title === "Doors"}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-white/8" />
				<div className="absolute inset-0 flex items-center justify-center p-6">
					<h3 className="text-center text-4xl font-light tracking-[-0.04em] text-white md:text-5xl">
						{title}
					</h3>
				</div>
			</div>
		</article>
	);
}

export default function ProductCollection() {
	const [featured, ...secondaryProducts] = products;

	return (
		<section className="min-h-screen bg-[#f3eee8] px-5 py-8 text-[#171717] sm:px-8 lg:px-14 lg:py-10">
			<div className="border-t border-black/10 pt-6">
				<div className="flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-black/80">
					<span className="block h-2 w-2 rotate-45 bg-black/80" />
					<span>Product Collection</span>
				</div>
			</div>

			<div className="mx-auto mt-10 grid max-w-[1600px] gap-x-12 gap-y-14 lg:mt-20 lg:grid-cols-[minmax(0,0.88fr)_minmax(280px,0.52fr)] lg:items-start">
				<div className="mx-auto w-full max-w-[540px] lg:max-w-[640px] lg:justify-self-center">
					<ProductCard
						title={featured.title}
						image={featured.image}
						imageAlt={featured.imageAlt}
					/>
				</div>

				<div className="flex max-w-[420px] flex-col justify-center gap-10 lg:pt-24">
					<p className="text-[1.35rem] leading-[1.45] tracking-[-0.03em] text-black/80 md:text-[1.65rem]">
						Our{" "}
						<span className="font-semibold text-black">glazing collection</span>{" "}
						is defined by exceptional craftsmanship, refined design, and
						enduring quality. Made for bold architecture and uncompromising
						vision.
					</p>

					<a
						href="#products-grid"
						className="inline-flex w-fit items-center gap-4 bg-[#111417] px-7 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.28em] text-white transition-colors hover:bg-black"
					>
						<span aria-hidden="true" className="text-base leading-none">
							-&gt;
						</span>
						<span>Product overview</span>
					</a>
				</div>
			</div>

			<div
				id="products-grid"
				className="mx-auto mt-20 grid max-w-[1800px] gap-x-12 gap-y-14 md:grid-cols-2 xl:mt-28 xl:grid-cols-3"
			>
				{secondaryProducts.map((product) => (
					<div key={product.title} className={product.className}>
						<ProductCard
							title={product.title}
							image={product.image}
							imageAlt={product.imageAlt}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
