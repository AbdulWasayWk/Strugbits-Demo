import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from "@mui/material";

interface MealCardProps {
	title: string;
	description: string;
	cuisine: string;
	image: string;
	rating?: number;
	mealType?: Array<string>;
	selected?: boolean;
	onSelection?: () => void;
	onDeleteClick?: () => void;
}

export default function MealCard({
	title,
	description,
	cuisine,
	image,
	rating,
	mealType,
	selected,
	onSelection,
	onDeleteClick,
}: MealCardProps) {
	return (
		<Card className={`card ${selected ? "cardBorder" : ""}`}>
			<CardActionArea className={"cardActionArea"} onClick={onSelection}>
				<CardMedia className={"cardImage"} image={image} title={title}>
					<Box className={"cardImageContainer"}>
						<Box>
							{onDeleteClick && (
								<Box ml={"10px"} className={"deleteContainer"} onClick={onDeleteClick}>
									<DeleteOutlineIcon sx={{ color: "red" }} />
								</Box>
							)}
						</Box>
						<Box mr={"10px"}>
							{mealType && mealType.length ? (
								mealType.map((type) => (
									<Box key={type} className={"mealTypeContainer"}>
										<Typography variant="caption" color="white">
											{type}
										</Typography>
									</Box>
								))
							) : (
								<></>
							)}
						</Box>
					</Box>
				</CardMedia>
				<CardContent className={"cardContent"}>
					<Box>
						<Typography variant="h6" sx={{ fontWeight: "bold" }}>
							{title}
						</Typography>
						<Typography variant="caption" className={"cardDescription"}>
							{description}
						</Typography>
					</Box>
					<Box className={"cardBottomBox"}>
						<Box className={"cuisineBox"}>
							<Typography variant="caption" sx={{ fontWeight: "bold" }}>
								Cuisine:{" "}
							</Typography>
							<Typography variant="caption">{cuisine}</Typography>
						</Box>
						<Box className={"ratingBox"}>
							<Typography variant="caption" sx={{ fontWeight: "bold" }}>
								Rating:{" "}
							</Typography>
							<Typography variant="caption">{rating}</Typography>
							<Rating precision={0.5} size="small" readOnly value={rating} />
						</Box>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
