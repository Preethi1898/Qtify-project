import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Card from "../Card/Card";
import styles from "../Section/Section.module.css";
import Tabs from '@mui/material/Tabs';
import Tab from "@mui/material/Tab";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function TabSection({ data, genres, title }) {
	const [value, setValue] = React.useState("all");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
      };
	const filteredSongs = (data, genre) => {
		const filteredSongs =
			genre === "all"
				? data
				: data.filter((songs) => songs.genre.key === genre);
		console.log(filteredSongs);
		return (
			<Slider  {...settings}>
				{filteredSongs.map((ele, i) => (
					
						<Card key={i} data={ele} type="songs" />
					
				))}
			</Slider>
		);
	};

	return (
		<>
			<div className={styles.header}>
				<h3>{title}</h3>
			</div>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						onChange={handleChange}
						aria-label="songs"
						indicatorColor="success"
						textColor="success"
					>
						<Tab label="All" value="all" />
						<Tab label="Rock" value="rock" />
						<Tab label="Pop" value="pop" />
						<Tab label="Jazz" value="jazz" />
						<Tab label="Blues" value="blues" />
					</Tabs>
				</Box>
				<TabPanel value="all">{filteredSongs(data, "all")}</TabPanel>
				<TabPanel value="rock">{filteredSongs(data, "rock")}</TabPanel>
				<TabPanel value="pop">{filteredSongs(data, "pop")}</TabPanel>
				<TabPanel value="jazz">{filteredSongs(data, "jazz")}</TabPanel>
				<TabPanel value="blues">{filteredSongs(data, "blues")}</TabPanel>
			</TabContext>
		</>
	);
}