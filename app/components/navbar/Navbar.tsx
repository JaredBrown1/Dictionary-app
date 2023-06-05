import Image from "next/image";
const Navbar = () => {
	return (
		<div className="flex justify-between w-1/2">
			<Image src="/images/logo.svg" alt="logo" width={32} height={36.5} />
			<div className="flex">
				<div>San Serif</div>
				<div>Toggle Dark Mode</div>
			</div>
		</div>
	);
};
export default Navbar;
