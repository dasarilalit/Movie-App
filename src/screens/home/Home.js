import React, { Component } from "react";
import Details from "../details/Details";
import ReactDOM from "react-dom";
import "./Home.css";
import Header from "../../common/header/Header";
import { withStyles } from "@material-ui/core/styles";
import moviesData from "../../common/movieData";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
/*import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
*/

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    upcomingMoviesHeading: {
        textAlign: "center",
        background: "#09081f",
        padding: "8px",
        fontSize: "2rem",
        color: "white",
    },
    gridListUpcomingMovies: {
        flexWrap: "nowrap",
        transform: "translateZ(0)",
        width: "100%",
    },
    gridListMain: {
        transform: "translateZ(0)",
        cursor: "pointer",
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 250,
    },
    title: {
        color: theme.palette.primary.light,
    },
});

class Home extends Component {
    constructor() {
        super();
        this.state = {
            movieName: "",
        };
    }

    movieNameChangeHandler = (event) => {
        this.setState({ movieName: event.target.value });
        console.log(this.state.movieName);
    };

    movieClickHandler = (movieId) => {
        ReactDOM.render( <
            Details movieId = { movieId }
            />,
            document.getElementById("root")
        );
    };

    render() {
        const { classes } = this.props;
        return ( <
            div className = "All" >
            <
            div >
            <
            Header baseUrl = { this.props.baseUrl }
            />

            <
            div className = "upcomingMoviesHeading" > Upcoming Movies < /div>

            <
            GridList cellHeight = { 600 }
            cols = { 4 }
            className = { classes.gridListUpcomingMovies } >
            {
                moviesData.map((movie) => ( <
                    GridListTile key = { movie.id } >
                    <
                    img src = { movie.poster_url }
                    className = "movie-poster"
                    alt = { movie.title }
                    /> <
                    GridListTileBar title = { movie.title }
                    /> <
                    /GridListTile>
                ))
            } <
            /GridList>

            <
            div className = "name" > Released Movies < /div> <
            div className = "flex-container" >
            <
            div className = "left" >
            <
            GridList cellHeight = { 390 }
            cols = { 5 }
            className = { classes.gridListMain } >
            {
                moviesData.map((movie) => ( <
                    GridListTile onClick = {
                        () => this.movieClickHandler(movie.id) }
                    className = "released-movie-grid-item"
                    key = { "grid" + movie.id } >
                    <
                    GridListTile onClick = {
                        () => this.movieClickHandler(movie.id) }
                    className = "released-movie-grid-item"
                    key = { "grid" + movie.id } >
                    <
                    img src = { movie.poster_url }
                    className = "movie-poster"
                    alt = { movie.title }
                    />

                    <
                    GridListTileBar title = { movie.title }
                    subtitle = { <
                        span >
                        Release Date: { " " } { new Date(movie.release_date).toDateString() } <
                        /span>
                    }
                    /> <
                    /GridListTile> <
                    /GridListTile>
                ))
            } <
            /GridList> <
            /div> <
            /div> <
            /div> <
            /div>
        );
    }
}
export default withStyles(styles)(Home);