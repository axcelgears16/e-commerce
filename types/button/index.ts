export interface ButtonProps {
	classButton: string,
	onClick: () => Promise<void>;
	text: string;
	type?: "button" | "submit" | "reset";
}