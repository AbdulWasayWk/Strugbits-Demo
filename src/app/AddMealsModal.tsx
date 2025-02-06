import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Typography } from "@mui/material";
import { useState } from "react";

interface AddMealsModalProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (week: "week-one" | "week-two" | "week-three" | "week-four") => void;
}

export default function AddMealsModal({ open, onClose, onSubmit }: AddMealsModalProps) {
	const [selectedChip, setSelectedChip] = useState<"" | "week-one" | "week-two" | "week-three" | "week-four">("");

	const handleClose = () => {
		setSelectedChip("");
		onClose();
	};

	const handleSubmit = () => {
		if (selectedChip !== "") {
			onSubmit(selectedChip);
			handleClose();
		}
	};

	const handleChipSelection = (value: "week-one" | "week-two" | "week-three" | "week-four") => {
		setSelectedChip(value);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle variant="h5">Select Week</DialogTitle>
			<DialogContent>
				<Box
					className={selectedChip === "week-one" ? "chipSelected" : "chipUnselected"}
					onClick={() => {
						handleChipSelection("week-one");
					}}
				>
					<Typography sx={{ fontWeight: "bold" }}>Week 1</Typography>
				</Box>
				<Box
					className={selectedChip === "week-two" ? "chipSelected" : "chipUnselected"}
					onClick={() => {
						handleChipSelection("week-two");
					}}
				>
					<Typography sx={{ fontWeight: "bold" }}>Week 2</Typography>
				</Box>
				<Box
					className={selectedChip === "week-three" ? "chipSelected" : "chipUnselected"}
					onClick={() => {
						handleChipSelection("week-three");
					}}
				>
					<Typography sx={{ fontWeight: "bold" }}>Week 3</Typography>
				</Box>
				<Box
					className={selectedChip === "week-four" ? "chipSelected" : "chipUnselected"}
					onClick={() => {
						handleChipSelection("week-four");
					}}
				>
					<Typography sx={{ fontWeight: "bold" }}>Week 4</Typography>
				</Box>
			</DialogContent>
			<DialogActions
				sx={{
					alignItems: "center",
					justifyContent: "center",
					marginBottom: "20px",
				}}
			>
				<Button disabled={selectedChip === ""} sx={{ width: "150px" }} onClick={handleSubmit}>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
}
