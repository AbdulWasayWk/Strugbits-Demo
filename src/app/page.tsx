"use client";

import { Box, Button, LinearProgress, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { Meal } from "./types";
import MealCard from "./MealCard";
import Grid from "@mui/material/Grid2";
import AddMealsModal from "./AddMealsModal";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [selectedTab, setSelectedTab] = useState<"all" | "week-one" | "week-two" | "week-three" | "week-four">("all");
	const [allMeals, setAllMeals] = useState<Array<Meal>>([]);
	const [weekOneMeals, setWeekOneMeals] = useState<Array<Meal>>([]);
	const [weekTwoMeals, setWeekTwoMeals] = useState<Array<Meal>>([]);
	const [weekThreeMeals, setWeekThreeMeals] = useState<Array<Meal>>([]);
	const [weekFourMeals, setWeekFourMeals] = useState<Array<Meal>>([]);
	const [selectedMeals, setSelectedMeals] = useState<Array<Meal>>([]);
	const [openModal, setOpenModal] = useState(false);

	const fetchMeals = async () => {
		await fetch("https://dummyjson.com/recipes", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				setAllMeals(data.recipes);
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchMeals();
	}, []);

	const handleTabChange = (
		event: SyntheticEvent,
		newValue: "all" | "week-one" | "week-two" | "week-three" | "week-four",
	) => {
		setSelectedTab(newValue);
	};

	const handleMealSelection = (meal: Meal) => {
		// First checking if selected meal already exists in selectedMeals array

		const doesMealExist = selectedMeals.find((item) => item.id === meal.id) ? true : false;

		// If meal exists, removing it from the array
		if (doesMealExist) {
			setSelectedMeals((prev) => prev.filter((item) => item.id !== meal.id));
		}
		// Otherwise adding it to the array
		else {
			setSelectedMeals((prev) => [...prev, meal]);
		}
	};

	const handleAddMealToWeek = (week: "week-one" | "week-two" | "week-three" | "week-four") => {
		let idsOfExistingMeals: Array<number> = [];
		let mealsToAdd: Array<Meal> = [];

		switch (week) {
			case "week-one":
				// Filtering out meals that already exist in selected week
				idsOfExistingMeals = weekOneMeals.map((item) => item.id);
				mealsToAdd = selectedMeals.filter((item) => !idsOfExistingMeals.includes(item.id));
				setWeekOneMeals((prev) => [...prev, ...mealsToAdd]);
				break;

			case "week-two":
				// Filtering out meals that already exist in selected week
				idsOfExistingMeals = weekTwoMeals.map((item) => item.id);
				mealsToAdd = selectedMeals.filter((item) => !idsOfExistingMeals.includes(item.id));
				setWeekTwoMeals((prev) => [...prev, ...mealsToAdd]);
				break;

			case "week-three":
				// Filtering out meals that already exist in selected week
				idsOfExistingMeals = weekThreeMeals.map((item) => item.id);
				mealsToAdd = selectedMeals.filter((item) => !idsOfExistingMeals.includes(item.id));
				setWeekThreeMeals((prev) => [...prev, ...mealsToAdd]);
				break;

			case "week-four":
				// Filtering out meals that already exist in selected week
				idsOfExistingMeals = weekFourMeals.map((item) => item.id);
				mealsToAdd = selectedMeals.filter((item) => !idsOfExistingMeals.includes(item.id));
				setWeekFourMeals((prev) => [...prev, ...mealsToAdd]);
				break;

			default:
				break;
		}

		setSelectedMeals([]);
	};

	const handleMealDeletion = (week: "week-one" | "week-two" | "week-three" | "week-four", meal: Meal) => {
		switch (week) {
			case "week-one":
				setWeekOneMeals((prev) => prev.filter((item) => item.id !== meal.id));
				break;

			case "week-two":
				setWeekTwoMeals((prev) => prev.filter((item) => item.id !== meal.id));
				break;

			case "week-three":
				setWeekThreeMeals((prev) => prev.filter((item) => item.id !== meal.id));
				break;

			case "week-four":
				setWeekFourMeals((prev) => prev.filter((item) => item.id !== meal.id));
				break;

			default:
				break;
		}
	};

	const renderMeals = (tab: "all" | "week-one" | "week-two" | "week-three" | "week-four") => {
		switch (tab) {
			case "week-one":
				return weekOneMeals.map((meal) => (
					<Grid
						key={meal.id}
						size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<MealCard
							title={meal.name}
							description={meal.instructions.join(" ")}
							cuisine={meal.cuisine}
							image={meal.image}
							rating={meal.rating}
							mealType={meal.mealType}
							onDeleteClick={() => {
								handleMealDeletion("week-one", meal);
							}}
						/>
					</Grid>
				));

			case "week-two":
				return weekTwoMeals.map((meal) => (
					<Grid
						key={meal.id}
						size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<MealCard
							title={meal.name}
							description={meal.instructions.join(" ")}
							cuisine={meal.cuisine}
							image={meal.image}
							rating={meal.rating}
							mealType={meal.mealType}
							onDeleteClick={() => {
								handleMealDeletion("week-two", meal);
							}}
						/>
					</Grid>
				));

			case "week-three":
				return weekThreeMeals.map((meal) => (
					<Grid
						key={meal.id}
						size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<MealCard
							title={meal.name}
							description={meal.instructions.join(" ")}
							cuisine={meal.cuisine}
							image={meal.image}
							rating={meal.rating}
							mealType={meal.mealType}
							onDeleteClick={() => {
								handleMealDeletion("week-three", meal);
							}}
						/>
					</Grid>
				));

			case "week-four":
				return weekFourMeals.map((meal) => (
					<Grid
						key={meal.id}
						size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<MealCard
							title={meal.name}
							description={meal.instructions.join(" ")}
							cuisine={meal.cuisine}
							image={meal.image}
							rating={meal.rating}
							mealType={meal.mealType}
							onDeleteClick={() => {
								handleMealDeletion("week-four", meal);
							}}
						/>
					</Grid>
				));

			default:
				return allMeals.map((meal) => (
					<Grid
						key={meal.id}
						size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<MealCard
							title={meal.name}
							description={meal.instructions.join(" ")}
							cuisine={meal.cuisine}
							image={meal.image}
							rating={meal.rating}
							mealType={meal.mealType}
							selected={selectedMeals.find((item) => item.id === meal.id) ? true : false}
							onSelection={() => {
								handleMealSelection(meal);
							}}
						/>
					</Grid>
				));
		}
	};

	return (
		<>
			<AddMealsModal
				open={openModal}
				onClose={() => {
					setOpenModal(false);
				}}
				onSubmit={handleAddMealToWeek}
			/>
			<Box className={"top"}>
				<Box className={"topImage"}>
					<Box className={"topImageTextBox"}>
						<Typography
							variant="h4"
							sx={{
								fontWeight: "bold",
							}}
							textAlign={"center"}
						>
							Optimized Your Meal
						</Typography>
						<Typography mt={1} mb={3} variant="caption" textAlign={"center"}>
							Select Meal to Add in Week. You will be able to edit. modify and change the Meal Weeks.
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box>
				<Box className={"bottomTitleContainer"}>
					<Typography
						variant="h5"
						sx={{
							fontWeight: "bold",
						}}
						textAlign={"left"}
					>
						Week Orders
					</Typography>
				</Box>
				<Box className={"bottomTabsBackground"}>
					<Box className={"bottomTabsContainer"}>
						<Tabs
							variant="scrollable"
							scrollButtons="auto"
							allowScrollButtonsMobile
							value={selectedTab}
							onChange={handleTabChange}
						>
							<Tab label="All Meals" value={"all"} />
							<Tab label="Week 1" value={"week-one"} />
							<Tab label="Week 2" value={"week-two"} />
							<Tab label="Week 3" value={"week-three"} />
							<Tab label="Week 4" value={"week-four"} />
						</Tabs>
						<Button
							variant="contained"
							onClick={() => {
								setOpenModal(true);
							}}
						>
							Add to Week
						</Button>
					</Box>
				</Box>
				<Box className={loading ? "bottomCardsContainerLoading" : "bottomCardsContainer"}>
					{loading ? (
						<Box sx={{ width: "100%" }}>
							<LinearProgress />
						</Box>
					) : (
						<Box className="mealContainer">
							<Grid container spacing={2}>
								{renderMeals(selectedTab)}
							</Grid>
						</Box>
					)}
				</Box>
			</Box>
		</>
	);
}
